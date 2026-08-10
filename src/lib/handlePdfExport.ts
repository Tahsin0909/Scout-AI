interface HandlePdfExportOptions {
    elementId: string;
    fileName: string;
    width?: number;
    scale?: number;
    forceLightTheme?: boolean;
}

export const handlePdfExport = async ({
    elementId,
    fileName,
    width = 1280,
    scale = 2,
    forceLightTheme = true,
}: HandlePdfExportOptions): Promise<void> => {
    const reportElement = document.getElementById(elementId);

    if (!reportElement) {
        throw new Error(`PDF export element with id "${elementId}" was not found.`);
    }

    let clone: HTMLElement | null = null;

    try {
        if (document.fonts) {
            await document.fonts.ready;
        }

        const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
            import("html2canvas-pro"),
            import("jspdf"),
        ]);

        clone = reportElement.cloneNode(true) as HTMLElement;

        clone.id = `${elementId}PdfClone`;
        clone.style.position = "fixed";
        clone.style.left = "-100000px";
        clone.style.top = "0";
        clone.style.width = `${width}px`;
        clone.style.maxWidth = `${width}px`;
        clone.style.margin = "0";
        clone.style.padding = "24px";
        clone.style.zIndex = "-9999";

        /*
         * Don't copy the current dark background into the clone
         * when we want the PDF to always be light.
         */
        if (forceLightTheme) {
            clone.style.backgroundColor = "#ffffff";
            clone.style.color = "#111111";
            clone.style.colorScheme = "light";
        } else {
            const reportStyles = window.getComputedStyle(reportElement);

            clone.style.backgroundColor =
                reportStyles.backgroundColor === "rgba(0, 0, 0, 0)"
                    ? "#ffffff"
                    : reportStyles.backgroundColor;

            clone.style.color = reportStyles.color;
        }

        clone.querySelectorAll("[data-pdf-hide]").forEach((element) => {
            (element as HTMLElement).style.display = "none";
        });

        document.body.appendChild(clone);

        await new Promise<void>((resolve) => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => resolve());
            });
        });

        const images = Array.from(clone.querySelectorAll("img"));

        await Promise.all(
            images.map(
                (image) =>
                    new Promise<void>((resolve) => {
                        if (image.complete) {
                            resolve();
                            return;
                        }

                        image.onload = () => resolve();
                        image.onerror = () => resolve();
                    }),
            ),
        );

        const cloneRect = clone.getBoundingClientRect();

        const pdfBlocks = Array.from(
            clone.querySelectorAll<HTMLElement>("[data-pdf-block]"),
        ).map((element) => {
            const rect = element.getBoundingClientRect();

            return {
                top: rect.top - cloneRect.top,
                bottom: rect.bottom - cloneRect.top,
                height: rect.height,
            };
        });

        const backgroundColor = forceLightTheme
            ? "#ffffff"
            : clone.style.backgroundColor || "#ffffff";

        const canvas = await html2canvas(clone, {
            scale,
            useCORS: true,
            logging: false,
            backgroundColor,
            width: clone.scrollWidth,
            height: clone.scrollHeight,
            windowWidth: width,

            /*
             * html2canvas creates another cloned document internally.
             * Remove dark mode only from that document.
             */
            onclone: (clonedDocument) => {
                if (!forceLightTheme) {
                    return;
                }

                const html = clonedDocument.documentElement;
                const body = clonedDocument.body;

                /*
                 * Works with Tailwind / next-themes using:
                 * <html class="dark">
                 */
                html.classList.remove("dark");
                html.classList.add("light");

                /*
                 * Also support applications using data-theme.
                 */
                html.setAttribute("data-theme", "light");

                html.style.colorScheme = "light";
                body.style.colorScheme = "light";
                body.style.backgroundColor = "#ffffff";

                const clonedReport = clonedDocument.getElementById(
                    `${elementId}PdfClone`,
                );

                if (clonedReport) {
                    clonedReport.style.backgroundColor = "#ffffff";
                    clonedReport.style.colorScheme = "light";
                }
            },
        });

        clone.remove();
        clone = null;

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: "a4",
            compress: true,
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const margin = 8;

        const printableWidth = pdfWidth - margin * 2;
        const printableHeight = pdfHeight - margin * 2;

        const canvasScale = canvas.width / cloneRect.width;

        const pageHeightCss =
            (printableHeight / printableWidth) * cloneRect.width;

        let currentTopCss = 0;
        let pageIndex = 0;

        while (currentTopCss < cloneRect.height) {
            const desiredBottomCss = Math.min(
                currentTopCss + pageHeightCss,
                cloneRect.height,
            );

            let safeBottomCss = desiredBottomCss;

            const crossingBlocks = pdfBlocks
                .filter((block) => {
                    const crossesPageBreak =
                        block.top < desiredBottomCss &&
                        block.bottom > desiredBottomCss;

                    const fitsOnPage =
                        block.height < pageHeightCss * 0.95;

                    return crossesPageBreak && fitsOnPage;
                })
                .sort((a, b) => a.top - b.top);

            if (crossingBlocks.length > 0) {
                const minimumUsefulHeight =
                    currentTopCss + pageHeightCss * 0.45;

                const goodBlock = crossingBlocks.find(
                    (block) => block.top > minimumUsefulHeight,
                );

                if (goodBlock) {
                    safeBottomCss = goodBlock.top - 8;
                }
            }

            if (safeBottomCss <= currentTopCss + 50) {
                safeBottomCss = desiredBottomCss;
            }

            const sliceTopPx = Math.round(
                currentTopCss * canvasScale,
            );

            const sliceBottomPx = Math.min(
                Math.round(safeBottomCss * canvasScale),
                canvas.height,
            );

            const sliceHeightPx =
                sliceBottomPx - sliceTopPx;

            if (sliceHeightPx <= 0) {
                break;
            }

            const pageCanvas =
                document.createElement("canvas");

            pageCanvas.width = canvas.width;
            pageCanvas.height = sliceHeightPx;

            const context =
                pageCanvas.getContext("2d");

            if (!context) {
                throw new Error(
                    "Unable to create PDF canvas context.",
                );
            }

            /*
             * PDF pages will always be white when light export is enabled.
             */
            context.fillStyle = backgroundColor;
            context.fillRect(
                0,
                0,
                pageCanvas.width,
                pageCanvas.height,
            );

            context.drawImage(
                canvas,
                0,
                sliceTopPx,
                canvas.width,
                sliceHeightPx,
                0,
                0,
                canvas.width,
                sliceHeightPx,
            );

            const imageData = pageCanvas.toDataURL(
                "image/jpeg",
                0.94,
            );

            const imageHeightMm =
                (sliceHeightPx / canvas.width) *
                printableWidth;

            if (pageIndex > 0) {
                pdf.addPage();
            }

            pdf.addImage(
                imageData,
                "JPEG",
                margin,
                margin,
                printableWidth,
                imageHeightMm,
                undefined,
                "FAST",
            );

            currentTopCss = safeBottomCss;
            pageIndex += 1;
        }

        const safeFileName = fileName
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        pdf.save(`${safeFileName || "report"}.pdf`);
    } finally {
        clone?.remove();
    }
};
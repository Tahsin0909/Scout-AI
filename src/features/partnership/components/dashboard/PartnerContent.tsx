"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
    AtSign,
    CalendarDays,
    ChevronDown,
    Download,
    FileText,
    ImageIcon,
    Instagram,
    LayoutGrid,
    Library,
    PackageOpen,
    PlayCircle,
    Send,
    UploadCloud,
    Video
} from "lucide-react";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";

type SubmissionStatus = "Pending" | "Approved" | "Rejected";
type SocialPlatform = "Instagram" | "TikTok" | "Threads";

interface IContentSubmission {
    id: string;
    date: string;
    platform: SocialPlatform;
    campaignName: string;
    status: SubmissionStatus;
}

type ResourceCategory = "Assets" | "Templates" | "Training";

interface IPartnerResource {
    id: number;
    title: string;
    description: string;
    category: ResourceCategory;
    actionLabel: string;
    icon: React.ReactNode;
}

const submissionHistory: IContentSubmission[] = [
    {
        id: "1",
        date: "2023-10-24",
        platform: "Instagram",
        campaignName: "Andes Summit Gear Review",
        status: "Pending",
    },
    {
        id: "2",
        date: "2023-10-20",
        platform: "TikTok",
        campaignName: "Basecamp Essentials",
        status: "Approved",
    },
    {
        id: "3",
        date: "2023-10-15",
        platform: "Threads",
        campaignName: "Alpine Ethics Story",
        status: "Rejected",
    },
];

const partnerResources: IPartnerResource[] = [
    {
        id: 1,
        title: "Brand Assets Pack v2.0",
        description:
            "Latest high-resolution logos, icons, and color guides for the Winter 2024 season.",
        category: "Assets",
        actionLabel: "Download Assets",
        icon: <ImageIcon className="h-5 w-5" />,
    },
    {
        id: 2,
        title: "Elite Partner Training",
        description:
            "Exclusive video tutorial on maximizing conversion for technical gear reviews.",
        category: "Training",
        actionLabel: "Watch Module",
        icon: <Video className="h-5 w-5" />,
    },
    {
        id: 3,
        title: "Campaign Brief: Everest '24",
        description:
            "Guidelines, required hashtags, and messaging for the upcoming expedition.",
        category: "Assets",
        actionLabel: "Download PDF",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        id: 4,
        title: "Story Templates Kit",
        description:
            "Custom-designed Instagram story frames and overlays for gear unboxing.",
        category: "Templates",
        actionLabel: "Get Templates",
        icon: <LayoutGrid className="h-5 w-5" />,
    },
];

const formatDate = (date: string) => {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(parsedDate);
};

const getPlatformIcon = (platform: SocialPlatform) => {
    switch (platform) {
        case "Instagram":
            return <Instagram className="h-4 w-4" />;

        case "TikTok":
            return <CalendarDays className="h-4 w-4" />;

        case "Threads":
            return <AtSign className="h-4 w-4" />;

        default:
            return null;
    }
};

const getStatusStyle = (status: SubmissionStatus) => {
    switch (status) {
        case "Approved":
            return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";

        case "Rejected":
            return "border-red-500/30 bg-red-500/10 text-red-400";

        case "Pending":
        default:
            return "border-orange-500/30 bg-orange-500/10 text-orange-400";
    }
};

const PartnerContent = () => {
    const [activeCategory, setActiveCategory] = useState<
        "All" | ResourceCategory
    >("All");

    const [postUrl, setPostUrl] = useState("");
    const [platform, setPlatform] = useState<SocialPlatform>("Instagram");
    const [notes, setNotes] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const filteredResources = useMemo(() => {
        if (activeCategory === "All") {
            return partnerResources;
        }

        return partnerResources.filter(
            (resource) => resource.category === activeCategory,
        );
    }, [activeCategory]);

    const columns: ColumnDef<IContentSubmission>[] = [
        {
            accessorKey: "date",
            header: "DATE",
            cell: ({ row }) => (
                <span className="whitespace-nowrap text-xs text-foreground/80">
                    {formatDate(row.original.date)}
                </span>
            ),
        },
        {
            accessorKey: "platform",
            header: "PLATFORM",
            cell: ({ row }) => (
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                    {getPlatformIcon(row.original.platform)}

                    <span>{row.original.platform}</span>
                </div>
            ),
        },
        {
            accessorKey: "campaignName",
            header: "CAMPAIGN NAME",
            cell: ({ row }) => (
                <span className="text-xs text-foreground/80">
                    {row.original.campaignName}
                </span>
            ),
        },
        {
            accessorKey: "status",
            header: "STATUS",
            cell: ({ row }) => (
                <Badge
                    variant="outline"
                    className={`rounded-full px-2.5 py-1 text-[11px] font-normal ${getStatusStyle(
                        row.original.status,
                    )}`}
                >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />

                    {row.original.status}
                </Badge>
            ),
        },
    ];

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const maximumSize = 10 * 1024 * 1024;

        if (file.size > maximumSize) {
            window.alert("The selected file must be 10MB or smaller.");
            event.target.value = "";
            return;
        }

        setSelectedFile(file);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            postUrl,
            platform,
            notes,
            visualProof: selectedFile,
        };

        console.log("Content submission:", formData);
    };

    return (
        <main className="container">
            <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* Heading */}
                <header className="mb-5">
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Partner Content
                    </h1>

                    <p className="mt-2 max-w-[580px] text-sm leading-5 text-muted-foreground sm:text-base">
                        Manage your expedition content submissions and track
                        platform updates in one centralized hub.
                    </p>
                </header>

                {/* Content form and resource library */}
                <section className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(300px,500px)_1fr]">
                    {/* Submit content form */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-xl bg-card p-4 shadow-lg sm:p-6"
                    >
                        <div className="mb-5 flex items-center gap-2">
                            <PackageOpen className="h-5 w-5 text-blue-500" />

                            <h2 className="text-base font-semibold sm:text-lg">
                                Submit Your Content
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {/* Post URL */}
                            <div>
                                <label
                                    htmlFor="post-url"
                                    className="mb-2 block text-xs font-medium uppercase tracking-wide"
                                >
                                    Post URL
                                </label>

                                <input
                                    id="post-url"
                                    type="url"
                                    value={postUrl}
                                    onChange={(event) =>
                                        setPostUrl(event.target.value)
                                    }
                                    placeholder="https://instagram.com/p/..."
                                    className="h-11 w-full rounded-md border border-border bg-transparent px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                />
                            </div>

                            {/* Platform */}
                            <div>
                                <label
                                    htmlFor="social-platform"
                                    className="mb-2 block text-xs font-medium uppercase tracking-wide"
                                >
                                    Social Platform
                                </label>

                                <div className="relative">
                                    <select
                                        id="social-platform"
                                        value={platform}
                                        onChange={(event) =>
                                            setPlatform(
                                                event.target
                                                    .value as SocialPlatform,
                                            )
                                        }
                                        className="h-11 w-full appearance-none rounded-md border border-border  px-3 pr-10 text-sm outline-none transition-colors focus:border-primary"
                                    >
                                        <option value="Instagram" className="bg-primary/20 text-black hover:bg-primary/40">
                                            Instagram
                                        </option>

                                        <option value="TikTok" className="bg-primary/20 text-black hover:bg-primary/40">TikTok</option>

                                        <option value="Threads" className="bg-primary/20 text-black hover:bg-primary/40">
                                            Threads
                                        </option>
                                    </select>

                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                </div>
                            </div>

                            {/* Visual proof */}
                            <div>
                                <label className="mb-2 block text-xs font-medium uppercase tracking-wide">
                                    Visual Proof
                                </label>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/png,image/jpeg,image/jpg"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="flex min-h-[150px] w-full flex-col items-center justify-center rounded-md border border-dashed border-border px-4 py-6 text-center transition-colors hover:border-yellow-400 hover:bg-yellow-400/[0.03]"
                                >
                                    <UploadCloud className="h-7 w-7 text-yellow-400" />

                                    {selectedFile ? (
                                        <>
                                            <span className="mt-3 max-w-full truncate text-sm font-medium">
                                                {selectedFile.name}
                                            </span>

                                            <span className="mt-1 text-xs text-muted-foreground">
                                                Click to replace the selected
                                                image
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="mt-3 text-sm text-muted-foreground">
                                                Drop screenshot or click to
                                                upload
                                            </span>

                                            <span className="mt-1 text-xs font-medium text-yellow-400">
                                                PNG, JPG up to 10MB
                                            </span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Notes */}
                            <div>
                                <label
                                    htmlFor="content-notes"
                                    className="mb-2 block text-xs font-medium uppercase tracking-wide"
                                >
                                    Notes (Optional)
                                </label>

                                <textarea
                                    id="content-notes"
                                    value={notes}
                                    onChange={(event) =>
                                        setNotes(event.target.value)
                                    }
                                    placeholder="Context about the post or campaign..."
                                    rows={4}
                                    className="w-full resize-none rounded-md border border-border bg-muted/40 px-3 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="h-11 w-full bg-[#FFD43B] font-semibold text-black hover:bg-[#FFD43B]/90"
                            >
                                <Send className="mr-2 h-4 w-4" />
                                Submit for Review
                            </Button>
                        </div>
                    </form>

                    {/* Resource library */}
                    <div className="min-w-0">
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2">
                                <Library className="h-4 w-4" />

                                <h2 className="text-sm font-medium">
                                    Resource Library
                                </h2>
                            </div>

                            <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
                                {(
                                    [
                                        "All",
                                        "Assets",
                                        "Templates",
                                        "Training",
                                    ] as const
                                ).map((category) => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`shrink-0 rounded-full px-4 py-1.5 text-xs transition-colors ${activeCategory === category
                                            ? "bg-[#FFD43B] font-medium text-black"
                                            : "bg-card text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {filteredResources.map((resource) => (
                                <article
                                    key={resource.id}
                                    className="flex min-h-[190px] flex-col rounded-xl border border-border/60 bg-card p-5"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                                        {resource.icon}
                                    </div>

                                    <h3 className="mt-4 text-sm font-medium">
                                        {resource.title}
                                    </h3>

                                    <p className="mt-2 line-clamp-3 text-xs leading-5 text-muted-foreground">
                                        {resource.description}
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-auto flex items-center gap-2 pt-4 text-left text-xs font-medium text-yellow-400 transition-colors hover:text-yellow-300"
                                    >
                                        {resource.category === "Training" ? (
                                            <PlayCircle className="h-4 w-4" />
                                        ) : (
                                            <Download className="h-4 w-4" />
                                        )}

                                        {resource.actionLabel}
                                    </button>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Submission history */}
                <section className="mt-8">
                    <h2 className="mb-4 text-sm font-medium text-muted-foreground">
                        Submission History
                    </h2>

                    <div
                        className="
                            overflow-x-auto

                            [&_table]:min-w-[700px]
                            [&_table]:border-collapse

                            [&_thead]:bg-muted
                            [&_thead_tr]:border-none

                            [&_th]:h-12
                            [&_th]:px-4
                            [&_th]:text-xs
                            [&_th]:font-normal
                            [&_th]:tracking-[0.12em]
                            [&_th]:text-foreground
                            sm:[&_th]:px-6

                            [&_tbody_tr]:border-border/40
                            [&_tbody_tr]:transition-colors
                            hover:[&_tbody_tr]:bg-muted/20

                            [&_td]:px-4
                            [&_td]:py-4
                            sm:[&_td]:px-6
                        "
                    >
                        <DataTable
                            data={submissionHistory}
                            columns={columns}
                            paginationMode="client"
                            searchMode="client"
                            total={submissionHistory.length}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PartnerContent;
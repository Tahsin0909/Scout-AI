"use client";

import { cn } from "@/lib/utils";
import { getValidPage, getVisiblePages } from "@/utils/pagination";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useState } from "react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange = () => { },
}: PaginationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobileState = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobileState();

    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, []);

  const maxVisible = isMobile ? 3 : 5;

  const visiblePages = getVisiblePages(
    totalPages,
    currentPage,
    maxVisible,
  );

  const firstVisiblePage = visiblePages[0];
  const lastVisiblePage =
    visiblePages[visiblePages.length - 1];

  const showStartEllipsis =
    firstVisiblePage !== undefined && firstVisiblePage > 1;

  const showEndEllipsis =
    lastVisiblePage !== undefined &&
    lastVisiblePage < totalPages;

  const changePage = (page: number) => {
    const validPage = getValidPage(
      page,
      currentPage,
      totalPages,
    );

    if (validPage) {
      onPageChange(validPage);
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center"
    >
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Previous */}
        <button
          type="button"
          aria-label="Go to previous page"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="
            flex size-9 shrink-0 items-center justify-center
            rounded-lg border border-border
            bg-card text-muted-foreground
            transition-[background-color,border-color,color,opacity]
            duration-200 ease-out
            hover:border-primary/50
            hover:bg-muted
            hover:text-foreground
            disabled:pointer-events-none
            disabled:opacity-40
            sm:size-10
          "
        >
          <ChevronLeft
            aria-hidden="true"
            className="size-4 sm:size-5"
          />
        </button>

        {/* Starting ellipsis */}
        {showStartEllipsis && (
          <>
            <PageButton
              page={1}
              currentPage={currentPage}
              onClick={changePage}
            />

            <PaginationEllipsis />
          </>
        )}

        {/* Page numbers */}
        {visiblePages.map((page) => (
          <PageButton
            key={page}
            page={page}
            currentPage={currentPage}
            onClick={changePage}
          />
        ))}

        {/* Ending ellipsis */}
        {showEndEllipsis && (
          <>
            <PaginationEllipsis />

            <PageButton
              page={totalPages}
              currentPage={currentPage}
              onClick={changePage}
            />
          </>
        )}

        {/* Next */}
        <button
          type="button"
          aria-label="Go to next page"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="
            flex size-9 shrink-0 items-center justify-center
            rounded-lg border border-border
            bg-card text-muted-foreground
            transition-[background-color,border-color,color,opacity]
            duration-200 ease-out
            hover:border-primary/50
            hover:bg-muted
            hover:text-foreground
            disabled:pointer-events-none
            disabled:opacity-40
            sm:size-10
          "
        >
          <ChevronRight
            aria-hidden="true"
            className="size-4 sm:size-5"
          />
        </button>
      </div>
    </nav>
  );
}

type PageButtonProps = {
  page: number;
  currentPage: number;
  onClick: (page: number) => void;
};

function PageButton({
  page,
  currentPage,
  onClick,
}: PageButtonProps) {
  const isActive = page === currentPage;

  return (
    <button
      type="button"
      aria-label={`Go to page ${page}`}
      aria-current={isActive ? "page" : undefined}
      onClick={() => onClick(page)}
      className={cn(
        `
          flex size-9 shrink-0 items-center justify-center
          rounded-lg text-sm font-semibold
          transition-[background-color,color,transform]
          duration-200 ease-out
          sm:size-10 sm:text-base
        `,
        isActive
          ? `
              bg-primary text-primary-foreground
              shadow-[0_6px_16px_-8px_rgba(255,210,63,0.9)]
            `
          : `
              bg-transparent text-foreground
              hover:bg-muted
            `,
      )}
    >
      {page}
    </button>
  );
}

function PaginationEllipsis() {
  return (
    <span
      aria-hidden="true"
      className="
        flex size-7 shrink-0 items-center justify-center
        text-muted-foreground
        sm:size-8
      "
    >
      <MoreHorizontal className="size-4" />
    </span>
  );
}
"use client";

import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Edit3, ExternalLink, FileText, Plus, RotateCcw, Search, Trash2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContentRecord {
  id: string;
  title: string;
  publishedDate: string;
  sourceLink: string;
}

export default function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const mockContents: ContentRecord[] = useMemo(() => {
    const titles = [
      "AI Face Morphing in Entertainment",
      "Deepfake Generation Techniques",
      "Generative AI in Travel Planning",
      "The Future of Outdoor Adventures",
      "Scout AI: Adventure Planner Launch",
      "Exploring the Wilderness with Machine Learning",
      "Advanced Navigation Systems for Hikers",
      "Top 10 Safe Travel Destinations in 2024",
      "How We Built Our Dynamic Routing Engine",
      "AI-Powered Tour Guides: A New Era",
      "Sustainability in Adventure Travel",
      "Gear Guide: Essential Gear for Overlanding",
      "Virtual Reality in Tourism Marketing",
      "Smart Packing: Travel Light and Efficient",
      "Understanding Hiker Demographics with Analytics",
      "Emergency Communications in the Backcountry",
      "The Role of Weather Forecasting in Expedition Planning",
      "Integrating Payment Gateways with Next.js",
      "Redefining Membership Tiers for Adventure Clubs",
      "Creating Interactive Map Experiences for Tourists",
    ];

    return titles.map((title, index) => ({
      id: `CNT-${2000 + index}`,
      title,
      publishedDate: "Oct 12, 2023",
      sourceLink: `https://example.com/content/${index + 1}`,
    }));
  }, []);

  const filteredContents = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return mockContents.filter((content) => {
      if (!normalizedSearch) return true;

      return content.title.toLowerCase().includes(normalizedSearch) || content.id.toLowerCase().includes(normalizedSearch);
    });
  }, [mockContents, searchTerm]);

  const totalItems = filteredContents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const paginatedContents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    return filteredContents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredContents, currentPage]);

  const startIndex = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-amber-50/70 p-5 shadow-sm dark:from-card dark:via-card dark:to-amber-500/[0.04] sm:p-6">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-muted-foreground">
              <FileText className="h-5 w-5" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Content Management
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Create, organize, manage, and track your published partnership content.
            </p>
          </div>

          <Button variant="primary" className="h-10 shrink-0 self-start rounded-xl px-4 font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:self-auto">
            <Plus className="mr-2 h-4 w-4" />
            Create New Content
          </Button>
        </div>
      </section>

      {/* Content Controls */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            All Content
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Browse and manage all published content.
          </p>
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search content or ID..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="h-10 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            />
          </div>

          {searchTerm && (
            <Button type="button" variant="ghost" onClick={handleResetSearch} className="h-10 shrink-0 rounded-xl px-3 text-xs font-semibold text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-500/10 dark:hover:text-amber-300">
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Reset
            </Button>
          )}
        </div>
      </section>

      {/* Content Card */}
      <Card className="overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm dark:shadow-none">
        <CardContent className="p-0">
          {/* Result Information */}
          <div className="flex flex-col gap-2 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs font-medium text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {startIndex}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-foreground">
                {endIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">
                {totalItems}
              </span>{" "}
              results
            </p>

            {totalItems > 0 && (
              <span className="self-start rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:self-auto">
                Page {currentPage} of {totalPages}
              </span>
            )}
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/70 bg-muted/20 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">
                    Content
                  </th>

                  <th className="px-6 py-4">
                    Published
                  </th>

                  <th className="px-6 py-4">
                    Source
                  </th>

                  <th className="px-6 py-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border/60">
                {paginatedContents.length > 0 ? (
                  paginatedContents.map((record) => (
                    <tr key={record.id} className="group transition-colors hover:bg-muted/30">
                      {/* Content */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <FileText className="h-4 w-4" />
                          </div>

                          <div className="min-w-0">
                            <p className="max-w-md truncate text-sm font-semibold text-foreground">
                              {record.title}
                            </p>

                            <p className="mt-0.5 text-[10px] font-medium text-muted-foreground">
                              {record.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Published Date */}
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {record.publishedDate}
                      </td>

                      {/* Source */}
                      <td className="px-6 py-4">
                        <a href={record.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 dark:hover:text-blue-400" title="Open source">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button type="button" variant="ghost" size="icon" title="Edit content" className="h-9 w-9 rounded-lg text-muted-foreground hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-500/10 dark:hover:text-amber-400">
                            <Edit3 className="h-4 w-4" />
                          </Button>

                          <Button type="button" variant="ghost" size="icon" title="Delete content" className="h-9 w-9 rounded-lg text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-16">
                      <EmptyState searchTerm={searchTerm} onReset={handleResetSearch} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-border/60 md:hidden">
            {paginatedContents.length > 0 ? (
              paginatedContents.map((record) => (
                <article key={record.id} className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
                      <FileText className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold leading-5 text-foreground">
                        {record.title}
                      </h3>

                      <p className="mt-1 text-[10px] font-medium text-muted-foreground">
                        {record.id}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-border/60 bg-muted/20 p-3">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Published Date
                    </p>

                    <p className="mt-1 text-xs font-semibold text-foreground">
                      {record.publishedDate}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-4">
                    <a href={record.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 flex-1 items-center justify-center rounded-xl border border-border bg-background px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted">
                      <ExternalLink className="mr-2 h-3.5 w-3.5" />
                      Open Source
                    </a>

                    <Button type="button" variant="outline" size="icon" title="Edit content" className="h-9 w-9 shrink-0 rounded-xl text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-500/10">
                      <Edit3 className="h-4 w-4" />
                    </Button>

                    <Button type="button" variant="outline" size="icon" title="Delete content" className="h-9 w-9 shrink-0 rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-500/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </article>
              ))
            ) : (
              <div className="px-5 py-14">
                <EmptyState searchTerm={searchTerm} onReset={handleResetSearch} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Showing {startIndex}–{endIndex} of {totalItems}
          </p>

          <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-sm">
            <button type="button" aria-label="Previous page" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40">
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button type="button" key={page} onClick={() => handlePageChange(page)} className={`h-9 min-w-9 rounded-lg px-2 text-xs font-semibold transition-all ${currentPage === page ? "bg-amber-400 text-zinc-950 shadow-sm hover:bg-amber-500" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                {page}
              </button>
            ))}

            <button type="button" aria-label="Next page" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyState({
  searchTerm,
  onReset,
}: {
  searchTerm: string;
  onReset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
        <FileText className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-foreground">
        No content found
      </h3>

      <p className="mt-1 text-xs leading-5 text-muted-foreground">
        {searchTerm
          ? "No content matches your current search."
          : "There are no content items available yet."}
      </p>

      {searchTerm && (
        <Button type="button" variant="outline" onClick={onReset} className="mt-4 rounded-xl">
          <RotateCcw className="mr-2 h-3.5 w-3.5" />
          Clear search
        </Button>
      )}
    </div>
  );
}
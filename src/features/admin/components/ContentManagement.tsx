"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { Button } from "@/components/ui/button";
import { Article, articles } from "@/features/articles/components/data/articles-data";

import { ColumnDef } from "@tanstack/react-table";
import { Edit3, ExternalLink, FileText, Plus, Trash2 } from "lucide-react";
import Link from "next/link";



type ContentRow = Omit<Article, "id"> & { id: string };

export default function ContentManagement() {
  const columns: ColumnDef<ContentRow>[] = [
    {
      id: "content",
      accessorFn: (row) => `${row.title} ${row.id}`,
      header: "Content",
      cell: ({ row }) => {
        const content = row.original;

        return (
          <div className="flex min-w-[280px] items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
              <FileText className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="max-w-md truncate text-sm font-medium text-foreground">
                {content.title}
              </p>

              <p className="mt-0.5 text-[10px] font-medium text-muted-foreground">
                {content.id}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "publishedDate",
      header: "Published",
      cell: ({ row }) => (
        <span className="whitespace-nowrap text-xs text-muted-foreground">
          {new Date(row.original.publishedAt).toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: "sourceLink",
      header: "Source",
      cell: ({ row }) => (
        <a target="_blank" rel="noopener noreferrer" title="Open source" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/40 bg-muted/40 text-muted-foreground transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
          {/* TODO: need to remove +1  */}
          <Link href={`/articles/${Number(row.id) + 1}`}>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </a>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row }) => {
        const content = row.original;

        return (
          <div className="flex items-center justify-end gap-1.5">
            <Button type="button" variant="ghost" size="icon" title="Edit Content" onClick={() => console.log("Edit content:", content)} className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-500/10 dark:hover:text-amber-400">
              <Link href={`/admin/article/${Number(row.id) + 1}`}>
                <Edit3 className="h-3.5 w-3.5" />
              </Link>
            </Button>

            <Button type="button" variant="ghost" size="icon" title="Delete Content" onClick={() => console.log("Delete content:", content)} className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400">
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Articles Management
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Create, organize, manage, and track your published articles.
        </p>
      </section>

      {/* Data Table */}
      <section className="overflow-hidden rounded-md">
        <div className="[&_table]:min-w-[750px] [&_table]:border-collapse [&_thead]:bg-muted/70 [&_thead_tr]:border-none [&_th]:h-11 [&_th]:px-4 [&_th]:text-xs [&_th]:font-medium [&_th]:text-foreground [&_th:last-child]:text-right [&_tbody_tr]:border-border/50 [&_tbody_tr]:transition-colors hover:[&_tbody_tr]:bg-muted/30 [&_td]:px-4 [&_td]:py-3">
          <DataTable
            data={articles.map((a) => ({ ...a, id: String(a.id) }))}
            columns={columns}
            paginationMode="client"
            searchMode="client"
            total={articles.length}
            csvFileName="content.csv"
            renderActions={() => (
              <Button type="button" variant="primary" size="sm" onClick={() => console.log("Create new content")}>
                <Link href={`/admin/article/add`} className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Create Content
                </Link>
              </Button>
            )}
          />
        </div>
      </section>
    </div>
  );
}
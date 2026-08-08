"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ColumnDef, Table } from "@tanstack/react-table";
import { ChevronDown, Eye } from "lucide-react";
import { useMemo } from "react";

interface PartnerRecord {
    id: string;
    name: string;
    email: string;
    membership: "Elite Tier" | "Explorer" | "Basecamp";
    date: string;
    status: "Active" | "Inactive";
    avatarUrl?: string;
}

const getMembershipStyle = (membership: PartnerRecord["membership"]) => {
    switch (membership) {
        case "Elite Tier":
            return "text-foreground";
        case "Explorer":
            return "text-muted-foreground";
        case "Basecamp":
            return "text-muted-foreground";
        default:
            return "text-muted-foreground";
    }
};

const getStatusStyle = (status: PartnerRecord["status"]) => {
    switch (status) {
        case "Active":
            return "border-emerald-500/20 bg-emerald-500/15 text-emerald-500 dark:text-emerald-400";
        case "Inactive":
            return "border-border bg-muted text-muted-foreground";
        default:
            return "border-border bg-muted text-muted-foreground";
    }
};

export default function PartnershipTable() {
    const partners: PartnerRecord[] = useMemo(() => {
        const memberships: PartnerRecord["membership"][] = [
            "Elite Tier",
            "Explorer",
            "Basecamp",
            "Explorer",
            "Basecamp",
            "Basecamp",
            "Explorer",
            "Elite Tier",
            "Explorer",
            "Elite Tier",
            "Basecamp",
            "Explorer",
            "Elite Tier",
            "Basecamp",
            "Explorer",
        ];

        const statuses: PartnerRecord["status"][] = [
            "Active",
            "Inactive",
            "Inactive",
            "Active",
            "Active",
            "Inactive",
            "Active",
            "Active",
            "Inactive",
            "Active",
            "Active",
            "Inactive",
            "Active",
            "Inactive",
            "Active",
        ];

        return Array.from({ length: 50 }, (_, index) => {
            const names = [
                "Marcus Thorne",
                "Sarah Jenkins",
                "David Chen",
                "Elena Rodriguez",
                "Liam Carter",
            ];

            const name = index < 10 ? "Marcus Thorne" : names[index % names.length];

            const emailMap: Record<string, string> = {
                "Marcus Thorne": "m.thorne@apexlab.com",
                "Sarah Jenkins": "s.jenkins@apexlab.com",
                "David Chen": "d.chen@apexlab.com",
                "Elena Rodriguez": "e.rodriguez@apexlab.com",
                "Liam Carter": "l.carter@apexlab.com",
            };

            const daysAgo = index % 45;
            const date = new Date();
            date.setDate(date.getDate() - daysAgo);

            return {
                id: `PTR-${1000 + index + 1}`,
                name,
                email: emailMap[name],
                membership: memberships[index % memberships.length],
                status: statuses[index % statuses.length],
                date: date.toISOString(),
                avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}-${index}`,
            };
        });
    }, []);

    const columns: ColumnDef<PartnerRecord>[] = [
        {
            id: "name",
            accessorFn: (row) => `${row.name} ${row.email} ${row.id}`,
            header: "Name",
            cell: ({ row }) => {
                const partner = row.original;

                return (
                    <div className="flex min-w-[210px] items-center gap-2.5">
                        {partner.avatarUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={partner.avatarUrl} alt={partner.name} className="h-8 w-8 shrink-0 rounded-full border border-border object-cover" />
                        ) : (
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-semibold text-muted-foreground">
                                {partner.name.charAt(0)}
                            </div>
                        )}

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-foreground">{partner.name}</p>
                            <p className="mt-0.5 truncate text-[10px] text-muted-foreground">{partner.email}</p>
                        </div>
                    </div>
                );
            },
        },

        {
            accessorKey: "membership",
            header: "Membership",
            cell: ({ row }) => <span className={`text-xs font-medium ${getMembershipStyle(row.original.membership)}`}>{row.original.membership}</span>,
            filterFn: (row, id, value) => {
                if (!value) return true;
                return row.getValue(id) === value;
            },
        },

        {
            accessorKey: "date",
            header: "Dates",
            cell: ({ row }) => (
                <span className="whitespace-nowrap text-xs text-muted-foreground">
                    {new Date(row.original.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    })}
                </span>
            ),
            filterFn: (row, id, value) => {
                if (!value || value === "All Time") return true;

                const date = new Date(row.getValue(id) as string);
                const now = new Date();
                const difference = now.getTime() - date.getTime();
                const daysAgo = difference / (1000 * 60 * 60 * 24);

                if (value === "Last 7 Days") return daysAgo <= 7;
                if (value === "Last 30 Days") return daysAgo <= 30;
                if (value === "Last 12 Months") return daysAgo <= 365;

                return true;
            },
        },

        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant="outline" className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${getStatusStyle(row.original.status)}`}>
                    {row.original.status}
                </Badge>
            ),
        },

        {
            id: "actions",
            header: "Actions",
            enableHiding: false,
            cell: ({ row }) => (
                <div className="flex items-center justify-end">
                    <Button type="button" variant="ghost" size="icon" title="View Partner" onClick={() => console.log("View partner:", row.original)} className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground">
                        <Eye className="h-3.5 w-3.5" />
                    </Button>
                </div>
            ),
        },
    ];

    const renderFilters = (table: Table<PartnerRecord>) => {
        const dateRange = table.getColumn("date")?.getFilterValue() as string | undefined;
        const membership = table.getColumn("membership")?.getFilterValue() as string | undefined;

        return (
            <div className="flex flex-wrap items-center gap-4">
                {/* Date Range */}
                <div className="flex items-center gap-2">
                    <span className="hidden text-xs font-medium text-muted-foreground xl:inline">
                        Date Range
                    </span>

                    <div className="relative">
                        <select
                            value={dateRange || "All Time"}
                            onChange={(e) => {
                                const value = e.target.value;
                                table.getColumn("date")?.setFilterValue(value === "All Time" ? undefined : value);
                                table.setPageIndex(0);
                            }}
                            className="h-9 appearance-none rounded-md border border-border bg-background px-3 pr-8 text-xs font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
                        >
                            <option value="All Time">All Time</option>
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="Last 12 Months">Last 12 Months</option>
                        </select>

                        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                    </div>
                </div>

                {/* Partners Tier */}
                <div className="flex items-center gap-2">
                    <span className="hidden text-xs font-medium text-muted-foreground xl:inline">
                        Partners Tier
                    </span>

                    <div className="relative">
                        <select
                            value={membership || "All Tiers"}
                            onChange={(e) => {
                                const value = e.target.value;
                                table.getColumn("membership")?.setFilterValue(value === "All Tiers" ? undefined : value);
                                table.setPageIndex(0);
                            }}
                            className="h-9 appearance-none rounded-md border border-border bg-background px-3 pr-8 text-xs font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
                        >
                            <option value="All Tiers">All Tiers</option>
                            <option value="Elite Tier">Elite Tier</option>
                            <option value="Explorer">Explorer</option>
                            <option value="Basecamp">Basecamp</option>
                        </select>

                        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <section>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Partnership Management
                </h1>
            </section>

            {/* Table */}
            <section className="overflow-hidden rounded-md">
                <div className="[&_table]:min-w-[800px] [&_table]:border-collapse [&_thead]:bg-muted/70 [&_thead_tr]:border-none [&_th]:h-11 [&_th]:px-4 [&_th]:text-xs [&_th]:font-medium [&_th]:text-foreground [&_th:last-child]:text-right [&_tbody_tr]:border-border/50 [&_tbody_tr]:transition-colors hover:[&_tbody_tr]:bg-muted/30 [&_td]:px-4 [&_td]:py-3">
                    <DataTable
                        data={partners}
                        columns={columns}
                        paginationMode="client"
                        searchMode="client"
                        total={partners.length}
                        csvFileName="partners.csv"
                        renderActions={renderFilters}
                    />
                </div>
            </section>
        </div>
    );
}
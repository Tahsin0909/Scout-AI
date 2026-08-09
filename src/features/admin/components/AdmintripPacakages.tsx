"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

import { DataTable } from "@/components/data-table/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ITripPackage } from "../admindashboard.interface";
import { tripData } from "../data/tripPackages";
import Link from "next/link";


export default function AdminTripPackages() {
    const getMembershipStyle = (membership: ITripPackage["membership"]) => {
        switch (membership) {
            case "Apex Elite":
                return "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
            case "Summit":
                return "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400";
            case "Basecamp":
                return "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400";
            case "Trailhead":
                return "border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400";
            default:
                return "border-border bg-muted text-muted-foreground";
        }
    };

    const getStatusStyle = (status: ITripPackage["status"]) => {
        switch (status) {
            case "Urgent":
                return "text-red-500 dark:text-red-400";
            case "Pending":
                return "text-amber-500 dark:text-amber-400";
            case "Approve":
                return "text-emerald-500 dark:text-emerald-400";
            default:
                return "text-muted-foreground";
        }
    };

    const columns: ColumnDef<ITripPackage>[] = [
        {
            id: "name",
            accessorFn: (row) => `${row.firstName} ${row.lastName} ${row.email}`,
            header: "Name",
            cell: ({ row }) => {
                const user = row.original;
                const initials = `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();

                return (
                    <div className="flex min-w-[190px] items-center gap-2.5">
                        {user.avatarUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} className="h-8 w-8 shrink-0 rounded-full border border-border object-cover" />
                        ) : (
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-semibold text-muted-foreground">
                                {initials}
                            </div>
                        )}

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-foreground">
                                {user.firstName} {user.lastName}
                            </p>
                            <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
                                {user.email}
                            </p>
                        </div>
                    </div>
                );
            },
        },
        {
            accessorKey: "membership",
            header: "Membership",
            cell: ({ row }) => (
                <Badge variant="outline" className={`rounded px-2 py-0.5 text-[10px] font-medium ${getMembershipStyle(row.original.membership)}`}>
                    {row.original.membership}
                </Badge>
            ),
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => <span className={`text-xs font-medium ${getStatusStyle(row.original.status)}`}>{row.original.status}</span>,
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
        },
        {
            id: "trips",
            header: "Trips",
            cell: ({ row }) => (
                <div className="flex items-center text-xs">
                    <span className="font-medium text-foreground">{String(row.original.usedTrips).padStart(2, "0")}</span>
                    <span className="text-muted-foreground">/{String(row.original.totalTrips).padStart(2, "0")}</span>
                </div>
            ),
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                <div className="flex items-center justify-end">
                    <Button type="button" variant="ghost" size="icon" title="View Details" onClick={() => console.log("View trip package:", row.original.id)} className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground">
                        <Link href={`/admin/trip-packages/${row.id}`}>
                            <Eye className="h-3.5 w-3.5" />
                        </Link>
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full space-y-8">
            {/* Header */}
            {/* <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" /> */}

            <div className="relative">
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Trip Packages
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                    Review available trip packages, member usage, membership tiers, and approval status.
                </p>
            </div>

            {/* Trip Packages Table */}
            <section>
                <div className="overflow-x-auto rounded-xl shadow-sm [&_table]:min-w-[800px] [&_table]:border-collapse [&_thead]:bg-muted/70 [&_thead_tr]:border-none [&_th]:h-11 [&_th]:px-4 [&_th]:text-xs [&_th]:font-medium [&_th]:text-foreground [&_th:last-child]:text-right [&_tbody_tr]:border-border/50 [&_tbody_tr]:transition-colors hover:[&_tbody_tr]:bg-muted/30 [&_td]:px-4 [&_td]:py-3 ">
                    <DataTable data={tripData} columns={columns} paginationMode="client" searchMode="client" total={tripData.length} />
                </div>
            </section>
        </div>
    );
}
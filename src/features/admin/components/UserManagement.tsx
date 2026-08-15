"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ColumnDef, Table } from "@tanstack/react-table";

import {
  Ban,
  ChevronDown,
  Eye,
  Trash2,
} from "lucide-react";
import Link from "next/link";

import { useMemo } from "react";

interface IUser {
  id: string;
  name: string;
  email: string;
  membership:
  | "Apex Elite"
  | "Summit"
  | "Basecamp"
  | "Trailhead";
  status:
  | "Active"
  | "Suspended"
  | "Inactive";
  date: string;
  trips: string;
  avatarUrl?: string;
}

const getMembershipStyle = (
  membership: IUser["membership"]
) => {
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

const getStatusStyle = (
  status: IUser["status"]
) => {
  switch (status) {
    case "Active":
      return "text-foreground";

    case "Suspended":
      return "text-red-500 dark:text-red-400";

    case "Inactive":
      return "text-muted-foreground";

    default:
      return "text-muted-foreground";
  }
};

export default function UserManagement() {
  const mockUsers: IUser[] = useMemo(() => {
    const list: IUser[] = [];

    for (let i = 1; i <= 50; i++) {
      let name = "Marcus Thorne";
      let email = "m.thorne@apexlab.com";
      let membership: IUser["membership"] =
        "Apex Elite";
      let status: IUser["status"] = "Active";
      let date = "Oct 12, 2023";
      let trips = "02/05";

      if (i <= 10) {
        name =
          i % 2 === 0
            ? "Sarah Jenkins"
            : "David Chen";

        email =
          i % 2 === 0
            ? "s.jenkins@apexlab.com"
            : "d.chen@apexlab.com";

        membership =
          i % 2 === 0
            ? "Summit"
            : "Basecamp";

        status =
          i % 3 === 0
            ? "Suspended"
            : "Active";

        date = "Nov 04, 2023";
        trips = "04/05";
      } else if (i <= 20) {
        name = "Marcus Thorne";
        email = "m.thorne@apexlab.com";
        membership = "Apex Elite";
        status = "Active";
        date = "Oct 12, 2023";
        trips = "02/05";
      } else if (i <= 30) {
        name =
          i % 2 === 0
            ? "Elena Rodriguez"
            : "Liam Carter";

        email =
          i % 2 === 0
            ? "e.rodriguez@apexlab.com"
            : "l.carter@apexlab.com";

        membership =
          i % 2 === 0
            ? "Trailhead"
            : "Summit";

        status =
          i % 5 === 0
            ? "Inactive"
            : "Active";

        date = "Sep 28, 2023";
        trips = "01/05";
      } else {
        name =
          i % 2 === 0
            ? "Sophia Martinez"
            : "Jackson Reed";

        email =
          i % 2 === 0
            ? "s.martinez@apexlab.com"
            : "j.reed@apexlab.com";

        membership =
          i % 2 === 0
            ? "Basecamp"
            : "Trailhead";

        status = "Active";
        date = "Aug 15, 2023";
        trips = "03/05";
      }

      list.push({
        id: `USR-${1000 + i}`,
        name,
        email,
        membership,
        status,
        date,
        trips,
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}-${i}`,
      });
    }

    return list;
  }, []);

  const columns: ColumnDef<IUser>[] = [
    {
      id: "name",

      /*
       * Important:
       * this makes global search search
       * name + email + ID together.
       */
      accessorFn: (row) =>
        `${row.name} ${row.email} ${row.id}`,

      header: "Name",

      cell: ({ row }) => {
        const user = row.original;

        return (
          <div className="flex min-w-[190px] items-center gap-2.5">
            {user.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-8 w-8 shrink-0 rounded-full border border-border object-cover"
              />
            ) : (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-semibold text-muted-foreground">
                {user.name.charAt(0)}
              </div>
            )}

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {user.name}
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
        <Badge
          variant="outline"
          className={`rounded px-2 py-0.5 text-[10px] font-medium ${getMembershipStyle(row.original.membership)}`}
        >
          {row.original.membership}
        </Badge>
      ),

      /*
       * Exact value filtering.
       */
      filterFn: (row, id, value) => {
        if (!value) return true;

        return (
          row.getValue(id) === value
        );
      },
    },

    {
      accessorKey: "status",
      header: "Status",

      cell: ({ row }) => (
        <span
          className={`text-xs font-medium ${getStatusStyle(row.original.status)}`}
        >
          {row.original.status}
        </span>
      ),

      filterFn: (row, id, value) => {
        if (!value) return true;

        return (
          row.getValue(id) === value
        );
      },
    },

    {
      accessorKey: "date",
      header: "Dates",

      cell: ({ row }) => (
        <span className="whitespace-nowrap text-xs text-muted-foreground">
          {row.original.date}
        </span>
      ),
    },

    {
      accessorKey: "trips",
      header: "Trips",

      cell: ({ row }) => {
        const [
          usedTrips,
          totalTrips,
        ] = row.original.trips.split("/");

        return (
          <div className="flex items-center text-xs">
            <span className="font-medium text-foreground">
              {usedTrips}
            </span>

            <span className="text-muted-foreground">
              /{totalTrips}
            </span>
          </div>
        );
      },
    },

    {
      id: "actions",
      header: "Actions",

      enableHiding: false,

      cell: ({ row }) => {
        const user = row.original;

        return (
          <div className="flex items-center justify-end gap-1.5">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              title="View User"
              onClick={() =>
                console.log(
                  "View user:",
                  user
                )
              }
              className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Link href={`/admin/users/${row.id}`}>
                <Eye className="h-3.5 w-3.5" />
              </Link>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              title="Delete User"
              onClick={() =>
                console.log(
                  "Delete user:",
                  user
                )
              }
              className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              title="Suspend User"
              onClick={() =>
                console.log(
                  "Suspend user:",
                  user
                )
              }
              className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
            >
              <Ban className="h-3.5 w-3.5" />
            </Button>
          </div>
        );
      },
    },
  ];

  const renderFilters = (
    table: Table<IUser>
  ) => {
    const membership =
      table
        .getColumn("membership")
        ?.getFilterValue() as
      | string
      | undefined;

    const status =
      table
        .getColumn("status")
        ?.getFilterValue() as
      | string
      | undefined;

    const hasFilters =
      !!membership || !!status;

    return (
      <div className="flex flex-wrap items-center gap-2">
        {/* Membership */}
        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-muted-foreground lg:inline">
            Membership
          </span>

          <div className="relative">
            <select
              value={
                membership || "All Tiers"
              }
              onChange={(e) => {
                const value =
                  e.target.value;

                table
                  .getColumn(
                    "membership"
                  )
                  ?.setFilterValue(
                    value ===
                      "All Tiers"
                      ? undefined
                      : value
                  );

                table.setPageIndex(0);
              }}
              className="h-9 appearance-none rounded-md border border-border bg-background px-3 pr-8 text-xs font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            >
              <option value="All Tiers">
                All Tiers
              </option>

              <option value="Apex Elite">
                Apex Elite
              </option>

              <option value="Summit">
                Summit
              </option>

              <option value="Basecamp">
                Basecamp
              </option>

              <option value="Trailhead">
                Trailhead
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-muted-foreground lg:inline">
            Status
          </span>

          <div className="relative">
            <select
              value={
                status || "All Status"
              }
              onChange={(e) => {
                const value =
                  e.target.value;

                table
                  .getColumn("status")
                  ?.setFilterValue(
                    value ===
                      "All Status"
                      ? undefined
                      : value
                  );

                table.setPageIndex(0);
              }}
              className="h-9 appearance-none rounded-md border border-border bg-background px-3 pr-8 text-xs font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            >
              <option value="All Status">
                All Status
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Suspended">
                Suspended
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Reset custom filters */}
        {hasFilters && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              table
                .getColumn("membership")
                ?.setFilterValue(
                  undefined
                );

              table
                .getColumn("status")
                ?.setFilterValue(
                  undefined
                );

              table.setPageIndex(0);
            }}
            className="h-9 px-2.5 text-xs text-muted-foreground hover:text-foreground"
          >
            Reset
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          User Management
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Manage all registered members and
          their subscription tiers.
        </p>
      </section>

      {/* Data Table */}
      <section className="overflow-hidden rounded-md">
        <div className="[&_table]:min-w-[800px] [&_table]:border-collapse [&_thead]:bg-muted/70 [&_thead_tr]:border-none [&_th]:h-11 [&_th]:px-4 [&_th]:text-xs [&_th]:font-medium [&_th]:text-foreground [&_th:last-child]:text-right [&_tbody_tr]:border-border/50 [&_tbody_tr]:transition-colors hover:[&_tbody_tr]:bg-muted/30 [&_td]:px-4 [&_td]:py-3">
          <DataTable
            data={mockUsers}
            columns={columns}
            paginationMode="client"
            searchMode="client"
            total={mockUsers.length}
            csvFileName="users.csv"
            renderActions={renderFilters}
          />
        </div>
      </section>
    </div>
  );
}
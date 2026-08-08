"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ColumnDef, Table } from "@tanstack/react-table";
import { ChevronDown, Eye } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

interface PaymentRecord {
  id: string;
  transactionId: string;
  name: string;
  email: string;
  membership:
  | "Apex Elite"
  | "Pathfinder Elite"
  | "Summit"
  | "Basecamp"
  | "Trailhead";
  date: string;
  amount: string;
  status: "Successful" | "Pending" | "Failed";
  avatarUrl?: string;
}

const getStatusStyle = (status: PaymentRecord["status"]) => {
  switch (status) {
    case "Successful":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    case "Pending":
      return "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400";
    case "Failed":
      return "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400";
    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

const getMembershipStyle = (membership: PaymentRecord["membership"]) => {
  switch (membership) {
    case "Apex Elite":
      return "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400";
    case "Pathfinder Elite":
      return "border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400";
    case "Summit":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    case "Basecamp":
      return "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400";
    case "Trailhead":
      return "border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400";
    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

export default function PaymentManagement() {
  const mockPayments: PaymentRecord[] = useMemo(() => {
    const list: PaymentRecord[] = [];

    for (let i = 1; i <= 50; i++) {
      let transactionId = `#TXN-98234-${i}`;
      let name = "Marcus Thorne";
      let email = "m.thorne@apexlab.com";
      let membership: PaymentRecord["membership"] = "Pathfinder Elite";
      let date = "Oct 12, 2023";
      let amount = "$499.00";
      let status: PaymentRecord["status"] = "Successful";

      if (i <= 10) {
        transactionId = `#TXN-76342-${i}`;
        name = i % 2 === 0 ? "Sarah Jenkins" : "David Chen";
        email = i % 2 === 0 ? "s.jenkins@apexlab.com" : "d.chen@apexlab.com";
        membership = i % 2 === 0 ? "Summit" : "Basecamp";
        date = "Oct 28, 2023";
        amount = i % 2 === 0 ? "$299.00" : "$199.00";
        status = i % 4 === 0 ? "Failed" : "Successful";
      } else if (i <= 20) {
        transactionId = `#TXN-98234-${i}`;
        membership = i === 11 ? "Apex Elite" : "Pathfinder Elite";
        status = "Successful";
      } else if (i <= 30) {
        transactionId = `#TXN-54129-${i}`;
        name = i % 2 === 0 ? "Elena Rodriguez" : "Liam Carter";
        email = i % 2 === 0 ? "e.rodriguez@apexlab.com" : "l.carter@apexlab.com";
        membership = i % 2 === 0 ? "Trailhead" : "Summit";
        date = "Sep 15, 2023";
        amount = "$149.00";
        status = i % 5 === 0 ? "Pending" : "Successful";
      } else {
        transactionId = `#TXN-32984-${i}`;
        name = i % 2 === 0 ? "Sophia Martinez" : "Jackson Reed";
        email = i % 2 === 0 ? "s.martinez@apexlab.com" : "j.reed@apexlab.com";
        membership = i % 2 === 0 ? "Basecamp" : "Trailhead";
        date = "Aug 02, 2023";
        amount = "$199.00";
        status = "Successful";
      }

      list.push({
        id: `PAY-${1000 + i}`,
        transactionId,
        name,
        email,
        membership,
        date,
        amount,
        status,
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}-${i}`,
      });
    }

    return list;
  }, []);

  const columns: ColumnDef<PaymentRecord>[] = [
    {
      id: "transaction",
      accessorFn: (row) => `${row.transactionId} ${row.id}`,
      header: "Transaction",
      cell: ({ row }) => (
        <div className="min-w-[130px]">
          <p className="font-mono text-xs font-semibold text-foreground">{row.original.transactionId}</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">{row.original.id}</p>
        </div>
      ),
    },
    {
      id: "customer",
      accessorFn: (row) => `${row.name} ${row.email}`,
      header: "Customer",
      cell: ({ row }) => {
        const record = row.original;

        return (
          <div className="flex min-w-[190px] items-center gap-2.5">
            {record.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={record.avatarUrl} alt={record.name} className="h-8 w-8 shrink-0 rounded-full border border-border object-cover" />
            ) : (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-semibold text-muted-foreground">
                {record.name.charAt(0)}
              </div>
            )}

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{record.name}</p>
              <p className="mt-0.5 truncate text-[10px] text-muted-foreground">{record.email}</p>
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
      filterFn: (row, id, value) => {
        if (!value) return true;
        return row.getValue(id) === value;
      },
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => <span className="whitespace-nowrap text-xs text-muted-foreground">{row.original.date}</span>,
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => <span className="text-sm font-semibold text-foreground">{row.original.amount}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="outline" className={`rounded px-2 py-0.5 text-[10px] font-medium ${getStatusStyle(row.original.status)}`}>
          {row.original.status}
        </Badge>
      ),
      filterFn: (row, id, value) => {
        if (!value) return true;
        return row.getValue(id) === value;
      },
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1.5">
          <Button type="button" variant="ghost" size="icon" title="View Transaction" onClick={() => console.log("View:", row.original)} className="h-8 w-8 rounded-md border border-border/40 bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground">
            <Link href={`/admin/payments/${row.id}`}>
              <Eye className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      ),
    },
  ];

  const renderFilters = (table: Table<PaymentRecord>) => {
    const membership = table.getColumn("membership")?.getFilterValue() as string | undefined;
    const status = table.getColumn("status")?.getFilterValue() as string | undefined;

    return (
      <div className="flex flex-wrap items-center gap-3">
        {/* Membership */}
        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-medium text-muted-foreground xl:inline">Membership</span>

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
              <option value="Apex Elite">Apex Elite</option>
              <option value="Pathfinder Elite">Pathfinder Elite</option>
              <option value="Summit">Summit</option>
              <option value="Basecamp">Basecamp</option>
              <option value="Trailhead">Trailhead</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-medium text-muted-foreground xl:inline">Status</span>

          <div className="relative">
            <select
              value={status || "All Status"}
              onChange={(e) => {
                const value = e.target.value;

                table.getColumn("status")?.setFilterValue(value === "All Status" ? undefined : value);
                table.setPageIndex(0);
              }}
              className="h-9 appearance-none rounded-md border border-border bg-background px-3 pr-8 text-xs font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            >
              <option value="All Status">All Status</option>
              <option value="Successful">Successful</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
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
          Payments Management
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Review financial records, transaction history, payment status, and membership purchases.
        </p>
      </section>

      {/* DataTable */}
      <section className="overflow-hidden rounded-md">
        <div className="[&_table]:min-w-[950px] [&_table]:border-collapse [&_thead]:bg-muted/70 [&_thead_tr]:border-none [&_th]:h-11 [&_th]:px-4 [&_th]:text-xs [&_th]:font-medium [&_th]:text-foreground [&_th:last-child]:text-right [&_tbody_tr]:border-border/50 [&_tbody_tr]:transition-colors hover:[&_tbody_tr]:bg-muted/30 [&_td]:px-4 [&_td]:py-3">
          <DataTable
            data={mockPayments}
            columns={columns}
            paginationMode="client"
            searchMode="client"
            total={mockPayments.length}
            csvFileName="payments.csv"
            renderActions={renderFilters}
          />
        </div>
      </section>
    </div>
  );
}
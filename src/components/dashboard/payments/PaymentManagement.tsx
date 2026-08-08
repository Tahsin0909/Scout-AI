"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  Eye,
  ReceiptText,
  RotateCcw,
  Search,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400";

    case "Pending":
      return "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400";

    case "Failed":
      return "border-red-200 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400";

    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (status: PaymentRecord["status"]) => {
  switch (status) {
    case "Successful":
      return CheckCircle2;

    case "Pending":
      return Clock3;

    case "Failed":
      return XCircle;

    default:
      return Clock3;
  }
};

const getMembershipStyle = (
  membership: PaymentRecord["membership"]
) => {
  switch (membership) {
    case "Apex Elite":
      return "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400";

    case "Pathfinder Elite":
      return "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400";

    case "Summit":
      return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400";

    case "Basecamp":
      return "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400";

    case "Trailhead":
      return "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400";

    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

export default function PaymentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRangeFilter, setDateRangeFilter] = useState("Last 30 Days");
  const [membershipFilter, setMembershipFilter] = useState("All Tiers");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(2);

  const itemsPerPage = 10;

  const mockPayments: PaymentRecord[] = useMemo(() => {
    const list: PaymentRecord[] = [];

    for (let i = 1; i <= 50; i++) {
      let transactionId = "#TXN-98234-AD";
      let name = "Marcus Thorne";
      let email = "m.thorne@apexlab.com";
      let membership: PaymentRecord["membership"] = "Pathfinder Elite";
      let date = "Oct 12, 2023";
      let amount = "$499.00";
      let status: PaymentRecord["status"] = "Successful";

      if (i <= 10) {
        transactionId = "#TXN-76342-BC";
        name = i % 2 === 0 ? "Sarah Jenkins" : "David Chen";
        email =
          i % 2 === 0
            ? "s.jenkins@apexlab.com"
            : "d.chen@apexlab.com";
        membership = i % 2 === 0 ? "Summit" : "Basecamp";
        date = "Oct 28, 2023";
        amount = i % 2 === 0 ? "$299.00" : "$199.00";
        status = i % 4 === 0 ? "Failed" : "Successful";
      } else if (i <= 20) {
        transactionId = "#TXN-98234-AD";
        name = "Marcus Thorne";
        email = "m.thorne@apexlab.com";
        membership = i === 11 ? "Apex Elite" : "Pathfinder Elite";
        date = "Oct 12, 2023";
        amount = "$499.00";
        status = "Successful";
      } else if (i <= 30) {
        transactionId = "#TXN-54129-XY";
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
        date = "Sep 15, 2023";
        amount = "$149.00";
        status =
          i % 5 === 0
            ? "Pending"
            : "Successful";
      } else {
        transactionId = "#TXN-32984-ZT";
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

  const filteredPayments = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return mockPayments.filter((record) => {
      const matchesSearch =
        !normalizedSearch ||
        record.name.toLowerCase().includes(normalizedSearch) ||
        record.email.toLowerCase().includes(normalizedSearch) ||
        record.transactionId.toLowerCase().includes(normalizedSearch) ||
        record.id.toLowerCase().includes(normalizedSearch);

      const matchesMembership =
        membershipFilter === "All Tiers" ||
        record.membership === membershipFilter;

      const matchesStatus =
        statusFilter === "All Status" ||
        record.status === statusFilter;

      /*
       * Replace this with actual backend/date filtering.
       * Your mock data uses historical dates, so applying
       * "Last 7 Days" against today's date would return 0.
       */
      const matchesDateRange = true;

      return (
        matchesSearch &&
        matchesMembership &&
        matchesStatus &&
        matchesDateRange
      );
    });
  }, [mockPayments, searchTerm, membershipFilter, statusFilter]);

  const totalPages =
    Math.ceil(filteredPayments.length / itemsPerPage) || 1;

  const paginatedPayments = useMemo(() => {
    const startIndex =
      (currentPage - 1) * itemsPerPage;

    return filteredPayments.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  }, [filteredPayments, currentPage]);

  const hasActiveFilters =
    searchTerm ||
    dateRangeFilter !== "Last 30 Days" ||
    membershipFilter !== "All Tiers" ||
    statusFilter !== "All Status";

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setDateRangeFilter("Last 30 Days");
    setMembershipFilter("All Tiers");
    setStatusFilter("All Status");
    setCurrentPage(1);
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-amber-50/70 p-5 shadow-sm dark:from-card dark:via-card dark:to-amber-500/[0.04] sm:p-6">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />

        <div className="relative">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Payments Management
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Review financial records, transaction history, payment status, and membership purchases.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Transactions
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Search and filter membership payment records.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-[270px]">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Name, email or transaction..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="h-10 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            />
          </div>

          {/* Date Range */}
          <div className="relative">
            <select
              value={dateRangeFilter}
              onChange={(e) => {
                setDateRangeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="h-10 appearance-none rounded-xl border border-border bg-card px-3 pr-9 text-sm font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            >
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="Last 12 Months">Last 12 Months</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>

          {/* Membership */}
          <div className="relative">
            <select
              value={membershipFilter}
              onChange={(e) => {
                setMembershipFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="h-10 appearance-none rounded-xl border border-border bg-card px-3 pr-9 text-sm font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            >
              <option value="All Tiers">All Tiers</option>
              <option value="Apex Elite">Apex Elite</option>
              <option value="Pathfinder Elite">
                Pathfinder Elite
              </option>
              <option value="Summit">Summit</option>
              <option value="Basecamp">Basecamp</option>
              <option value="Trailhead">Trailhead</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>

          {/* Status */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="h-10 appearance-none rounded-xl border border-border bg-card px-3 pr-9 text-sm font-medium text-foreground outline-none transition hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            >
              <option value="All Status">All Status</option>
              <option value="Successful">Successful</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>

          {hasActiveFilters && (
            <Button
              type="button"
              variant="ghost"
              onClick={handleResetFilters}
              className="h-10 rounded-xl px-3 text-xs font-semibold text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-500/10 dark:hover:text-amber-300"
            >
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Reset
            </Button>
          )}
        </div>
      </section>

      {/* Payment Card */}
      <Card className="overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm dark:shadow-none">
        <CardContent className="p-0">
          {/* Meta */}
          <div className="flex flex-col gap-2 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs font-medium text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {paginatedPayments.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">
                {filteredPayments.length}
              </span>{" "}
              transactions
            </p>

            <span className="self-start rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:self-auto">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/70 bg-muted/20 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">
                    Transaction
                  </th>

                  <th className="px-6 py-4">
                    Customer
                  </th>

                  <th className="px-6 py-4">
                    Membership
                  </th>

                  <th className="px-6 py-4">
                    Date
                  </th>

                  <th className="px-6 py-4">
                    Amount
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border/60">
                {paginatedPayments.length > 0 ? (
                  paginatedPayments.map((record) => {
                    const StatusIcon =
                      getStatusIcon(record.status);

                    return (
                      <tr
                        key={record.id}
                        className="group transition-colors hover:bg-muted/30"
                      >
                        {/* Transaction */}
                        <td className="px-6 py-4">
                          <p className="font-mono text-xs font-semibold text-foreground">
                            {record.transactionId}
                          </p>

                          <p className="mt-1 text-[10px] text-muted-foreground">
                            {record.id}
                          </p>
                        </td>

                        {/* Customer */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={record.avatarUrl}
                              alt={record.name}
                              className="h-10 w-10 shrink-0 rounded-full border border-border bg-muted object-cover"
                            />

                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-foreground">
                                {record.name}
                              </p>

                              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                                {record.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Membership */}
                        <td className="px-6 py-4">
                          <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getMembershipStyle(record.membership)}`}>
                            {record.membership}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {record.date}
                        </td>

                        {/* Amount */}
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold text-foreground">
                            {record.amount}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getStatusStyle(record.status)}`}>
                            <StatusIcon className="h-3 w-3" />
                            {record.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              title="View transaction"
                              className="h-9 w-9 rounded-lg text-muted-foreground hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-500/10 dark:hover:text-amber-400"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>

                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              title="Download invoice"
                              className="h-9 w-9 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-16 text-center"
                    >
                      <div className="mx-auto flex max-w-sm flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
                          <ReceiptText className="h-5 w-5" />
                        </div>

                        <h3 className="mt-4 text-sm font-semibold text-foreground">
                          No transactions found
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          No payment records match your current search or filters.
                        </p>

                        {hasActiveFilters && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleResetFilters}
                            className="mt-4 rounded-xl"
                          >
                            <RotateCcw className="mr-2 h-3.5 w-3.5" />
                            Clear filters
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Tablet / Mobile */}
          <div className="divide-y divide-border/60 lg:hidden">
            {paginatedPayments.length > 0 ? (
              paginatedPayments.map((record) => {
                const StatusIcon =
                  getStatusIcon(record.status);

                return (
                  <article
                    key={record.id}
                    className="p-5"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={record.avatarUrl}
                          alt={record.name}
                          className="h-11 w-11 shrink-0 rounded-full border border-border bg-muted"
                        />

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-foreground">
                            {record.name}
                          </h3>

                          <p className="mt-0.5 truncate text-xs text-muted-foreground">
                            {record.email}
                          </p>
                        </div>
                      </div>

                      <p className="shrink-0 text-base font-bold text-foreground">
                        {record.amount}
                      </p>
                    </div>

                    {/* Transaction */}
                    <div className="mt-4 rounded-xl border border-border/60 bg-muted/20 px-3.5 py-3">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        Transaction
                      </p>

                      <div className="mt-1 flex items-center justify-between gap-3">
                        <span className="truncate font-mono text-xs font-semibold text-foreground">
                          {record.transactionId}
                        </span>

                        <span className="text-[10px] text-muted-foreground">
                          {record.date}
                        </span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getMembershipStyle(record.membership)}`}>
                        {record.membership}
                      </span>

                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getStatusStyle(record.status)}`}>
                        <StatusIcon className="h-3 w-3" />
                        {record.status}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-xl"
                      >
                        <Eye className="mr-2 h-3.5 w-3.5" />
                        View transaction
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        title="Download invoice"
                        className="h-9 w-9 shrink-0 rounded-xl"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="px-5 py-14 text-center">
                <ReceiptText className="mx-auto h-6 w-6 text-muted-foreground" />

                <p className="mt-3 text-sm font-semibold text-foreground">
                  No transactions found
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Try changing your filters or search.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center pt-2">
          <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-sm">
            <button
              type="button"
              aria-label="Previous page"
              onClick={() =>
                handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                type="button"
                key={page}
                onClick={() =>
                  handlePageChange(page)
                }
                className={`h-9 min-w-9 rounded-lg px-2 text-xs font-semibold transition-all ${currentPage === page ? "bg-amber-400 text-zinc-950 shadow-sm hover:bg-amber-500" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              aria-label="Next page"
              onClick={() =>
                handlePageChange(currentPage + 1)
              }
              disabled={
                currentPage === totalPages
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
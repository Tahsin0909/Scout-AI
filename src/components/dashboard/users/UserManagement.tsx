"use client";

import React, { useMemo, useState } from "react";
import {
  Ban,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleOff,
  Eye,
  RotateCcw,
  Search,
  ShieldAlert,
  Trash2,
  UserRound,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  email: string;
  membership: "Apex Elite" | "Summit" | "Basecamp" | "Trailhead";
  status: "Active" | "Suspended" | "Inactive";
  date: string;
  trips: string;
  avatarUrl?: string;
}

const getStatusStyle = (status: User["status"]) => {
  switch (status) {
    case "Active":
      return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400";

    case "Suspended":
      return "border-red-200 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400";

    case "Inactive":
      return "border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";

    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (status: User["status"]) => {
  switch (status) {
    case "Active":
      return CheckCircle2;

    case "Suspended":
      return ShieldAlert;

    case "Inactive":
      return CircleOff;

    default:
      return CircleOff;
  }
};

const getMembershipStyle = (membership: User["membership"]) => {
  switch (membership) {
    case "Apex Elite":
      return "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400";

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

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [membershipFilter, setMembershipFilter] = useState("All Tiers");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(2);

  const itemsPerPage = 10;

  const mockUsers: User[] = useMemo(() => {
    const list: User[] = [];

    for (let i = 1; i <= 50; i++) {
      let name = "Marcus Thorne";
      let email = "m.thorne@apexlab.com";
      let membership: User["membership"] = "Apex Elite";
      let status: User["status"] = "Active";
      let date = "Oct 12, 2023";
      let trips = "02/05";

      if (i <= 10) {
        name = i % 2 === 0 ? "Sarah Jenkins" : "David Chen";
        email = i % 2 === 0 ? "s.jenkins@apexlab.com" : "d.chen@apexlab.com";
        membership = i % 2 === 0 ? "Summit" : "Basecamp";
        status = i % 3 === 0 ? "Suspended" : "Active";
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
        name = i % 2 === 0 ? "Elena Rodriguez" : "Liam Carter";
        email = i % 2 === 0 ? "e.rodriguez@apexlab.com" : "l.carter@apexlab.com";
        membership = i % 2 === 0 ? "Trailhead" : "Summit";
        status = i % 5 === 0 ? "Inactive" : "Active";
        date = "Sep 28, 2023";
        trips = "01/05";
      } else {
        name = i % 2 === 0 ? "Sophia Martinez" : "Jackson Reed";
        email = i % 2 === 0 ? "s.martinez@apexlab.com" : "j.reed@apexlab.com";
        membership = i % 2 === 0 ? "Basecamp" : "Trailhead";
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

  const filteredUsers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return mockUsers.filter((user) => {
      const matchesSearch =
        !normalizedSearch ||
        user.name.toLowerCase().includes(normalizedSearch) ||
        user.email.toLowerCase().includes(normalizedSearch) ||
        user.id.toLowerCase().includes(normalizedSearch);

      const matchesMembership = membershipFilter === "All Tiers" || user.membership === membershipFilter;

      const matchesStatus = statusFilter === "All Status" || user.status === statusFilter;

      return matchesSearch && matchesMembership && matchesStatus;
    });
  }, [mockUsers, searchTerm, membershipFilter, statusFilter]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage) || 1;

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    return filteredUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredUsers, currentPage]);

  const hasActiveFilters = searchTerm || membershipFilter !== "All Tiers" || statusFilter !== "All Status";

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm("");
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
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-muted-foreground">
            <Users className="h-5 w-5" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            User Management
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Manage registered members, subscription tiers, account status, and trip package usage.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            All Members
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Search, filter, and manage registered users.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search name, email or ID..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="h-10 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground hover:border-foreground/20 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
            />
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
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Inactive">Inactive</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>

          {hasActiveFilters && (
            <Button type="button" variant="ghost" onClick={handleResetFilters} className="h-10 rounded-xl px-3 text-xs font-semibold text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-500/10 dark:hover:text-amber-300">
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Reset
            </Button>
          )}
        </div>
      </section>

      {/* Users Card */}
      <Card className="overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm dark:shadow-none">
        <CardContent className="p-0">
          {/* Table Header */}
          <div className="flex flex-col gap-2 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs font-medium text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {paginatedUsers.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">
                {filteredUsers.length}
              </span>{" "}
              members
            </p>

            <span className="self-start rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:self-auto">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/70 bg-muted/20 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">Member</th>
                  <th className="px-6 py-4">Membership</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4">Trips</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border/60">
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user) => {
                    const [currentTrips, totalTrips] = user.trips.split("/");
                    const percentage = (Number(currentTrips) / Number(totalTrips)) * 100;
                    const StatusIcon = getStatusIcon(user.status);

                    return (
                      <tr key={user.id} className="group transition-colors hover:bg-muted/30">
                        {/* Member */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 shrink-0 rounded-full border border-border bg-muted object-cover" />

                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-foreground">
                                {user.name}
                              </p>

                              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                                {user.email}
                              </p>

                              <p className="mt-0.5 text-[10px] font-medium text-muted-foreground/70">
                                {user.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Membership */}
                        <td className="px-6 py-4">
                          <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getMembershipStyle(user.membership)}`}>
                            {user.membership}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getStatusStyle(user.status)}`}>
                            <StatusIcon className="h-3 w-3" />
                            {user.status}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {user.date}
                        </td>

                        {/* Trips */}
                        <td className="px-6 py-4">
                          <div className="w-[100px]">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-foreground">
                                {currentTrips}/{totalTrips}
                              </span>

                              <span className="text-[10px] text-muted-foreground">
                                {Math.round(percentage)}%
                              </span>
                            </div>

                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                              <div className="h-full rounded-full bg-amber-400 transition-all" style={{ width: `${percentage}%` }} />
                            </div>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-1">
                            <Button type="button" variant="ghost" size="icon" title="View user" className="h-9 w-9 rounded-lg text-muted-foreground hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-500/10 dark:hover:text-amber-400">
                              <Eye className="h-4 w-4" />
                            </Button>

                            <Button type="button" variant="ghost" size="icon" title={user.status === "Suspended" ? "User suspended" : "Suspend user"} className="h-9 w-9 rounded-lg text-muted-foreground hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-500/10 dark:hover:text-orange-400">
                              <Ban className="h-4 w-4" />
                            </Button>

                            <Button type="button" variant="ghost" size="icon" title="Delete user" className="h-9 w-9 rounded-lg text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center">
                      <div className="mx-auto flex max-w-sm flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
                          <UserRound className="h-5 w-5" />
                        </div>

                        <h3 className="mt-4 text-sm font-semibold text-foreground">
                          No members found
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          No users match your current search or filter criteria.
                        </p>

                        {hasActiveFilters && (
                          <Button type="button" variant="outline" onClick={handleResetFilters} className="mt-4 rounded-xl">
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

          {/* Mobile Cards */}
          <div className="divide-y divide-border/60 md:hidden">
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => {
                const [currentTrips, totalTrips] = user.trips.split("/");
                const percentage = (Number(currentTrips) / Number(totalTrips)) * 100;
                const StatusIcon = getStatusIcon(user.status);

                return (
                  <article key={user.id} className="p-5">
                    {/* Member Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={user.avatarUrl} alt={user.name} className="h-11 w-11 shrink-0 rounded-full border border-border bg-muted" />

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-foreground">
                            {user.name}
                          </h3>

                          <p className="mt-0.5 truncate text-xs text-muted-foreground">
                            {user.email}
                          </p>

                          <p className="mt-0.5 text-[10px] font-medium text-muted-foreground">
                            {user.id}
                          </p>
                        </div>
                      </div>

                      <Button type="button" variant="ghost" size="icon" className="h-9 w-9 shrink-0 rounded-lg">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getMembershipStyle(user.membership)}`}>
                        {user.membership}
                      </span>

                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getStatusStyle(user.status)}`}>
                        <StatusIcon className="h-3 w-3" />
                        {user.status}
                      </span>
                    </div>

                    {/* Information */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                          Joined
                        </p>

                        <p className="mt-1 text-xs font-semibold text-foreground">
                          {user.date}
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                          Trips
                        </p>

                        <p className="mt-1 text-xs font-semibold text-foreground">
                          {currentTrips} / {totalTrips}
                        </p>
                      </div>
                    </div>

                    {/* Usage */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                        <span>Trip usage</span>
                        <span>{Math.round(percentage)}%</span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-amber-400" style={{ width: `${percentage}%` }} />
                      </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="mt-4 flex gap-2 border-t border-border/60 pt-4">
                      <Button type="button" variant="outline" size="sm" className="flex-1 rounded-xl">
                        <Eye className="mr-2 h-3.5 w-3.5" />
                        View
                      </Button>

                      <Button type="button" variant="outline" size="icon" title="Suspend user" className="h-9 w-9 shrink-0 rounded-xl text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-500/10">
                        <Ban className="h-4 w-4" />
                      </Button>

                      <Button type="button" variant="outline" size="icon" title="Delete user" className="h-9 w-9 shrink-0 rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-500/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="px-5 py-14 text-center">
                <UserRound className="mx-auto h-6 w-6 text-muted-foreground" />

                <p className="mt-3 text-sm font-semibold text-foreground">
                  No members found
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
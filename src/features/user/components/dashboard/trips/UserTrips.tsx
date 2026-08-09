/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Edit3,
  Layers,
  RotateCcw,
  Search,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Total Trips",
    value: "12",
    change: "+12%",
    icon: Layers,
  },
  {
    title: "Upcoming",
    value: "3",
    change: "+12%",
    icon: Calendar,
  },
  {
    title: "Drafts",
    value: "2",
    change: "+8.5%",
    icon: Edit3,
  },
  {
    title: "Completed",
    value: "9",
    change: "+8.5%",
    icon: CheckCircle2,
  },
];

const initialTrips = [
  {
    id: "TRIP-1112",
    title: "Hiking Trip 1112",
    status: "In Progress",
    statusVariant: "in-progress",
    tier: "Apex Elite",
    meta: "Submitted 2 days ago • Expected in 48h",
    actionText: "Waiting for human preview",
    actionDisabled: true,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1113",
    title: "Dolomites Trail Adventure",
    status: "In Progress",
    statusVariant: "in-progress",
    tier: "Summit",
    meta: "Submitted 2 days ago • Expected in 48h",
    actionText: "Waiting for human preview",
    actionDisabled: true,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1114",
    title: "Patagonia Explorer",
    status: "Ready",
    statusVariant: "ready",
    tier: "Basecamp",
    meta: "Submitted 2 days ago • Expected in 48h",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1115",
    title: "Swiss Alps Weekend",
    status: "Completed",
    statusVariant: "completed",
    tier: "Apex Elite",
    meta: "Completed 3 days ago",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1116",
    title: "Rocky Mountain Escape",
    status: "Completed",
    statusVariant: "completed",
    tier: "Trailhead",
    meta: "Completed 6 days ago",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1117",
    title: "Norway Fjord Expedition",
    status: "Completed",
    statusVariant: "completed",
    tier: "Summit",
    meta: "Completed 1 week ago",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1118",
    title: "Canadian Wilderness",
    status: "Completed",
    statusVariant: "completed",
    tier: "Basecamp",
    meta: "Completed 1 week ago",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1119",
    title: "Alpine Lakes Journey",
    status: "Completed",
    statusVariant: "completed",
    tier: "Apex Elite",
    meta: "Completed 2 weeks ago",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1120",
    title: "Highland Trail",
    status: "Completed",
    statusVariant: "completed",
    tier: "Trailhead",
    meta: "Completed 2 weeks ago",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "TRIP-1121",
    title: "Mountain Sunrise Tour",
    status: "Completed",
    statusVariant: "completed",
    tier: "Summit",
    meta: "Completed 3 weeks ago",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&auto=format&fit=crop&q=80",
  },
];

const getStatusClasses = (variant: string) => {
  switch (variant) {
    case "in-progress":
      return `
        border-amber-200
        bg-amber-50
        text-amber-700
        dark:border-amber-500/20
        dark:bg-amber-500/10
        dark:text-amber-400
      `;

    case "ready":
      return `
        border-emerald-200
        bg-emerald-50
        text-emerald-700
        dark:border-emerald-500/20
        dark:bg-emerald-500/10
        dark:text-emerald-400
      `;

    case "completed":
      return `
        border-zinc-200
        bg-zinc-100
        text-zinc-600
        dark:border-zinc-700
        dark:bg-zinc-800/80
        dark:text-zinc-300
      `;

    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

export default function UserTrips() {
  const [searchTerm, setSearchTerm] = useState("");
  const [membershipFilter, setMembershipFilter] = useState("All Tiers");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTrips = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return initialTrips.filter((trip) => {
      const matchesSearch =
        !normalizedSearch ||
        trip.title.toLowerCase().includes(normalizedSearch) ||
        trip.id.toLowerCase().includes(normalizedSearch);

      const matchesMembership =
        membershipFilter === "All Tiers" ||
        trip.tier === membershipFilter;

      const matchesStatus =
        statusFilter === "All Status" ||
        trip.status === statusFilter;

      return matchesSearch && matchesMembership && matchesStatus;
    });
  }, [searchTerm, membershipFilter, statusFilter]);

  const hasActiveFilters =
    searchTerm ||
    membershipFilter !== "All Tiers" ||
    statusFilter !== "All Status";

  const handleResetFilters = () => {
    setSearchTerm("");
    setMembershipFilter("All Tiers");
    setStatusFilter("All Status");
    setCurrentPage(1);
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div
        className="
            relative flex flex-col gap-5
            md:flex-row md:items-center md:justify-between
          "
      >
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            My Trips
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            View, manage, and track all of your adventure packages in one
            place.
          </p>
        </div>

        <Button
          variant="primary"
          className="
              h-11 self-start
              rounded-xl px-5
              shadow-sm
              transition-all
              hover:-translate-y-0.5
              hover:shadow-md
              md:self-auto
            "
        >
          <Compass className="mr-2 h-4 w-4" />
          Plan with Scout AI
        </Button>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.title}
              className="
                group overflow-hidden rounded-2xl
                border-border/70
                bg-card
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-border
                hover:shadow-md
                dark:shadow-none
                dark:hover:bg-accent/20
              "
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      border border-border/70
                      bg-muted/60
                      text-muted-foreground
                      transition-colors
                      group-hover:bg-amber-50
                      group-hover:text-amber-600
                      dark:group-hover:bg-amber-500/10
                      dark:group-hover:text-amber-400
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className="
                      inline-flex items-center gap-1
                      rounded-full
                      border border-emerald-200
                      bg-emerald-50
                      px-2.5 py-1
                      text-xs font-semibold
                      text-emerald-700
                      dark:border-emerald-500/20
                      dark:bg-emerald-500/10
                      dark:text-emerald-400
                    "
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-3xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Trips */}
      <section className="space-y-5">
        {/* Section Header */}
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              All Trips
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Search and filter your previous and upcoming trips.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Search */}
            <div className="relative w-full sm:w-[240px]">
              <Search
                className="
                  absolute left-3.5 top-1/2
                  h-4 w-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <input
                type="text"
                placeholder="Search name or ID..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="
                  h-10 w-full
                  rounded-xl
                  border border-border
                  bg-card
                  pl-10 pr-4
                  text-sm text-foreground
                  outline-none
                  transition
                  placeholder:text-muted-foreground
                  hover:border-foreground/20
                  focus:border-amber-500/60
                  focus:ring-2
                  focus:ring-amber-500/10
                "
              />
            </div>

            {/* Membership */}
            <select
              value={membershipFilter}
              onChange={(e) => {
                setMembershipFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="
                h-10
                rounded-xl
                border border-border
                bg-card
                px-3
                text-sm text-foreground
                outline-none
                transition
                hover:border-foreground/20
                focus:border-amber-500/60
                focus:ring-2
                focus:ring-amber-500/10
              "
            >
              <option value="All Tiers">All Tiers</option>
              <option value="Apex Elite">Apex Elite</option>
              <option value="Summit">Summit</option>
              <option value="Basecamp">Basecamp</option>
              <option value="Trailhead">Trailhead</option>
            </select>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="
                h-10
                rounded-xl
                border border-border
                bg-card
                px-3
                text-sm text-foreground
                outline-none
                transition
                hover:border-foreground/20
                focus:border-amber-500/60
                focus:ring-2
                focus:ring-amber-500/10
              "
            >
              <option value="All Status">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Ready">Ready</option>
              <option value="Completed">Completed</option>
            </select>

            {hasActiveFilters && (
              <Button
                type="button"
                variant="ghost"
                onClick={handleResetFilters}
                className="
                  h-10 rounded-xl
                  px-3
                  text-xs font-semibold
                  text-amber-600
                  hover:bg-amber-50
                  hover:text-amber-700
                  dark:text-amber-400
                  dark:hover:bg-amber-500/10
                  dark:hover:text-amber-300
                "
              >
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Result Count */}
        <div
          className="
            flex items-center justify-between
            rounded-xl
            border border-border/60
            bg-muted/30
            px-4 py-2.5
          "
        >
          <p className="text-xs font-medium text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredTrips.length}
            </span>{" "}
            {filteredTrips.length === 1 ? "trip" : "trips"}
          </p>

          {hasActiveFilters && (
            <span className="text-xs text-muted-foreground">
              Filters active
            </span>
          )}
        </div>

        {/* Trip List */}
        <div className="space-y-3">
          {filteredTrips.length === 0 ? (
            <div
              className="
                flex min-h-[260px]
                flex-col items-center justify-center
                rounded-2xl
                border border-dashed border-border
                bg-card
                px-6 py-12
                text-center
              "
            >
              <div
                className="
                  mb-4 flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  border border-border
                  bg-muted/60
                  text-muted-foreground
                "
              >
                <Search className="h-5 w-5" />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                No trips found
              </h3>

              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                We couldn't find any trips matching your current search and
                filters.
              </p>

              <Button
                type="button"
                variant="outline"
                onClick={handleResetFilters}
                className="mt-5 rounded-xl"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Clear filters
              </Button>
            </div>
          ) : (
            filteredTrips.map((trip) => (
              <article
                key={trip.id}
                className="
                  group flex flex-col gap-4
                  rounded-2xl
                  border border-border/70
                  bg-card
                  p-4
                  shadow-sm
                  transition-all duration-200
                  hover:border-border
                  hover:shadow-md
                  dark:shadow-none
                  dark:hover:bg-accent/20
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                {/* Left */}
                <div className="flex min-w-0 items-center gap-4">
                  <div
                    className="
                      relative h-16 w-16
                      shrink-0 overflow-hidden
                      rounded-xl
                      bg-muted
                      ring-1 ring-border/50
                    "
                  >
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      sizes="64px"
                      className="
                        object-cover
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-sm font-semibold text-foreground sm:text-base">
                        {trip.title}
                      </h3>

                      <span
                        className={`
                          inline-flex items-center
                          rounded-full
                          border
                          px-2.5 py-1
                          text-[11px]
                          font-semibold
                          leading-none
                          ${getStatusClasses(trip.statusVariant)}
                        `}
                      >
                        {trip.status}
                      </span>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-xs font-medium text-muted-foreground">
                        {trip.id}
                      </span>

                      <span className="text-border">•</span>

                      <span
                        className="
                          rounded-md
                          bg-muted/70
                          px-1.5 py-0.5
                          text-[11px] font-medium
                          text-muted-foreground
                        "
                      >
                        {trip.tier}
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {trip.meta}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="shrink-0 sm:pl-4">
                  {trip.actionDisabled ? (
                    <Button
                      disabled
                      variant="outline"
                      className="
                        w-full rounded-xl
                        border-border/60
                        bg-muted/40
                        text-xs
                        text-muted-foreground
                        opacity-70
                        sm:w-auto
                      "
                    >
                      {trip.actionText}
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      className="
                        w-full rounded-xl
                        px-4
                        text-sm font-semibold
                        text-amber-600
                        hover:bg-amber-50
                        hover:text-amber-700
                        dark:text-amber-400
                        dark:hover:bg-amber-500/10
                        dark:hover:text-amber-300
                        sm:w-auto
                      "
                    >
                      {trip.actionText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </article>
            ))
          )}
        </div>

        {/* Pagination */}
        {filteredTrips.length > 0 && (
          <div className="flex items-center justify-center pt-4">
            <div
              className="
                flex items-center gap-1
                rounded-xl
                border border-border
                bg-card
                p-1
                shadow-sm
              "
            >
              <button
                type="button"
                aria-label="Previous page"
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                disabled={currentPage === 1}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  text-muted-foreground
                  transition
                  hover:bg-muted
                  hover:text-foreground
                  disabled:pointer-events-none
                  disabled:opacity-40
                "
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`
                    h-9 min-w-9
                    rounded-lg px-2
                    text-xs font-semibold
                    transition-all
                    ${currentPage === page
                      ? `
                          bg-amber-400
                          text-zinc-950
                          shadow-sm
                          hover:bg-amber-500
                        `
                      : `
                          text-muted-foreground
                          hover:bg-muted
                          hover:text-foreground
                        `
                    }
                  `}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                aria-label="Next page"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, 5))
                }
                disabled={currentPage === 5}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  text-muted-foreground
                  transition
                  hover:bg-muted
                  hover:text-foreground
                  disabled:pointer-events-none
                  disabled:opacity-40
                "
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Layers,
  Calendar,
  Edit3,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";

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

const recentTrips = [
  {
    id: "1",
    title: "Hiking Trip 1112",
    status: "In Progress",
    statusVariant: "in-progress",
    meta: "Submitted 2 days ago • Expected in 48h",
    actionText: "Undergoing Route Analysis",
    actionDisabled: true,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Hiking Trip 1112",
    status: "In Progress",
    statusVariant: "in-progress",
    meta: "Submitted 2 days ago • Expected in 48h",
    actionText: "Undergoing Route Analysis",
    actionDisabled: true,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Hiking Trip 1112",
    status: "Ready",
    statusVariant: "ready",
    meta: "Submitted 2 days ago • Expected in 48h",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    title: "Hiking Trip 1112",
    status: "Completed",
    statusVariant: "completed",
    meta: "Submitted 2 days ago • Expected in 48h",
    actionText: "View Details",
    actionDisabled: false,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    title: "Hiking Trip 1112",
    status: "Completed",
    statusVariant: "completed",
    meta: "Submitted 2 days ago • Expected in 48h",
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
        border-amber-200 bg-amber-50 text-amber-700
        dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400
      `;

    case "ready":
      return `
        border-emerald-200 bg-emerald-50 text-emerald-700
        dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400
      `;

    case "completed":
      return `
        border-zinc-200 bg-zinc-100 text-zinc-600
        dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300
      `;

    default:
      return `
        border-border bg-muted text-muted-foreground
      `;
  }
};

export default function UserOverview() {
  const { profile } = useAuth();

  const userName = profile
    ? `${profile.firstName ?? ""} ${profile.lastName ?? ""}`.trim()
    : "Marshall White";

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <section
        className="
          relative overflow-hidden rounded-2xl border border-border
          bg-gradient-to-br
          from-card via-card to-amber-50/70
          p-5 shadow-sm
          dark:from-card dark:via-card dark:to-amber-500/[0.04]
          sm:p-6
        "
      >
        {/* Decorative glow */}
        <div
          className="
            pointer-events-none absolute -right-16 -top-24
            h-56 w-56 rounded-full
            bg-amber-400/10 blur-3xl
            dark:bg-amber-400/5
          "
        />

        <div
          className="
            relative flex flex-col gap-5
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Welcome Back, {userName}{" "}
              <span className="inline-block">👋</span>
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Ready for your next adventure? Scout AI is standing by to help
              you build your next journey.
            </p>
          </div>

          <Button
            variant="primary"
            className="
              h-11 shrink-0 rounded-xl px-5
              shadow-sm transition-all
              hover:-translate-y-0.5 hover:shadow-md
            "
          >
            <Plus className="mr-2 h-4 w-4" />
            Create new trip plan
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.title}
              className="
                group overflow-hidden rounded-2xl
                border-border/70 bg-card
                shadow-sm transition-all duration-200
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
                      flex h-11 w-11 items-center justify-center
                      rounded-xl border border-border/70
                      bg-muted/60 text-muted-foreground
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

      {/* Recent Trips */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Recent Trips
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Track your latest travel plans and their current status.
            </p>
          </div>

          <Link
            href="/user/travel-trips"
            className="
              group flex shrink-0 items-center gap-1.5
              text-sm font-semibold
              text-amber-600
              transition-colors
              hover:text-amber-700
              dark:text-amber-400
              dark:hover:text-amber-300
            "
          >
            View all

            <ArrowRight
              className="
                h-4 w-4 transition-transform
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        <div className="space-y-3">
          {recentTrips.map((trip) => (
            <div
              key={trip.id}
              className="
                group flex flex-col gap-4
                rounded-2xl border border-border/70
                bg-card p-4
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
              {/* Trip Info */}
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

                <div className="min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-sm font-semibold text-foreground sm:text-base">
                      {trip.title}
                    </h3>

                    <span
                      className={`
                        inline-flex items-center
                        rounded-full border
                        px-2.5 py-1
                        text-[11px] font-semibold
                        leading-none
                        ${getStatusClasses(trip.statusVariant)}
                      `}
                    >
                      {trip.status}
                    </span>
                  </div>

                  <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
                    {trip.meta}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="shrink-0 sm:pl-4">
                {trip.actionDisabled ? (
                  <Button
                    disabled
                    variant="outline"
                    className="
                      w-full rounded-xl
                      border-border/60
                      bg-muted/40
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
                      font-medium
                      hover:bg-amber-50
                      hover:text-amber-700
                      dark:hover:bg-amber-500/10
                      dark:hover:text-amber-400
                      sm:w-auto
                    "
                  >
                    {trip.actionText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
"use client";

import React, { useState } from "react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Handshake,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type TimeRange = "7d" | "30d" | "12m";

const metrics = [
  {
    title: "Total Partners",
    value: "2,486",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Active Partners",
    value: "2,000",
    change: "+8.4%",
    icon: UserCheck,
  },
];

const activities = [
  {
    id: 1,
    type: "application",
    title: "New Application: Alpine Ascent Outfitters",
    description:
      "Adventure guide service based in Switzerland applied for the Elite Tier partnership. Verification required.",
    time: "2m ago",
  },
  {
    id: 2,
    type: "renewal",
    title: "Renewal Request: Summit Trail Trekkers",
    description:
      "Experienced hiking company from Canada is seeking an Elite Tier renewal. Awaiting document submission.",
    time: "5m ago",
  },
  {
    id: 3,
    type: "application",
    title: "New Application: Alpine Ascent Outfitters",
    description:
      "Adventure guide service based in Switzerland applied for the Elite Tier partnership. Verification required.",
    time: "2m ago",
  },
  {
    id: 4,
    type: "application",
    title: "New Application: Ocean Wave Explorers",
    description:
      "Surfing school from Australia applied for the Pro Tier. Background check is currently in progress.",
    time: "10m ago",
  },
];

const barChartData = [
  { month: "Jan", value: 4 },
  { month: "Feb", value: 15 },
  { month: "Mar", value: 10 },
  { month: "Apr", value: 25 },
  { month: "May", value: 35 },
  {
    month: "Jun",
    value: 45,
    isCurrent: true,
    tooltip: "This month: 8,879",
  },
  { month: "Jul", value: 20 },
  { month: "Aug", value: 30 },
  { month: "Sep", value: 18 },
  { month: "Oct", value: 15 },
  { month: "Nov", value: 28 },
  { month: "Dec", value: 40 },
];

const tierDistribution = [
  {
    label: "Member",
    percentage: 45,
    color: "#34d399",
  },
  {
    label: "Ambassador",
    percentage: 30,
    color: "#a3e635",
  },
  {
    label: "Advocate",
    percentage: 25,
    color: "#facc15",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "renewal":
      return Clock3;

    default:
      return Building2;
  }
};

export default function PartnershipManagement() {
  const [activeTab, setActiveTab] =
    useState<TimeRange>("30d");

  const maxChartValue = Math.max(
    ...barChartData.map((item) => item.value)
  );

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <section
        className="
          relative overflow-hidden
          rounded-2xl
          border border-border
          bg-gradient-to-br
          from-card via-card to-amber-50/70
          p-5
          shadow-sm
          dark:from-card
          dark:via-card
          dark:to-amber-500/[0.04]
          sm:p-6
        "
      >
        <div
          className="
            pointer-events-none
            absolute -right-20 -top-24
            h-64 w-64
            rounded-full
            bg-amber-400/10
            blur-3xl
            dark:bg-amber-400/5
          "
        />

        <div className="relative">
          <div
            className="
              mb-4 flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-border
              bg-background/60
              text-muted-foreground
            "
          >
            <Handshake className="h-5 w-5" />
          </div>

          <h1
            className="
              text-2xl font-bold
              tracking-tight
              text-foreground
              sm:text-3xl
            "
          >
            Partnership Management
          </h1>

          <p
            className="
              mt-2 max-w-2xl
              text-sm leading-6
              text-muted-foreground
              sm:text-base
            "
          >
            Monitor partner growth, tier distribution, applications,
            renewals, and recent partnership activity.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section
        className="
          grid grid-cols-1
          gap-4
          sm:grid-cols-2
        "
      >
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <Card
              key={metric.title}
              className="
                group overflow-hidden
                rounded-2xl
                border-border/70
                bg-card
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-border
                hover:shadow-md
                dark:shadow-none
                dark:hover:bg-accent/20
              "
            >
              <CardContent className="p-5">
                <div
                  className="
                    flex items-start
                    justify-between
                    gap-4
                  "
                >
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
                      inline-flex
                      items-center gap-1
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
                    {metric.change}
                  </span>
                </div>

                <div className="mt-6">
                  <p
                    className="
                      text-3xl
                      font-bold
                      tracking-tight
                      text-foreground
                    "
                  >
                    {metric.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-muted-foreground
                    "
                  >
                    {metric.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Charts */}
      <section
        className="
          grid grid-cols-1
          gap-6
          xl:grid-cols-3
        "
      >
        {/* Partner Growth */}
        <Card
          className="
            overflow-hidden
            rounded-2xl
            border-border/70
            bg-card
            shadow-sm
            dark:shadow-none
            xl:col-span-2
          "
        >
          <CardContent className="p-5 sm:p-6">
            {/* Chart Header */}
            <div
              className="
                flex flex-col
                gap-4
                sm:flex-row
                sm:items-start
                sm:justify-between
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-xl
                      border border-border
                      bg-muted/50
                      text-muted-foreground
                    "
                  >
                    <TrendingUp className="h-4 w-4" />
                  </div>

                  <div>
                    <h2
                      className="
                        text-base
                        font-bold
                        text-foreground
                      "
                    >
                      Partner Growth
                    </h2>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-muted-foreground
                      "
                    >
                      New partners joining over time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div
                className="
                  flex self-start
                  rounded-xl
                  border border-border
                  bg-muted/40
                  p-1
                "
              >
                {[
                  {
                    value: "7d",
                    label: "7 Days",
                  },
                  {
                    value: "30d",
                    label: "30 Days",
                  },
                  {
                    value: "12m",
                    label: "12 Months",
                  },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        tab.value as TimeRange
                      )
                    }
                    className={`
                      rounded-lg
                      px-3 py-1.5
                      text-xs
                      font-semibold
                      transition-all
                      ${activeTab === tab.value
                        ? `
                            bg-background
                            text-foreground
                            shadow-sm
                            ring-1
                            ring-border
                          `
                        : `
                            text-muted-foreground
                            hover:text-foreground
                          `
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="mt-8">
              <div className="relative h-[290px]">
                {/* Grid */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    flex flex-col
                    justify-between
                    pb-7
                  "
                >
                  {[
                    "50k",
                    "40k",
                    "30k",
                    "20k",
                    "10k",
                    "0",
                  ].map((label) => (
                    <div
                      key={label}
                      className="
                        flex items-center
                        text-[10px]
                        text-muted-foreground
                      "
                    >
                      <span className="w-8 shrink-0">
                        {label}
                      </span>

                      <div
                        className="
                          ml-2
                          w-full
                          border-t
                          border-dashed
                          border-border/70
                        "
                      />
                    </div>
                  ))}
                </div>

                {/* Bars */}
                <div
                  className="
                    absolute inset-0
                    flex items-end
                    gap-1
                    pb-7
                    pl-10
                    sm:gap-2
                  "
                >
                  {barChartData.map((data) => {
                    const heightPercentage =
                      (data.value /
                        maxChartValue) *
                      82;

                    return (
                      <div
                        key={data.month}
                        className="
                          group relative
                          flex h-full
                          flex-1
                          items-end
                          justify-center
                        "
                      >
                        {data.isCurrent && (
                          <div
                            className="
                              absolute
                              left-1/2
                              z-20
                              -translate-x-1/2
                              whitespace-nowrap
                            "
                            style={{
                              bottom: `calc(${heightPercentage}% + 36px)`,
                            }}
                          >
                            <div
                              className="
                                rounded-lg
                                border border-border
                                bg-popover
                                px-2.5 py-1.5
                                text-[10px]
                                font-semibold
                                text-popover-foreground
                                shadow-lg
                              "
                            >
                              {data.tooltip}
                            </div>
                          </div>
                        )}

                        <div
                          style={{
                            height: `${heightPercentage}%`,
                          }}
                          className={`
                            w-full
                            max-w-7
                            rounded-t-md
                            transition-all
                            duration-300
                            ${data.isCurrent
                              ? `
                                  bg-amber-400
                                  hover:bg-amber-500
                                `
                              : `
                                  bg-muted-foreground/20
                                  group-hover:bg-muted-foreground/35
                                  dark:bg-muted-foreground/25
                                `
                            }
                          `}
                        />

                        <span
                          className="
                            absolute
                            -bottom-1
                            translate-y-full
                            text-[10px]
                            font-medium
                            text-muted-foreground
                            transition-colors
                            group-hover:text-foreground
                          "
                        >
                          {data.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tier Distribution */}
        <Card
          className="
            overflow-hidden
            rounded-2xl
            border-border/70
            bg-card
            shadow-sm
            dark:shadow-none
          "
        >
          <CardContent
            className="
              flex h-full
              flex-col
              p-5
              sm:p-6
            "
          >
            <div>
              <h2
                className="
                  text-base
                  font-bold
                  text-foreground
                "
              >
                Tier Distribution
              </h2>

              <p
                className="
                  mt-1
                  text-xs
                  text-muted-foreground
                "
              >
                Partners grouped by program tier.
              </p>
            </div>

            {/* Donut */}
            <div
              className="
                relative
                flex flex-1
                items-center
                justify-center
                py-8
              "
            >
              <svg
                className="
                  h-48 w-48
                  -rotate-90
                  transform
                "
                viewBox="0 0 160 160"
              >
                {/* Background */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="14"
                  className="text-muted"
                />

                {/* Member 45% */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="#34d399"
                  strokeWidth="14"
                  strokeDasharray="175.3 389.6"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  className="
                    cursor-pointer
                    transition-opacity
                    hover:opacity-80
                  "
                />

                {/* Ambassador 30% */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="#a3e635"
                  strokeWidth="14"
                  strokeDasharray="116.9 389.6"
                  strokeDashoffset="-180"
                  strokeLinecap="round"
                  className="
                    cursor-pointer
                    transition-opacity
                    hover:opacity-80
                  "
                />

                {/* Advocate 25% */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="#facc15"
                  strokeWidth="14"
                  strokeDasharray="97.4 389.6"
                  strokeDashoffset="-301"
                  strokeLinecap="round"
                  className="
                    cursor-pointer
                    transition-opacity
                    hover:opacity-80
                  "
                />
              </svg>

              {/* Center */}
              <div
                className="
                  absolute
                  flex flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <span
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-foreground
                  "
                >
                  2,486
                </span>

                <span
                  className="
                    mt-1
                    text-xs
                    text-muted-foreground
                  "
                >
                  Partners
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {tierDistribution.map((tier) => (
                <div
                  key={tier.label}
                  className="
                    flex items-center
                    justify-between
                    rounded-lg
                    px-1 py-1
                  "
                >
                  <div
                    className="
                      flex items-center
                      gap-2.5
                    "
                  >
                    <span
                      className="
                        h-2.5 w-2.5
                        rounded-full
                      "
                      style={{
                        backgroundColor:
                          tier.color,
                      }}
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-muted-foreground
                      "
                    >
                      {tier.label}
                    </span>
                  </div>

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-foreground
                    "
                  >
                    {tier.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recent Activity */}
      <Card
        className="
          overflow-hidden
          rounded-2xl
          border-border/70
          bg-card
          shadow-sm
          dark:shadow-none
        "
      >
        <CardContent className="p-0">
          {/* Header */}
          <div
            className="
              flex items-center
              justify-between
              border-b
              border-border/70
              px-5 py-5
              sm:px-6
            "
          >
            <div>
              <h2
                className="
                  text-lg
                  font-bold
                  tracking-tight
                  text-foreground
                "
              >
                Recent Activity
              </h2>

              <p
                className="
                  mt-1
                  text-xs
                  text-muted-foreground
                "
              >
                Latest applications, renewals, and partnership updates.
              </p>
            </div>

            <div
              className="
                flex h-9 w-9
                items-center
                justify-center
                rounded-xl
                border border-border
                bg-muted/50
                text-muted-foreground
              "
            >
              <BriefcaseBusiness className="h-4 w-4" />
            </div>
          </div>

          {/* Activity List */}
          <div
            className="
              divide-y
              divide-border/60
            "
          >
            {activities.map((activity) => {
              const ActivityIcon =
                getActivityIcon(
                  activity.type
                );

              return (
                <div
                  key={activity.id}
                  className="
                    group
                    flex items-start
                    gap-4
                    px-5 py-5
                    transition-colors
                    hover:bg-muted/30
                    sm:px-6
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex h-10 w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border border-border
                      bg-muted/50
                      text-muted-foreground
                      transition-colors
                      group-hover:bg-amber-50
                      group-hover:text-amber-600
                      dark:group-hover:bg-amber-500/10
                      dark:group-hover:text-amber-400
                    "
                  >
                    <ActivityIcon className="h-4 w-4" />
                  </div>

                  {/* Content */}
                  <div
                    className="
                      min-w-0 flex-1
                    "
                  >
                    <div
                      className="
                        flex flex-col
                        gap-1
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                        sm:gap-4
                      "
                    >
                      <div>
                        <h3
                          className="
                            text-sm
                            font-semibold
                            text-foreground
                          "
                        >
                          {activity.title}
                        </h3>

                        <p
                          className="
                            mt-1.5
                            max-w-3xl
                            text-xs
                            leading-5
                            text-muted-foreground
                            sm:text-sm
                          "
                        >
                          {activity.description}
                        </p>
                      </div>

                      <span
                        className="
                          mt-1
                          inline-flex
                          shrink-0
                          items-center
                          gap-1
                          self-start
                          rounded-full
                          border border-border
                          bg-muted/40
                          px-2.5 py-1
                          text-[10px]
                          font-medium
                          text-muted-foreground
                          sm:mt-0
                        "
                      >
                        <Clock3 className="h-3 w-3" />
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
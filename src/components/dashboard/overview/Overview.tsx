"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  RefreshCw,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type TimeRange = "7d" | "30d" | "12m";

const metrics = [
  {
    title: "Total Members",
    value: "2,486",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Active Memberships",
    value: "2,214",
    change: "+12%",
    icon: UserCheck,
  },
  {
    title: "Monthly Revenue",
    value: "$18,420",
    change: "+8.5%",
    icon: DollarSign,
  },
  {
    title: "Membership Renewals",
    value: "128",
    change: "+8.5%",
    icon: RefreshCw,
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
    tooltip: "This month: $8,879.09",
  },
  { month: "Jul", value: 20 },
  { month: "Aug", value: 30 },
  { month: "Sep", value: 18 },
  { month: "Oct", value: 15 },
  { month: "Nov", value: 28 },
  { month: "Dec", value: 40 },
];

const recentMembers = [
  {
    name: "Marcus Thorne",
    tier: "Apex Elite",
    status: "Active",
    tierVariant: "apex",
  },
  {
    name: "Sarah Jenkins",
    tier: "Summit",
    status: "Active",
    tierVariant: "summit",
  },
  {
    name: "David Chen",
    tier: "Basecamp",
    status: "Active",
    tierVariant: "basecamp",
  },
  {
    name: "Elena Rodriguez",
    tier: "Trailhead",
    status: "Active",
    tierVariant: "trailhead",
  },
  {
    name: "Olivia Bennett",
    tier: "Summit",
    status: "Active",
    tierVariant: "summit",
  },
];

const recentPayments = [
  {
    id: "#INV-8821",
    amount: "$199.00",
    date: "Oct 24, 2024",
  },
  {
    id: "#INV-8820",
    amount: "$199.00",
    date: "Oct 24, 2024",
  },
  {
    id: "#INV-8819",
    amount: "$199.00",
    date: "Oct 23, 2024",
  },
  {
    id: "#INV-8818",
    amount: "$199.00",
    date: "Oct 22, 2024",
  },
  {
    id: "#INV-8817",
    amount: "$199.00",
    date: "Oct 21, 2024",
  },
];

const membershipDistribution = [
  {
    label: "Trailhead",
    value: 820,
    percentage: 42,
    color: "#34d399",
  },
  {
    label: "Summit",
    value: 710,
    percentage: 30,
    color: "#a3e635",
  },
  {
    label: "Apex Elite",
    value: 560,
    percentage: 28,
    color: "#facc15",
  },
];

const getTierClasses = (variant: string) => {
  switch (variant) {
    case "apex":
      return `
        border-amber-200
        bg-amber-50
        text-amber-700
        dark:border-amber-500/20
        dark:bg-amber-500/10
        dark:text-amber-400
      `;

    case "summit":
      return `
        border-emerald-200
        bg-emerald-50
        text-emerald-700
        dark:border-emerald-500/20
        dark:bg-emerald-500/10
        dark:text-emerald-400
      `;

    case "basecamp":
      return `
        border-blue-200
        bg-blue-50
        text-blue-700
        dark:border-blue-500/20
        dark:bg-blue-500/10
        dark:text-blue-400
      `;

    case "trailhead":
      return `
        border-cyan-200
        bg-cyan-50
        text-cyan-700
        dark:border-cyan-500/20
        dark:bg-cyan-500/10
        dark:text-cyan-400
      `;

    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

export default function Overview() {
  const [activeTab, setActiveTab] = useState<TimeRange>("30d");

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

        <div className="relative space-y-2">
          <h1
            className="
              text-2xl font-bold
              tracking-tight
              text-foreground
              sm:text-3xl
            "
          >
            Welcome Back, Alex
          </h1>

          <p
            className="
              max-w-2xl
              text-sm leading-6
              text-muted-foreground
              sm:text-base
            "
          >
            Plan, track, and manage your adventure business from one place.
            Your Scout administration dashboard is ready.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section
        className="
          grid grid-cols-1
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
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
                      items-center
                      justify-center
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
        {/* Revenue Chart */}
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
                      items-center
                      justify-center
                      rounded-xl
                      border border-border
                      bg-muted/50
                      text-muted-foreground
                    "
                  >
                    <TrendingUp className="h-4 w-4" />
                  </div>

                  <p
                    className="
                      text-sm
                      font-medium
                      text-muted-foreground
                    "
                  >
                    Revenue Breakdown
                  </p>
                </div>

                <div
                  className="
                    mt-4
                    flex flex-wrap
                    items-end gap-2
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-foreground
                      sm:text-3xl
                    "
                  >
                    $18,420
                  </h3>

                  <span
                    className="
                      mb-1
                      text-xs font-medium
                      text-emerald-600
                      dark:text-emerald-400
                    "
                  >
                    +8.5% this month
                  </span>
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
                  { value: "7d", label: "7 Days" },
                  { value: "30d", label: "30 Days" },
                  { value: "12m", label: "12 Months" },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() =>
                      setActiveTab(tab.value as TimeRange)
                    }
                    className={`
                      rounded-lg
                      px-3 py-1.5
                      text-xs font-semibold
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
                  {["50k", "40k", "30k", "20k", "10k", "0"].map(
                    (label) => (
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
                    )
                  )}
                </div>

                {/* Bars */}
                <div
                  className="
                    absolute
                    inset-0
                    flex items-end
                    gap-1
                    pb-7
                    pl-10
                    sm:gap-2
                  "
                >
                  {barChartData.map((data) => {
                    const heightPercentage =
                      (data.value / maxChartValue) * 82;

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

        {/* Membership Distribution */}
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
              <h3 className="text-base font-bold text-foreground">
                Membership Distribution
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                Current members by subscription tier.
              </p>
            </div>

            {/* Donut */}
            <div
              className="
                relative
                flex flex-1
                items-center
                justify-center
                py-7
              "
            >
              <svg
                viewBox="0 0 160 160"
                className="
                  h-48 w-48
                  -rotate-90
                  transform
                "
              >
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="14"
                  className="text-muted"
                />

                {/* Trailhead */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="#34d399"
                  strokeWidth="14"
                  strokeDasharray="163.6 389.6"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />

                {/* Summit */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="#a3e635"
                  strokeWidth="14"
                  strokeDasharray="116.9 389.6"
                  strokeDashoffset="-167"
                  strokeLinecap="round"
                />

                {/* Apex */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="#facc15"
                  strokeWidth="14"
                  strokeDasharray="109.1 389.6"
                  strokeDashoffset="-287"
                  strokeLinecap="round"
                />
              </svg>

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
                  Members
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {membershipDistribution.map((item) => (
                <div
                  key={item.label}
                  className="
                    flex items-center
                    justify-between
                    rounded-lg
                    px-1 py-1
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="
                        h-2.5 w-2.5
                        rounded-full
                      "
                      style={{
                        backgroundColor: item.color,
                      }}
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-muted-foreground
                      "
                    >
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="
                        text-xs
                        text-muted-foreground
                      "
                    >
                      {item.percentage}%
                    </span>

                    <span
                      className="
                        min-w-10
                        text-right
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tables */}
      <section
        className="
          grid grid-cols-1
          gap-6
          xl:grid-cols-2
        "
      >
        {/* Recent Members */}
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
                <h3 className="text-lg font-bold text-foreground">
                  Recent Members
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Latest users joining your memberships.
                </p>
              </div>

              <Link
                href="#"
                className="
                  group flex
                  items-center gap-1
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
                    h-4 w-4
                    transition-transform
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr
                    className="
                      border-b
                      border-border/70
                      bg-muted/20
                      text-xs
                      font-medium
                      text-muted-foreground
                    "
                  >
                    <th className="px-5 py-3.5 sm:px-6">
                      Name
                    </th>

                    <th className="px-4 py-3.5">
                      Tier
                    </th>

                    <th className="px-5 py-3.5 sm:px-6">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border/60">
                  {recentMembers.map((member) => (
                    <tr
                      key={member.name}
                      className="
                        transition-colors
                        hover:bg-muted/30
                      "
                    >
                      <td
                        className="
                          px-5 py-4
                          font-medium
                          text-foreground
                          sm:px-6
                        "
                      >
                        {member.name}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`
                            inline-flex
                            rounded-full
                            border
                            px-2.5 py-1
                            text-[11px]
                            font-semibold
                            ${getTierClasses(
                            member.tierVariant
                          )}
                          `}
                        >
                          {member.tier}
                        </span>
                      </td>

                      <td className="px-5 py-4 sm:px-6">
                        <span
                          className="
                            inline-flex
                            items-center gap-1.5
                            text-xs
                            font-medium
                            text-muted-foreground
                          "
                        >
                          <span
                            className="
                              h-1.5 w-1.5
                              rounded-full
                              bg-emerald-500
                            "
                          />

                          {member.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Payments */}
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
                <h3 className="text-lg font-bold text-foreground">
                  Recent Payments
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Latest successful membership transactions.
                </p>
              </div>

              <Link
                href="#"
                className="
                  group flex
                  items-center gap-1
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
                    h-4 w-4
                    transition-transform
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr
                    className="
                      border-b
                      border-border/70
                      bg-muted/20
                      text-xs
                      font-medium
                      text-muted-foreground
                    "
                  >
                    <th className="px-5 py-3.5 sm:px-6">
                      Invoice
                    </th>

                    <th className="px-4 py-3.5">
                      Amount
                    </th>

                    <th className="px-5 py-3.5 sm:px-6">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border/60">
                  {recentPayments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="
                        transition-colors
                        hover:bg-muted/30
                      "
                    >
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="
                              flex h-8 w-8
                              items-center
                              justify-center
                              rounded-lg
                              border border-border
                              bg-muted/50
                              text-muted-foreground
                            "
                          >
                            <CreditCard className="h-3.5 w-3.5" />
                          </div>

                          <span
                            className="
                              font-mono
                              text-xs
                              font-medium
                              text-muted-foreground
                            "
                          >
                            {payment.id}
                          </span>
                        </div>
                      </td>

                      <td
                        className="
                          px-4 py-4
                          font-semibold
                          text-foreground
                        "
                      >
                        {payment.amount}
                      </td>

                      <td
                        className="
                          px-5 py-4
                          text-sm
                          text-muted-foreground
                          sm:px-6
                        "
                      >
                        {payment.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
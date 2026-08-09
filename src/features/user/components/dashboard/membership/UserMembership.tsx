"use client";

import React from "react";

import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  CreditCard,
  Download,
  PackagePlus,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const includedFeatures = [
  "Access to Scout AI",
  "Generate 4 trip packages per month",
  "Additional package cost at $5.00 each",
  "All core modules included",
  "Trip Planning Window available within 60 days of departure",
  "Access to members-only content",
  "Analysis & Support",
  "Tier III priority in queue",
  "Merchandise Discount 5%",
];

const billingHistory = [
  {
    id: 1,
    date: "July 15, 2024",
    amount: "$15.00",
    status: "Paid",
  },
  {
    id: 2,
    date: "June 15, 2024",
    amount: "$15.00",
    status: "Paid",
  },
  {
    id: 3,
    date: "May 15, 2024",
    amount: "$15.00",
    status: "Paid",
  },
];

export default function UserMembership() {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="relative space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Membership
        </h1>

        <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
          Manage your membership, track your usage, and unlock more powerful
          planning tools.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        {/* Left Side */}
        <div className="space-y-6 xl:col-span-2">
          {/* Current Plan */}
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
              {/* Plan Header */}
              <div
                className="
                  relative overflow-hidden
                  border-b border-border/70
                  bg-gradient-to-br
                  from-amber-50/80
                  via-card
                  to-card
                  p-5
                  dark:from-amber-500/[0.07]
                  dark:via-card
                  dark:to-card
                  sm:p-7
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute -right-10 -top-16
                    h-44 w-44
                    rounded-full
                    bg-amber-400/10
                    blur-3xl
                    dark:bg-amber-400/5
                  "
                />

                <div
                  className="
                    relative flex flex-col gap-5
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className="
                          inline-flex items-center gap-1.5
                          rounded-full
                          border border-amber-200
                          bg-amber-100/70
                          px-2.5 py-1
                          text-[11px] font-semibold
                          text-amber-700
                          dark:border-amber-500/20
                          dark:bg-amber-500/10
                          dark:text-amber-400
                        "
                      >
                        <Sparkles className="h-3 w-3" />
                        Current plan
                      </span>
                    </div>

                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      Plus — Go Further
                    </h2>

                    <div className="mt-2 flex flex-wrap items-end gap-1.5">
                      <span className="text-2xl font-bold text-foreground">
                        $19.99
                      </span>

                      <span className="pb-1 text-sm text-muted-foreground">
                        / month
                      </span>
                    </div>

                    <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                      Your current path to discovery with more trip planning,
                      priority support, and member benefits.
                    </p>
                  </div>

                  <Button
                    variant="primary"
                    className="
                      h-10 shrink-0
                      rounded-xl px-5
                      shadow-sm
                      transition-all
                      hover:-translate-y-0.5
                      hover:shadow-md
                    "
                  >
                    Upgrade Plan
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Plan Details */}
              <div className="p-5 sm:p-7">
                {/* Metadata */}
                <div
                  className="
                    grid grid-cols-1 gap-3
                    sm:grid-cols-3
                  "
                >
                  <div
                    className="
                      rounded-xl
                      border border-border/60
                      bg-muted/30
                      p-4
                    "
                  >
                    <p className="text-xs font-medium text-muted-foreground">
                      Next Renewal
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-foreground">
                      15 July 2026
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border border-border/60
                      bg-muted/30
                      p-4
                    "
                  >
                    <p className="text-xs font-medium text-muted-foreground">
                      Member Since
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-foreground">
                      12 Jan 2026
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border border-border/60
                      bg-muted/30
                      p-4
                    "
                  >
                    <p className="text-xs font-medium text-muted-foreground">
                      Priority Level
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-foreground">
                      Tier IV Priority
                    </p>
                  </div>
                </div>

                {/* Included Features */}
                <div
                  className="
                    mt-6
                    rounded-2xl
                    border border-border/70
                    bg-muted/20
                    p-5
                    sm:p-6
                  "
                >
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-foreground">
                      Included features
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Everything currently available with your Plus membership.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {includedFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <div
                          className="
                            mt-0.5 flex h-5 w-5
                            shrink-0 items-center justify-center
                            rounded-full
                            bg-emerald-50
                            text-emerald-600
                            dark:bg-emerald-500/10
                            dark:text-emerald-400
                          "
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>

                        <span className="text-sm leading-5 text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
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
              {/* Table Header */}
              <div className="border-b border-border/70 px-5 py-5 sm:px-7">
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-foreground">
                    Billing History
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    View your previous membership payments and invoices.
                  </p>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden overflow-x-auto sm:block">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr
                      className="
                        border-b border-border/70
                        bg-muted/20
                        text-xs font-medium
                        text-muted-foreground
                      "
                    >
                      <th className="px-7 py-3.5">Date</th>
                      <th className="px-4 py-3.5">Amount</th>
                      <th className="px-4 py-3.5">Status</th>
                      <th className="px-7 py-3.5 text-right">
                        Invoice
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border/60">
                    {billingHistory.map((item) => (
                      <tr
                        key={item.id}
                        className="
                          transition-colors
                          hover:bg-muted/30
                        "
                      >
                        <td className="px-7 py-4 font-medium text-foreground">
                          {item.date}
                        </td>

                        <td className="px-4 py-4 font-medium text-foreground">
                          {item.amount}
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className="
                              inline-flex items-center gap-1.5
                              rounded-full
                              border border-emerald-200
                              bg-emerald-50
                              px-2.5 py-1
                              text-[11px] font-semibold
                              text-emerald-700
                              dark:border-emerald-500/20
                              dark:bg-emerald-500/10
                              dark:text-emerald-400
                            "
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            {item.status}
                          </span>
                        </td>

                        <td className="px-7 py-4 text-right">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label={`Download invoice for ${item.date}`}
                            className="
                              h-9 w-9
                              rounded-lg
                              text-muted-foreground
                              hover:text-foreground
                            "
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Billing List */}
              <div className="divide-y divide-border/60 sm:hidden">
                {billingHistory.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        {item.amount}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.date}
                      </p>

                      <span
                        className="
                          mt-2 inline-flex items-center gap-1
                          rounded-full
                          border border-emerald-200
                          bg-emerald-50
                          px-2 py-0.5
                          text-[10px] font-semibold
                          text-emerald-700
                          dark:border-emerald-500/20
                          dark:bg-emerald-500/10
                          dark:text-emerald-400
                        "
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {item.status}
                      </span>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label={`Download invoice for ${item.date}`}
                      className="h-9 w-9 shrink-0 rounded-lg"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Monthly Usage */}
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
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Monthly Usage
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Your current plan allowance.
                  </p>
                </div>

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
                  <PackagePlus className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Trip Package Usage
                    </p>

                    <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                      1
                      <span className="ml-1 text-sm font-medium text-muted-foreground">
                        / 2 used
                      </span>
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full
                      border border-amber-200
                      bg-amber-50
                      px-2 py-1
                      text-[10px] font-semibold
                      text-amber-700
                      dark:border-amber-500/20
                      dark:bg-amber-500/10
                      dark:text-amber-400
                    "
                  >
                    50%
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="
                        h-full w-1/2
                        rounded-full
                        bg-amber-400
                        transition-all
                      "
                    />
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-[11px] text-muted-foreground">
                      1 package remaining
                    </p>

                    <p className="text-[11px] text-muted-foreground">
                      Resets in 12 days
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
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
            <CardContent className="p-5 sm:p-6">
              <div className="mb-5">
                <h3 className="text-base font-bold text-foreground">
                  Payment Method
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Used for membership renewals.
                </p>
              </div>

              <div
                className="
                  flex items-center justify-between gap-3
                  rounded-xl
                  border border-border/70
                  bg-muted/30
                  p-3.5
                "
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="
                      flex h-10 w-11
                      shrink-0 items-center justify-center
                      rounded-lg
                      border border-border
                      bg-background
                    "
                  >
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      Visa ending in 4582
                    </p>

                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Expires 09/28
                    </p>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="shrink-0 rounded-lg"
                >
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Package */}
          <Card
            className="
              relative overflow-hidden
              rounded-2xl
              border-amber-200/80
              bg-gradient-to-br
              from-amber-50
              via-card
              to-card
              shadow-sm
              dark:border-amber-500/15
              dark:from-amber-500/[0.07]
              dark:via-card
              dark:to-card
              dark:shadow-none
            "
          >
            <div
              className="
                pointer-events-none
                absolute -right-12 -top-12
                h-36 w-36
                rounded-full
                bg-amber-400/10
                blur-3xl
              "
            />

            <CardContent className="relative p-5 sm:p-6">
              <span
                className="
                  inline-flex items-center gap-1
                  rounded-full
                  border border-amber-200
                  bg-amber-100/70
                  px-2.5 py-1
                  text-[10px] font-semibold
                  uppercase tracking-wide
                  text-amber-700
                  dark:border-amber-500/20
                  dark:bg-amber-500/10
                  dark:text-amber-400
                "
              >
                Expansion
              </span>

              <div className="mt-4">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Need more distance?
                </h3>

                <p className="mt-2 text-sm leading-5 text-muted-foreground">
                  Buy an additional trip package for just{" "}
                  <span className="font-semibold text-foreground">$5.00</span>.
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                className="
                  mt-5 h-11 w-full
                  rounded-xl
                  bg-background/70
                  font-semibold
                  transition-all
                  hover:bg-background
                  hover:shadow-sm
                "
              >
                <PackagePlus className="mr-2 h-4 w-4" />
                Buy Additional Package
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
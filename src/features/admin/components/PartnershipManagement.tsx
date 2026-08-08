"use client";

import { ArrowUpRight, BriefcaseBusiness, Building2, Clock3, UserCheck, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import DistributionPieChart from "@/features/metricksandcharts/components/DistributionPieChart";
import RevenueBarChart from "@/features/metricksandcharts/components/RevenueBarChart";

const partnerGrowthData = [
  { label: "Jan", value: 4 },
  { label: "Feb", value: 15 },
  { label: "Mar", value: 10 },
  { label: "Apr", value: 25 },
  { label: "May", value: 35 },
  { label: "Jun", value: 45, isCurrent: true, tooltip: "This month: 8,879" },
  { label: "Jul", value: 20 },
  { label: "Aug", value: 30 },
  { label: "Sep", value: 18 },
  { label: "Oct", value: 15 },
  { label: "Nov", value: 28 },
  { label: "Dec", value: 40 },
];

const tierDistribution = [
  { label: "Member", value: 45, percentage: 45, color: "#34d399" },
  { label: "Ambassador", value: 30, percentage: 30, color: "#a3e635" },
  { label: "Advocate", value: 25, percentage: 25, color: "#facc15" },
];

const activities = [
  {
    id: 1,
    type: "application",
    title: "New Application: Alpine Ascent Outfitters",
    description: "Adventure guide service based in Switzerland applied for the Elite Tier partnership. Verification required.",
    time: "2m ago",
  },
  {
    id: 2,
    type: "renewal",
    title: "Renewal Request: Summit Trail Trekkers",
    description: "Experienced hiking company from Canada is seeking an Elite Tier renewal. Awaiting document submission.",
    time: "5m ago",
  },
  {
    id: 3,
    type: "application",
    title: "New Application: Alpine Ascent Outfitters",
    description: "Adventure guide service based in Switzerland applied for the Elite Tier partnership. Verification required.",
    time: "2m ago",
  },
  {
    id: 4,
    type: "application",
    title: "New Application: Ocean Wave Explorers",
    description: "Surfing school from Australia applied for the Pro Tier. Background check is currently in progress.",
    time: "10m ago",
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
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="relative">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Partnership Management
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Monitor partner growth, tier distribution, applications, renewals, and recent partnership activity.
        </p>
      </div>

      {/* Metrics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Total Partners */}
        <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                <Users className="h-5 w-5" />
              </div>

              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                <ArrowUpRight className="h-3 w-3" />
                +12%
              </span>
            </div>

            <div className="mt-6">
              <p className="text-3xl font-bold tracking-tight text-foreground">
                2,486
              </p>

              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Total Partners
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Active Partners */}
        <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                <UserCheck className="h-5 w-5" />
              </div>

              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                <ArrowUpRight className="h-3 w-3" />
                +8.4%
              </span>
            </div>

            <div className="mt-6">
              <p className="text-3xl font-bold tracking-tight text-foreground">
                2,000
              </p>

              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Active Partners
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Shared Charts */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueBarChart
            title="Partner Growth"
            description="New partners joining over time."
            data={partnerGrowthData}
            defaultRange="30d"
            onRangeChange={(range) => console.log("Partner growth range:", range)}
          />
        </div>

        <DistributionPieChart
          title="Tier Distribution"
          description="Partners grouped by program tier."
          total="2,486"
          totalLabel="Partners"
          data={tierDistribution}
        />
      </section>

      {/* Recent Activity */}
      <Card className="overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm dark:shadow-none">
        <CardContent className="p-0">
          {/* Activity Header */}
          <div className="flex items-center justify-between border-b border-border/70 px-5 py-5 sm:px-6">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-foreground">
                Recent Activity
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                Latest applications, renewals, and partnership updates.
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
              <BriefcaseBusiness className="h-4 w-4" />
            </div>
          </div>

          {/* Activity List */}
          <div className="divide-y divide-border/60">
            {activities.map((activity) => {
              const ActivityIcon = getActivityIcon(activity.type);

              return (
                <div key={activity.id} className="group flex items-start gap-4 px-5 py-5 transition-colors hover:bg-muted/30 sm:px-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                    <ActivityIcon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {activity.title}
                        </h3>

                        <p className="mt-1.5 max-w-3xl text-xs leading-5 text-muted-foreground sm:text-sm">
                          {activity.description}
                        </p>
                      </div>

                      <span className="mt-1 inline-flex shrink-0 items-center gap-1 self-start rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground sm:mt-0">
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
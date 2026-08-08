"use client";



import AdminResentMember from "@/features/member/components/AdminResentMember";
import AdminMetrics from "@/features/metricksandcharts/components/AdminMetricks";
import DistributionPieChart from "@/features/metricksandcharts/components/DistributionPieChart";
import RevenueBarChart from "@/features/metricksandcharts/components/RevenueBarChart";
import AdminResentPayment from "@/features/payment/components/AdminResentPayment";


const revenueData = [
  {
    label: "Jan",
    value: 4,
  },
  {
    label: "Feb",
    value: 15,
  },
  {
    label: "Mar",
    value: 10,
  },
  {
    label: "Apr",
    value: 25,
  },
  {
    label: "May",
    value: 35,
  },
  {
    label: "Jun",
    value: 45,

  },
  {
    label: "Jul",
    value: 20,
    isCurrent: true,
    tooltip: "This month: $8,879.09",
  },
  {
    label: "Aug",
    value: 30,
  },
  {
    label: "Sep",
    value: 18,
  },
  {
    label: "Oct",
    value: 15,
  },
  {
    label: "Nov",
    value: 28,
  },
  {
    label: "Dec",
    value: 40,
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


export default function Overview() {

  const handleRangeChange = (range: "7d" | "30d" | "12m") => {
    console.log("Selected:", range);

    // Later:
    // refetch revenue data based on range
  };

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
      <AdminMetrics />

      {/* Charts */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueBarChart
            title="Revenue Breakdown"
            amount="$18,420"
            change="+8.5% this month"
            data={revenueData}
            defaultRange="30d"
            onRangeChange={handleRangeChange}
          />
        </div>

        <DistributionPieChart
          title="Membership Distribution"
          description="Current members by subscription tier."
          total="2,486"
          totalLabel="Members"
          data={membershipDistribution}
        />
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
        <AdminResentMember />

        {/* Recent Payments */}
        <AdminResentPayment />
      </section>
    </div>
  );
}
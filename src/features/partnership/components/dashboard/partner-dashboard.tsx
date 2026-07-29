"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { ColumnDef } from "@tanstack/react-table";
import { Calendar, CreditCard, FilePenLine, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { referralData } from "../../data/dashboard";
import { IReferral } from "../../partnership.interface";
import { ProgressCard } from "./ProgressCard";
import { SummaryCard } from "./SummaryCard";

const dashboardSummary = {
    totalReferrals: 25,
    activeReferrals: 18,
    referralRevenue: 1025,

    currentTierProgress: 35,
    tierTarget: 40,
    tierName: "Elite",

    monthlyReferrals: 5,
    monthlyReferralTarget: 10,

    contentPosts: 2,
    contentPostTarget: 5,
};


const PartnerDashboard = () => {
    const { profile } = useAuth();

    const displayName =
        [profile?.firstName, profile?.lastName].filter(Boolean).join(" ") ||
        "Marshal White";

    const recentReferrals = referralData;

    const remainingReferrals = Math.max(
        dashboardSummary.tierTarget -
        dashboardSummary.currentTierProgress,
        0,
    );

    const tierProgress = Math.min(
        (dashboardSummary.currentTierProgress /
            dashboardSummary.tierTarget) *
        100,
        100,
    );

    const columns: ColumnDef<IReferral>[] = [
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(row.original.date).toLocaleDateString()}
                </div>
            ),
        },
        {
            accessorKey: "name",
            header: "Referred User",
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xs">
                        {row.original.firstName[0]}{row.original.lastName[0]}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">
                            {row.original.firstName} {row.original.lastName}
                        </span>
                        <span className="text-xs text-muted-foreground">ID: {row.original.id}</span>
                    </div>
                </div>
            ),
        },
        {
            accessorKey: "membership",
            header: "Membership",
            cell: ({ row }) => {
                const variant =
                    row.original.membership === "Enterprise" ? "default" :
                        row.original.membership === "Premium" ? "secondary" : "outline";

                return (
                    <Badge variant={variant} className="capitalize">
                        {row.original.membership}
                    </Badge>
                );
            },
        },
        {
            accessorKey: "commission",
            header: "Commission",
            cell: ({ row }) => (
                <div className="flex items-center gap-1.5 font-medium text-green-600 dark:text-green-400">
                    <CreditCard className="h-3.5 w-3.5" />
                    ${row.original.commission.toFixed(2)}
                </div>
            ),
        }
    ];

    return (
        <main className="container">
            <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* Welcome area */}
                <header className="mb-5 sm:mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[32px]">
                        Welcome Back, {displayName} 👋
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">
                        Ready for your next adventure? Scout AI is standing by to
                        help you build your next journey.
                    </p>
                </header>

                {/* Summary cards */}
                <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <SummaryCard
                        label="Total Referrals"
                        value={dashboardSummary.totalReferrals.toString()}
                    />

                    <SummaryCard
                        label="Active Referrals"
                        value={dashboardSummary.activeReferrals.toString()}
                    />

                    <SummaryCard
                        label="Referrals Revenue"
                        value={`$${dashboardSummary.referralRevenue}`}
                        className="sm:col-span-2 lg:col-span-1"
                    />
                </section>

                {/* Tier progress */}
                <section className="mt-4 rounded-md bg-card p-4 sm:p-5">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                        <p className="shrink-0 text-sm font-medium text-zinc-400 sm:text-base">
                            Tier Progress: {remainingReferrals} Referrals to{" "}
                            {dashboardSummary.tierName} Status
                        </p>

                        <div className="flex flex-1 items-center gap-3 sm:gap-5">
                            <div
                                className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-400"
                                role="progressbar"
                                aria-label="Tier progress"
                                aria-valuemin={0}
                                aria-valuemax={dashboardSummary.tierTarget}
                                aria-valuenow={
                                    dashboardSummary.currentTierProgress
                                }
                            >
                                <div
                                    className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                                    style={{ width: `${tierProgress}%` }}
                                />
                            </div>

                            <span className="shrink-0 text-sm font-semibold text-white">
                                {dashboardSummary.currentTierProgress}/
                                {dashboardSummary.tierTarget}
                            </span>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:max-w-[690px]">
                        <ProgressCard
                            icon={<UserRoundPlus className="h-5 w-5" />}
                            title={`${dashboardSummary.monthlyReferrals} / ${dashboardSummary.monthlyReferralTarget} Referrals`}
                            description="New member signups this month"
                        />

                        <ProgressCard
                            icon={<FilePenLine className="h-5 w-5" />}
                            title={`${dashboardSummary.contentPosts} / ${dashboardSummary.contentPostTarget} Content Post`}
                            description="Technical gear reviews or reels"
                        />
                    </div>
                </section>

                {/* Existing DataTable */}
                <section className="mt-5 rounded-md bg-card p-3 sm:p-4">
                    <div className="mb-3 flex items-center justify-between gap-4">
                        <h2 className="text-base font-medium sm:text-lg">
                            Recent Referrals
                        </h2>

                        <Link
                            href="/partner/referrals"
                            className="shrink-0 text-xs font-medium text-yellow-400 transition-colors hover:text-yellow-300 sm:text-sm"
                        >
                            View All
                        </Link>
                    </div>

                    <div
                        className="
              overflow-x-auto
              rounded-md
              [&_table]:border-collapse
              [&_thead_tr]:border-none
              [&_th]:h-10
              [&_th]:px-4
              [&_th]:text-md
              [&_th]:font-normal
              sm:[&_th]:px-5
              [&_tbody_tr]:border-white/[0.06]
              [&_tbody_tr]:transition-colors
              [&_td]:px-4
              [&_td]:py-3.5
              sm:[&_td]:px-5
            "
                    >
                        <DataTable
                            data={recentReferrals}
                            columns={columns}
                            paginationMode="client"
                            searchMode="client"
                            total={recentReferrals.length}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};





export default PartnerDashboard;
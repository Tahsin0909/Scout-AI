"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { FilePenLine, UserRoundPlus } from "lucide-react";
import { referralData } from "../../data/dashboard";
import { ProgressCard } from "./ProgressCard";
import ReferralTable from "./ReferralTable";
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
                <ReferralTable referralData={referralData.slice(0, 5)} />
            </div>
        </main>
    );
};

export default PartnerDashboard;
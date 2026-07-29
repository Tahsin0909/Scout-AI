"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import {
    Check,
    Copy,
    Link2
} from "lucide-react";
import { useState } from "react";
import { referralData } from "../../data/dashboard";
import ReferralTable from "./ReferralTable";
import { SummaryCard } from "./SummaryCard";

const referralSummary = {
    totalClicks: 12482,
    totalSignups: 840,
    referralRevenue: 1025,

    currentTierProgress: 35,
    tierTarget: 40,
    tierName: "Elite",

    referralLink: "https://triptrax.co/partner/elite/jason-moore",
    referralCode: "25VB3A",
};



type CopiedItem = "link" | "code" | null;

const ReferralCenter = () => {
    const { profile } = useAuth();
    const [copiedItem, setCopiedItem] = useState<CopiedItem>(null);


    const remainingReferrals = Math.max(
        referralSummary.tierTarget -
        referralSummary.currentTierProgress,
        0,
    );

    const tierProgress = Math.min(
        (referralSummary.currentTierProgress /
            referralSummary.tierTarget) *
        100,
        100,
    );

    const referralLink =
        profile?.referralLink || referralSummary.referralLink;

    const referralCode =
        profile?.referralCode || referralSummary.referralCode;

    const copyToClipboard = async (
        value: string,
        item: Exclude<CopiedItem, null>,
    ) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiedItem(item);

            window.setTimeout(() => {
                setCopiedItem(null);
            }, 1500);
        } catch (error) {
            console.error("Unable to copy referral information:", error);
        }
    };

    return (
        <main className="container">
            <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* Page heading */}
                <header className="mb-5 sm:mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[32px]">
                        Referral Center
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                        Manage your referral links, track conversions, and monitor
                        your referral earnings.
                    </p>
                </header>

                {/* Summary cards */}
                <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <SummaryCard
                        label="Total Click"
                        value={referralSummary.totalClicks.toLocaleString("en-US")}
                    />

                    <SummaryCard
                        label="Total Signups"
                        value={referralSummary.totalSignups.toLocaleString("en-US")}
                    />

                    <SummaryCard
                        label="Referrals Revenue"
                        value={`$${referralSummary.referralRevenue}`}
                        className="sm:col-span-2 lg:col-span-1"
                    />
                </section>

                {/* Toolkit and progress */}
                <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Referral toolkit */}
                    <div className="rounded-md bg-card p-4 sm:p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <Link2 className="h-4 w-4" />

                            <h2 className="text-sm font-semibold sm:text-base">
                                Your Toolkit
                            </h2>
                        </div>

                        <div>
                            <p className="mb-2 text-sm font-medium text-blue-500">
                                Unique Referral Link
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <div className="flex h-10 min-w-0 flex-1 items-center gap-3 rounded-xl bg-muted/50 px-4">
                                    <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
                                        {referralLink}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            copyToClipboard(referralLink, "link")
                                        }
                                        className="shrink-0 text-yellow-400 transition-colors hover:text-yellow-300"
                                        aria-label="Copy referral link"
                                    >
                                        {copiedItem === "link" ? (
                                            <Check className="h-4 w-4" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>

                                <Button
                                    type="button"
                                    onClick={() =>
                                        copyToClipboard(referralLink, "link")
                                    }
                                    className="h-10 bg-[#FFD43B] px-5 font-medium text-black hover:bg-[#FFD43B]/90"
                                >
                                    {copiedItem === "link" ? "Copied" : "Copy"}
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="mb-2 text-sm font-medium text-blue-500">
                                Referral Code
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 min-w-[116px] items-center justify-center rounded-xl bg-muted/50 px-5">
                                    <span className="text-sm font-semibold tracking-[0.35em]">
                                        {referralCode}
                                    </span>
                                </div>

                                <Button
                                    type="button"
                                    size="icon"
                                    onClick={() =>
                                        copyToClipboard(referralCode, "code")
                                    }
                                    className="h-10 w-12 bg-[#FFD43B] text-black hover:bg-[#FFD43B]/90"
                                    aria-label="Copy referral code"
                                >
                                    {copiedItem === "code" ? (
                                        <Check className="h-4 w-4" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Tier progress */}
                    <div className="rounded-md bg-card p-4 sm:p-5">
                        <p className="text-sm font-medium text-muted-foreground sm:text-lg">
                            Tier Progress: {remainingReferrals} Referrals to{" "}
                            {referralSummary.tierName} Status
                        </p>

                        <div
                            className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-400"
                            role="progressbar"
                            aria-label="Tier progress"
                            aria-valuemin={0}
                            aria-valuemax={referralSummary.tierTarget}
                            aria-valuenow={
                                referralSummary.currentTierProgress
                            }
                        >
                            <div
                                className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                                style={{ width: `${tierProgress}%` }}
                            />
                        </div>

                        <p className="mt-6 text-base font-semibold">
                            {referralSummary.currentTierProgress}/
                            {referralSummary.tierTarget}
                        </p>
                    </div>

                </section>
                <ReferralTable referralData={referralData} />
            </div>
        </main>
    );
};

export default ReferralCenter;
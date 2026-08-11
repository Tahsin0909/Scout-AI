"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { IPartnerContent, PartnerDetailsTab } from "@/features/partnership/partnership.interface";
import PartnerDetailsHeader from "@/features/partnership/components/PartnerHeader";
import { partnerDetails } from "@/features/partnership/data/adminPartner.data";
import PartnerPerformance from "@/features/partnership/components/PartnerPerformance";
import { conversionMetrics, referralFlow } from "@/features/metricksandcharts/data/partnerMetrics.data";
import PartnerContent from "@/features/partnership/components/PartnerContent";


export const partnerContent: IPartnerContent[] = [
    {
        id: "content-1",
        platform: "Facebook",
        postLink: "https://facebook.com/post/123",
        status: "inactive",
    },
    {
        id: "content-2",
        platform: "Instagram",
        postLink: "https://instagram.com/p/123",
        status: "active",
    },
];

const AdminPartnerDetails = () => {
    const [activeTab, setActiveTab] =
        useState<PartnerDetailsTab>("performance");

    return (
        <div className="w-full space-y-5">
            <PartnerDetailsHeader
                partner={partnerDetails}
            />

            {/* Tabs */}
            <div className="grid grid-cols-2 gap-4">
                <button type="button" onClick={() => setActiveTab("performance")} className={cn("rounded-full border px-4 py-3 text-sm font-medium transition-all", activeTab === "performance" ? "border-neutral-300 bg-neutral-200 text-neutral-950 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-white" : "border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white")}>
                    Performance
                </button>

                <button type="button" onClick={() => setActiveTab("content")} className={cn("rounded-full border px-4 py-3 text-sm font-medium transition-all", activeTab === "content" ? "border-neutral-300 bg-neutral-200 text-neutral-950 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-white" : "border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white")}>
                    Content
                </button>
            </div>

            {activeTab === "performance" && (
                <PartnerPerformance
                    partner={partnerDetails}
                    referralFlow={referralFlow}
                    conversionMetrics={conversionMetrics}
                />
            )}

            {activeTab === "content" && (
                <PartnerContent
                    content={partnerContent}
                />
            )}
        </div>
    );
};

export default AdminPartnerDetails;
"use client"
import { IConversionMetric, IReferralChartData } from "@/features/partnership/partnership.interface";
import DistributionPieChart from "./DistributionPieChart";
import RevenueBarChart from "./RevenueBarChart";


interface PartnerPerformanceProps {
    referralFlow: IReferralChartData[];
    conversionMetrics: IConversionMetric[];
}

const AdminPartnerMetrics = ({ conversionMetrics, referralFlow }: PartnerPerformanceProps) => {
    return (
        <div className="grid gap-5 xl:grid-cols-[2fr_0.9fr]">
            {/* Charts */}
            <RevenueBarChart
                title="Revenue Breakdown"
                amount="$18,420"
                change="+8.5% this month"
                data={referralFlow}
                defaultRange="30d"
                onRangeChange={() => { }}
            />

            <DistributionPieChart
                title="Membership Distribution"
                description="Current members by subscription tier."
                total="2,486"
                totalLabel="Members"
                data={conversionMetrics}
            />
        </div>
    );
};

export default AdminPartnerMetrics;
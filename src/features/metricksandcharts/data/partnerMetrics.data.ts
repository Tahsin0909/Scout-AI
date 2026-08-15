import { IConversionMetric, IReferralChartData } from "@/features/partnership/partnership.interface";

export const referralFlow: IReferralChartData[] = [
    {
        label: "Jan",
        value: 15,
    },
    {
        label: "Feb",
        value: 42,
    },
    {
        label: "Mar",
        value: 25,
    },
    {
        label: "Apr",
        value: 60,
    },
    {
        label: "May",
        value: 75,
    },
    {
        label: "Jun",
        value: 90,
    },
    {
        label: "Jul",
        value: 82,
        isCurrent: true,
        tooltip: "This month: 82",
    },
    {
        label: "Aug",
        value: 55,
    },
    {
        label: "Sep",
        value: 72,
    },
    {
        label: "Oct",
        value: 45,
    },
    {
        label: "Nov",
        value: 50,
    },
    {
        label: "Dec",
        value: 68,
    },
];

export const conversionMetrics: IConversionMetric[] = [
    {
        type: "click-through",
        label: "Click-through Rate",
        value: 48,
        percentage: 42,
        color: "#2dd4bf",
    },
    {
        type: "lead-to-sale",
        label: "Lead to Sale",
        value: 30,
        percentage: 42,
        color: "#a3e635",
    },
    {
        type: "retention",
        label: "Retention Rate",
        value: 22,
        percentage: 42,
        color: "#facc15",
    },
];

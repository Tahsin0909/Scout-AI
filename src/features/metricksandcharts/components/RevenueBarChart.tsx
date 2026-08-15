"use client";

import React, { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { BarChartData, TimeRange } from "../metricksandcharts.interface";

interface RevenueBarChartProps {
    title?: string;
    amount?: string;
    change?: string;
    description?: string;
    data: BarChartData[];
    defaultRange?: TimeRange;
    onRangeChange?: (range: TimeRange) => void;
}

const ranges: {
    value: TimeRange;
    label: string;
}[] = [
        {
            value: "7d",
            label: "7 Days",
        },
        {
            value: "30d",
            label: "30 Days",
        },
        {
            value: "12m",
            label: "12 Months",
        },
    ];

export default function RevenueBarChart({
    title = "Revenue Breakdown",
    amount,
    change,
    description,
    data,
    defaultRange = "30d",
    onRangeChange,
}: RevenueBarChartProps) {
    const [activeRange, setActiveRange] = useState<TimeRange>(defaultRange);

    const maxValue = useMemo(() => {
        if (!data.length) {
            return 1;
        }

        return Math.max(...data.map((item) => item.value));
    }, [data]);

    const handleRangeChange = (range: TimeRange) => {
        setActiveRange(range);
        onRangeChange?.(range);
    };

    return (
        <Card className="overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm dark:shadow-none">
            <CardContent className="p-5 sm:p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
                                <TrendingUp className="h-4 w-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {title}
                                </p>

                                {description && (
                                    <p className="mt-0.5 text-xs text-muted-foreground">
                                        {description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {(amount || change) && (
                            <div className="mt-4 flex flex-wrap items-end gap-2">
                                {amount && (
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                        {amount}
                                    </h3>
                                )}

                                {change && (
                                    <span className="mb-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                        {change}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Range Selector */}
                    <div className="flex self-start rounded-xl border border-border bg-muted/40 p-1">
                        {ranges.map((range) => (
                            <button
                                key={range.value}
                                type="button"
                                onClick={() => handleRangeChange(range.value)}
                                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${activeRange === range.value ? "bg-background text-foreground shadow-sm ring-1 ring-border" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chart */}
                <div className="mt-8">
                    <div className="relative h-[290px]">
                        {/* Grid */}
                        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-7">
                            {["50k", "40k", "30k", "20k", "10k", "0"].map((label) => (
                                <div key={label} className="flex items-center text-[10px] text-muted-foreground">
                                    <span className="w-8 shrink-0">
                                        {label}
                                    </span>

                                    <div className="ml-2 w-full border-t border-dashed border-border/70" />
                                </div>
                            ))}
                        </div>

                        {/* Bars */}
                        <div className="absolute inset-0 flex items-end gap-1 pb-7 pl-10 sm:gap-2">
                            {data.map((item) => {
                                const heightPercentage = (item.value / maxValue) * 82;

                                return (
                                    <div key={item.label} className="group relative flex h-full flex-1 items-end justify-center">
                                        {item.isCurrent && item.tooltip && (
                                            <div className="absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap" style={{ bottom: `calc(${heightPercentage}% + 36px)` }}>
                                                <div className="rounded-lg border border-border bg-popover px-2.5 py-1.5 text-[10px] font-semibold text-popover-foreground shadow-lg">
                                                    {item.tooltip}
                                                </div>
                                            </div>
                                        )}

                                        <div style={{ height: `${heightPercentage}%` }} className={`w-full max-w-7 rounded-t-md transition-all duration-300 ${item.isCurrent ? "bg-amber-400 hover:bg-amber-500" : "bg-muted-foreground/20 group-hover:bg-muted-foreground/35 dark:bg-muted-foreground/25"}`} />

                                        <span className="absolute -bottom-1 translate-y-full text-[10px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
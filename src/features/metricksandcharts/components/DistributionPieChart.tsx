"use client";

import React, { useMemo } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { DistributionData } from "../metricksandcharts.interface";

interface DistributionPieChartProps {
    title: string;
    description?: string;
    total: number | string;
    totalLabel?: string;
    data: DistributionData[];
}

const RADIUS = 62;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function DistributionPieChart({
    title,
    description,
    total,
    totalLabel = "Total",
    data,
}: DistributionPieChartProps) {
    const segments = useMemo(() => {
        let offset = 0;

        return data.map((item) => {
            const length = (item.percentage / 100) * CIRCUMFERENCE;

            const segment = {
                ...item,
                dashArray: `${length} ${CIRCUMFERENCE}`,
                dashOffset: -offset,
            };

            offset += length;

            return segment;
        });
    }, [data]);

    return (
        <Card className="overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm dark:shadow-none">
            <CardContent className="flex h-full flex-col p-5 sm:p-6">
                {/* Header */}
                <div>
                    <h3 className="text-base font-bold text-foreground">
                        {title}
                    </h3>

                    {description && (
                        <p className="mt-1 text-xs text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>

                {/* Donut */}
                <div className="relative flex flex-1 items-center justify-center py-7">
                    <svg viewBox="0 0 160 160" className="h-48 w-48 -rotate-90 transform">
                        {/* Background ring */}
                        <circle cx="80" cy="80" r={RADIUS} fill="transparent" stroke="currentColor" strokeWidth="14" className="text-muted" />

                        {/* Dynamic segments */}
                        {segments.map((item) => (
                            <circle
                                key={item.label}
                                cx="80"
                                cy="80"
                                r={RADIUS}
                                fill="transparent"
                                stroke={item.color}
                                strokeWidth="14"
                                strokeDasharray={item.dashArray}
                                strokeDashoffset={item.dashOffset}
                                strokeLinecap="round"
                                className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
                            />
                        ))}
                    </svg>

                    {/* Center */}
                    <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-bold tracking-tight text-foreground">
                            {total}
                        </span>

                        <span className="mt-1 text-xs text-muted-foreground">
                            {totalLabel}
                        </span>
                    </div>
                </div>

                {/* Legend */}
                <div className="space-y-3">
                    {data.map((item) => (
                        <div key={item.label} className="flex items-center justify-between rounded-lg px-1 py-1">
                            <div className="flex items-center gap-2.5">
                                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />

                                <span className="text-sm font-medium text-muted-foreground">
                                    {item.label}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                    {item.percentage}%
                                </span>

                                <span className="min-w-10 text-right text-sm font-semibold text-foreground">
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
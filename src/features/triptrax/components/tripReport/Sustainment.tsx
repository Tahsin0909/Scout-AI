import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Fuel, Utensils } from "lucide-react";

import { ITripReport } from "../../triptrax.interface";

export const Sustainment = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
                Sustainment
            </h2>

            <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
                {/* Food / Water / Fuel */}
                <Card className="border-border bg-card shadow-sm">
                    <CardContent className="p-5">
                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-6 border-b border-border pb-4 text-sm">
                            <span className="flex items-center gap-2 font-semibold text-foreground">
                                <Utensils className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                Food
                            </span>

                            <span className="flex items-center gap-2 text-muted-foreground">
                                <Droplets className="h-4 w-4" />
                                Water
                            </span>

                            <span className="flex items-center gap-2 text-muted-foreground">
                                <Fuel className="h-4 w-4" />
                                Fuel
                            </span>
                        </div>

                        {/* Day Tabs */}
                        <div className="mt-4 flex gap-7 overflow-x-auto border-b border-border text-xs">
                            <span className="shrink-0 border-b-2 border-blue-600 pb-3 font-semibold text-blue-600 dark:border-blue-400 dark:text-blue-400">
                                DAY 01
                            </span>

                            <span className="shrink-0 pb-3 text-muted-foreground">
                                DAY 02
                            </span>

                            <span className="shrink-0 pb-3 text-muted-foreground">
                                DAY 03
                            </span>
                        </div>

                        {/* Meals */}
                        <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                            {trip.sustainment.meals.map((meal) => (
                                <div key={meal.type} className="rounded-md border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50">
                                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                                        {meal.type}
                                    </p>

                                    <p className="mt-4 text-sm font-semibold text-foreground">
                                        {meal.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Hydration Safety */}
                <Card className="overflow-hidden border-blue-200 bg-blue-50 text-blue-950 shadow-sm dark:border-blue-500/20 dark:bg-blue-600 dark:text-white">
                    <CardContent className="p-6">
                        <h3 className="flex items-center gap-2 text-base font-semibold">
                            <Droplets className="h-5 w-5 text-blue-600 dark:text-white" />
                            Hydration Safety
                        </h3>

                        <div className="mt-8 flex items-center justify-between gap-4 text-xs">
                            <span className="text-blue-700 dark:text-blue-100">
                                Est. Water Requirement
                            </span>

                            <span className="font-semibold text-blue-950 dark:text-white">
                                {trip.sustainment.waterPerDay}
                            </span>
                        </div>

                        {/* Safety Note */}
                        <div className="mt-5 rounded-md border border-blue-200 bg-blue-100/70 p-3 text-[10px] leading-4 text-blue-800 dark:border-blue-400/20 dark:bg-blue-500/40 dark:text-blue-50">
                            <strong>Note:</strong> {trip.sustainment.note}
                        </div>

                        {/* Reservoir Progress */}
                        <div className="mt-7">
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <span className="text-xs text-blue-700 dark:text-blue-100">
                                    Reservoir
                                </span>

                                <span className="text-xs font-semibold text-blue-950 dark:text-white">
                                    {trip.sustainment.reservoir}%
                                </span>
                            </div>

                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-200 dark:bg-blue-400/50">
                                <div className="h-full rounded-full bg-blue-600 transition-all duration-500 dark:bg-white" style={{ width: `${Math.min(Math.max(trip.sustainment.reservoir, 0), 100)}%` }} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
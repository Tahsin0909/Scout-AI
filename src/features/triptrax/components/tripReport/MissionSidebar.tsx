import UnderConstruction from "@/components/others-state/underConstruction";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Star, Zap } from "lucide-react";

import { ITripReport } from "../../triptrax.interface";

export const MissionSidebar = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <div className="space-y-5">
            {/* Mission Alerts */}
            <Card className="border-border bg-card shadow-sm">
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 text-lg font-semibold text-foreground">
                        Mission Alerts
                    </h2>

                    <div className="mt-2 divide-y divide-border">
                        {trip.missionAlerts.map((alert) => (
                            <div key={alert.title} className="flex gap-3 py-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                                    <Zap className="h-4 w-4" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-foreground">
                                        {alert.title}
                                    </p>

                                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                                        {alert.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="border-border bg-card shadow-sm">
                <CardContent className="space-y-3 p-4">
                    {/* Best Summit Day */}
                    <div className="flex gap-3 rounded-md border border-border bg-muted/40 p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                            <Star className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground">
                                Best Summit Day
                            </p>

                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                {trip.highlights.bestSummitDay}
                            </p>
                        </div>
                    </div>

                    {/* Storm Alert */}
                    <div className="flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                            <AlertTriangle className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                                Storm Alert
                            </p>

                            <p className="mt-1 text-xs leading-5 text-red-600/80 dark:text-red-300/70">
                                {trip.highlights.stormAlert}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Mileage */}
            <Card data-pdf-block className="border-border bg-card shadow-sm">
                <CardContent className="p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        Total Miles
                    </p>

                    <p className="mt-2 text-4xl font-semibold text-foreground">
                        {trip.mileage.total}
                    </p>

                    <div className="mt-7 space-y-4">
                        <div className="flex items-center justify-between border-b border-border pb-3 text-xs">
                            <span className="text-muted-foreground">
                                Off-road Miles
                            </span>

                            <span className="font-semibold text-foreground">
                                {trip.mileage.offRoad} mi
                            </span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                                Est. Drive Time
                            </span>

                            <span className="font-semibold text-foreground">
                                {trip.mileage.driveTime}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Map */}
            <Card data-pdf-block className="min-h-[220px] overflow-hidden border-border bg-card shadow-sm">
                <UnderConstruction name="Map" type="server" />
            </Card>
        </div>
    );
};
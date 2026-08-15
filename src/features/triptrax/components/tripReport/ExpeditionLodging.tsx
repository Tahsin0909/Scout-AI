import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain } from "lucide-react";

import { ITripReport } from "../../triptrax.interface";

export const ExpeditionLodging = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
                Expedition Lodging
            </h2>

            <div className="space-y-4">
                {trip.lodging.map((lodging) => (
                    <Card key={lodging.id} className="border-border bg-card shadow-sm transition-colors hover:bg-muted/20">
                        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                            {/* Image Placeholder */}
                            <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-amber-200 via-muted to-muted-foreground/30 dark:from-amber-900/70 dark:via-neutral-700 dark:to-neutral-900 sm:w-44">
                                <Mountain className="h-10 w-10 text-foreground/60 dark:text-white/70" />
                            </div>

                            {/* Lodging Information */}
                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                                    {lodging.nights}
                                </p>

                                <h3 className="mt-1 font-semibold text-foreground">
                                    {lodging.title}
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                                    {lodging.description}
                                </p>
                            </div>

                            {/* Status & Action */}
                            <div className="flex shrink-0 flex-row items-center justify-between gap-3 sm:flex-col sm:items-end">
                                <span className={`rounded-md border px-2.5 py-1 text-[10px] font-semibold ${lodging.status === "available" ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400" : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400"}`}>
                                    {lodging.status === "available" ? "Available" : "Limited"}
                                </span>

                                <Button variant="secondary" className="border border-border bg-foreground text-background hover:bg-foreground/90">
                                    Reserve
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
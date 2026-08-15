import { Card } from "@/components/ui/card";
import { ITripReport } from "../../triptrax.interface";
import { CarFront, Check } from "lucide-react";

export const GearOptimization = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
                Gear Optimization
            </h2>

            <Card className="overflow-hidden border-border bg-card">
                <div className="grid md:grid-cols-[170px_1fr] xl:grid-cols-[170px_1fr_1.5fr]">
                    {/* Readiness */}
                    <div className="flex flex-col items-center justify-center border-b border-border bg-muted/40 p-7 text-foreground md:border-b-0 md:border-r">
                        <span className="text-5xl font-semibold">
                            {trip.gear.readiness}%
                        </span>

                        <span className="mt-2 text-xs text-muted-foreground">
                            READY
                        </span>

                        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-muted">
                            <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${trip.gear.readiness}%` }} />
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="border-b border-border p-5 xl:border-b-0 xl:border-r">
                        <h3 className="mb-4 font-semibold text-foreground">
                            Checklist
                        </h3>

                        <div className="space-y-3">
                            {trip.gear.checklist.map((item) => (
                                <div key={item.title} className={`flex items-center gap-3 rounded-md border p-3 text-xs transition-colors ${item.danger ? "border-red-200 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400" : "border-border bg-muted/40 text-foreground"}`}>
                                    <span className={`flex h-4 w-4 shrink-0 items-center justify-center border ${item.completed ? "border-blue-600 bg-blue-600 text-white" : "border-muted-foreground/50 bg-background"}`}>
                                        {item.completed ? (
                                            <Check className="h-3 w-3" />
                                        ) : null}
                                    </span>

                                    <span>
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vehicle Spec */}
                    <div className="p-5">
                        <h3 className="flex items-center gap-2 font-semibold text-foreground">
                            <CarFront className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            Vehicle Spec
                        </h3>

                        <p className="mt-5 text-xs leading-5 text-muted-foreground">
                            {trip.gear.vehicleDescription}
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4">
                            <div className="rounded-md border border-border bg-muted/40 p-3 text-center">
                                <p className="text-[9px] text-muted-foreground">
                                    TIRES
                                </p>

                                <p className="mt-1 text-xs font-semibold text-foreground">
                                    {trip.gear.tires}
                                </p>
                            </div>

                            <div className="rounded-md border border-border bg-muted/40 p-3 text-center">
                                <p className="text-[9px] text-muted-foreground">
                                    RECOVERY
                                </p>

                                <p className="mt-1 text-xs font-semibold text-foreground">
                                    {trip.gear.recovery}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
};
import { Card, CardContent } from "@/components/ui/card";
import { ITripReport } from "../../triptrax.interface";

export const RouteNavigation = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <section>
            <h2 className="mb-4 text-lg font-semibold">
                Route Navigation
            </h2>

            <Card className="bg-card darK:bg-[#0b0b0b]">
                <CardContent className="p-5">
                    <div className="relative space-y-8">
                        <div className="absolute bottom-4 left-[9px] top-4 w-px bg-neutral-600" />

                        {trip.route.map((stop, index) => (
                            <div key={stop.name} className="relative flex gap-4">
                                <span className={`relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-2 ${stop.danger ? "border-red-500 bg-red-500" : index === 0 || index === trip.route.length - 1 ? "border-blue-500 bg-blue-600" : "border-neutral-500 bg-neutral-500"}`} />

                                <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                                    <div>
                                        <p className={`font-semibold ${stop.danger ? "text-red-500" : ""}`}>
                                            {stop.name}
                                        </p>

                                        <p className="mt-1 text-[10px] text-neutral-500">
                                            {stop.coordinate} • Elev: {stop.elevation}
                                        </p>
                                    </div>

                                    <span className={`shrink-0 rounded px-2 py-1 text-[8px] font-semibold ${stop.danger ? "bg-red-600 text-white" : "bg-neutral-800 text-neutral-300"}`}>
                                        {stop.badge}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};
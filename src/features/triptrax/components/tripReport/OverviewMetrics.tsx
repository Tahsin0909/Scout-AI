import { Card, CardContent } from "@/components/ui/card";
import { ITripReport } from "../../triptrax.interface";

export const OverviewMetrics = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    const metrics = [
        {
            title: "Duration",
            value: trip.overview.duration,
        },
        {
            title: "Distance",
            value: trip.overview.distance,
        },
        {
            title: "Difficulty",
            value: trip.overview.difficulty,
        },
        {
            title: "Risk",
            value: trip.overview.risk,
        },
        {
            title: "MAX ELEV",
            value: trip.overview.maxElevation,
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {metrics.map((metric) => (
                <Card key={metric.title} className="rounded-md bg-card shadow-none">
                    <CardContent className="p-4">
                        <p className="font-bold uppercase tracking-wide ">
                            {metric.title}
                        </p>

                        <p className="mt-2 text-sm text-neutral-500">
                            {metric.value}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

import { Card, CardContent } from "@/components/ui/card";
import { ITripReport } from "../../triptrax.interface";
import { Star } from "lucide-react";

export const IntelBriefing = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <Card className="border-none bg-neutral-200 text-neutral-900">
            <CardContent className="p-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                        <Star className="h-4 w-4" />
                    </div>

                    <h2 className="text-sm font-semibold">
                        Intel Briefing Summary
                    </h2>
                </div>

                <p className="mt-4 text-sm font-semibold">
                    Tactical Terrain Classification: {trip.briefing.classification}
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {trip.briefing.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {trip.briefing.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs text-neutral-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
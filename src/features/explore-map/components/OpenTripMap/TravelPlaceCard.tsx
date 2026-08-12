import {
    ChevronDown,
    ChevronUp,
    Loader2,
    MapPin
} from "lucide-react";
import { useState } from "react";
import { TravelPlace, TravelPlaceDetails } from "../../explore-map.interface";
import { TravelPlaceDetailsContent } from "./TravelPlaceDetailsContent";

export function TravelPlaceCard({
    place,
}: {
    place: TravelPlace;
}) {
    const [expanded, setExpanded] = useState(false);
    const [details, setDetails] = useState<TravelPlaceDetails | null>(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [detailsError, setDetailsError] = useState("");

    const toggleDetails = async () => {
        if (expanded) {
            setExpanded(false);
            return;
        }

        setExpanded(true);

        if (details) {
            return;
        }

        try {
            setDetailsLoading(true);
            setDetailsError("");

            const response = await fetch(`/api/travel-places/${place.xid}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to load place details.");
            }

            setDetails(data.place);
        } catch (error) {
            setDetailsError(error instanceof Error ? error.message : "Failed to load details.");
        } finally {
            setDetailsLoading(false);
        }
    };

    return (
        <article className="group overflow-hidden rounded-[26px] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/70">
            <div className="p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
                        <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>

                    {place.dist !== undefined && (
                        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600">
                            {formatDistance(place.dist)}
                        </span>
                    )}
                </div>

                <h3 className="line-clamp-2 text-xl font-bold tracking-tight text-zinc-950">
                    {place.name || "Unnamed Place"}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">
                    {formatKinds(place.kinds)}
                </p>

                <div className="mt-5 flex items-center justify-between">
                    {place.rate !== undefined ? (
                        <span className="rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                            Popularity {place.rate}
                        </span>
                    ) : (
                        <span />
                    )}

                    <button onClick={toggleDetails} className="flex items-center gap-1.5 text-sm font-semibold text-zinc-800 transition hover:text-emerald-600">
                        {expanded ? "Hide details" : "View details"}
                        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {expanded && (
                <div className="border-t border-zinc-100 bg-zinc-50/70">
                    {detailsLoading && (
                        <div className="flex h-52 items-center justify-center">
                            <Loader2 className="h-6 w-6 animate-spin text-emerald-600" />
                        </div>
                    )}

                    {detailsError && (
                        <div className="p-5">
                            <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                                {detailsError}
                            </div>
                        </div>
                    )}

                    {!detailsLoading && !detailsError && details && (
                        <TravelPlaceDetailsContent details={details} fallbackPlace={place} />
                    )}
                </div>
            )}
        </article>
    );
}

function formatDistance(distance?: number) {
    if (distance === undefined) {
        return "";
    }

    if (distance < 1000) {
        return `${Math.round(distance)} m away`;
    }

    return `${(distance / 1000).toFixed(1)} km away`;
}



function formatKinds(kinds?: string) {
    if (!kinds) {
        return "Travel place";
    }

    return kinds
        .split(",")
        .slice(0, 3)
        .map((kind) =>
            kind
                .replaceAll("_", " ")
                .replace(/\b\w/g, (character) => character.toUpperCase())
        )
        .join(" • ");
}
import {
    ChevronDown,
    ChevronUp,
    Loader2,
    MapPin,
} from "lucide-react";

import {
    TravelPlace,
    TravelPlaceDetails,
} from "../../explore-map.interface";

import { TravelPlaceDetailsContent } from "./TravelPlaceDetailsContent";

export interface TravelPlaceCardProps {
    place: TravelPlace;
    expandedId: string | null;
    details: TravelPlaceDetails | null;
    detailsLoading: boolean;
    detailsError: string;
    onToggleDetails: (place: TravelPlace) => void;
}

export function TravelPlaceCard({
    place,
    expandedId,
    details,
    detailsLoading,
    detailsError,
    onToggleDetails,
}: TravelPlaceCardProps) {
    const isExpanded = expandedId === place.xid;

    return (
        <article
            className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isExpanded
                    ? "border-white/20 bg-black/55 shadow-lg shadow-black/20 backdrop-blur-xl"
                    : "border-white/10 bg-black/35 backdrop-blur-md hover:border-white/20 hover:bg-black/45"
                }`}
        >
            <button
                type="button"
                onClick={() => onToggleDetails(place)}
                className="w-full p-3 text-left"
            >
                <div className="flex items-start gap-3">
                    <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${isExpanded
                                ? "border-yellow-400/30 bg-yellow-400/10"
                                : "border-white/10 bg-white/5"
                            }`}
                    >
                        <MapPin
                            className={`h-4 w-4 ${isExpanded
                                    ? "text-yellow-400"
                                    : "text-white/70"
                                }`}
                        />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-white">
                                {place.name || "Unnamed Place"}
                            </h3>

                            {place.dist !== undefined && (
                                <span className="shrink-0 rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] font-medium text-white/70">
                                    {formatDistance(place.dist)}
                                </span>
                            )}
                        </div>

                        <p className="mt-1 line-clamp-1 text-[11px] leading-4 text-white/50">
                            {formatKinds(place.kinds)}
                        </p>

                        <div className="mt-3 flex items-center justify-between gap-2">
                            {place.rate !== undefined ? (
                                <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/60">
                                    Popularity {place.rate}
                                </span>
                            ) : (
                                <span />
                            )}

                            <span
                                className={`flex items-center gap-1 text-[11px] font-medium transition-colors ${isExpanded
                                        ? "text-yellow-400"
                                        : "text-white/60"
                                    }`}
                            >
                                {isExpanded ? "Hide" : "Details"}

                                {isExpanded ? (
                                    <ChevronUp className="h-3.5 w-3.5" />
                                ) : (
                                    <ChevronDown className="h-3.5 w-3.5" />
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </button>

            {isExpanded && (
                <div className="border-t border-white/10 bg-black/20">
                    {detailsLoading && (
                        <div className="flex h-24 items-center justify-center">
                            <Loader2 className="h-4 w-4 animate-spin text-white/60" />
                        </div>
                    )}

                    {detailsError && (
                        <div className="p-3">
                            <div className="rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-[11px] text-red-300">
                                {detailsError}
                            </div>
                        </div>
                    )}

                    {!detailsLoading &&
                        !detailsError &&
                        details && (
                            <TravelPlaceDetailsContent
                                details={details}
                                fallbackPlace={place}
                            />
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
        return `${Math.round(distance)} m`;
    }

    return `${(distance / 1000).toFixed(1)} km`;
}

function formatKinds(kinds?: string) {
    if (!kinds) {
        return "Travel place";
    }

    return kinds
        .split(",")
        .slice(0, 2)
        .map((kind) =>
            kind
                .replaceAll("_", " ")
                .replace(
                    /\b\w/g,
                    (character) =>
                        character.toUpperCase()
                )
        )
        .join(" • ");
}
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
    expandedId: string;
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
    return (
        <article className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:bg-muted/30">
            <div className="p-3">
                <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <MapPin className="h-4 w-4 text-primary" />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-foreground">
                                {place.name || "Unnamed Place"}
                            </h3>

                            {place.dist !== undefined && (
                                <span className="shrink-0 rounded-md bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground">
                                    {formatDistance(place.dist)}
                                </span>
                            )}
                        </div>

                        <p className="mt-1 line-clamp-1 text-[11px] leading-4 text-muted-foreground">
                            {formatKinds(place.kinds)}
                        </p>

                        <div className="mt-3 flex items-center justify-between gap-2">
                            {place.rate !== undefined ? (
                                <span className="rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground">
                                    Popularity {place.rate}
                                </span>
                            ) : (
                                <span />
                            )}

                            <button
                                type="button"
                                onClick={() =>
                                    onToggleDetails(place)
                                }
                                className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {expandedId == place.xid
                                    ? "Hide"
                                    : "Details"}

                                {expandedId == place.xid ? (
                                    <ChevronUp className="h-3.5 w-3.5" />
                                ) : (
                                    <ChevronDown className="h-3.5 w-3.5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {expandedId == place.xid && (
                <div className="border-t border-border bg-muted/20">
                    {detailsLoading && (
                        <div className="flex h-24 items-center justify-center">
                            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        </div>
                    )}

                    {detailsError && (
                        <div className="p-3">
                            <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2 text-[11px] text-destructive">
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

function formatDistance(
    distance?: number
) {
    if (distance === undefined) {
        return "";
    }

    if (distance < 1000) {
        return `${Math.round(
            distance
        )} m`;
    }

    return `${(
        distance / 1000
    ).toFixed(1)} km`;
}

function formatKinds(
    kinds?: string
) {
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
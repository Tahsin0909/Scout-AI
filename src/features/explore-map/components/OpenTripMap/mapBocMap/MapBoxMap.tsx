/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import "mapbox-gl/dist/mapbox-gl.css";

import Map, {
    Layer,
    Marker,
    NavigationControl,
    Popup,
    Source,
} from "react-map-gl";

import type { LayerProps } from "react-map-gl";

import {
    ExternalLink,
    ImageOff,
    MapPin,
    Navigation,
    Star,
} from "lucide-react";

import {
    TravelPlace,
    TravelPlaceDetails,
} from "@/features/explore-map/explore-map.interface";

import {
    DEFAULT_VIEW,
    hasMapboxToken,
    MAP_STYLE,
    MAPBOX_TOKEN,
} from "./lib/mapbox";

import { MapTokenNotice } from "./MapTokenNotice";

const routeLineLayer: LayerProps = {
    id: "route-line",
    type: "line",
    paint: {
        "line-color": "hsl(var(--primary))",
        "line-width": 3,
        "line-opacity": 0.75,
        "line-dasharray": [1.2, 1.8],
    },
    layout: {
        "line-cap": "round",
        "line-join": "round",
    },
};

interface Props {
    travelPlace: TravelPlace[] | null;
    onToggleDetails: (
        travelPlace: TravelPlace | null
    ) => Promise<void>;
    placesDetails: TravelPlaceDetails | null;
}

export function ExploreOpenTripMap({
    travelPlace,
    placesDetails,
    onToggleDetails,
}: Props) {
    const routeGeoJSON =
        travelPlace &&
            travelPlace.length >= 2
            ? {
                type: "Feature" as const,
                properties: {},
                geometry: {
                    type: "LineString" as const,
                    coordinates:
                        travelPlace.map(
                            (place) => [
                                Number(
                                    place
                                        .point
                                        .lon
                                ),
                                Number(
                                    place
                                        .point
                                        .lat
                                ),
                            ]
                        ),
                },
            }
            : null;

    if (!hasMapboxToken()) {
        return <MapTokenNotice />;
    }

    return (
        <div className="relative h-full w-full overflow-hidden bg-background">
            <Map
                mapboxAccessToken={
                    MAPBOX_TOKEN
                }
                initialViewState={
                    DEFAULT_VIEW
                }
                mapStyle={MAP_STYLE}
                projection={{
                    name: "globe",
                }}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                reuseMaps
            >
                <NavigationControl
                    position="top-right"
                    showCompass={false}
                    visualizePitch
                />

                {routeGeoJSON && (
                    <Source
                        id="route"
                        type="geojson"
                        data={
                            routeGeoJSON
                        }
                    >
                        <Layer
                            {...routeLineLayer}
                        />
                    </Source>
                )}

                {travelPlace?.map(
                    (place) => {
                        const isActive =
                            placesDetails?.xid ===
                            place.xid;

                        return (
                            <Marker
                                key={
                                    place.xid
                                }
                                longitude={
                                    place
                                        .point
                                        .lon
                                }
                                latitude={
                                    place
                                        .point
                                        .lat
                                }
                                anchor="bottom"
                                onClick={(
                                    event: any
                                ) => {
                                    event.originalEvent.stopPropagation();

                                    onToggleDetails(
                                        place
                                    );
                                }}
                            >
                                <button
                                    type="button"
                                    aria-label={
                                        place.name
                                    }
                                    className="group relative flex h-9 w-9 items-center justify-center"
                                >
                                    {isActive && (
                                        <span className="absolute h-9 w-9 animate-ping rounded-full bg-primary/20" />
                                    )}

                                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/95 shadow-lg backdrop-blur transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:shadow-xl">
                                        <MapPin
                                            className={`h-4 w-4 transition-colors ${isActive
                                                ? "text-primary"
                                                : "text-foreground"
                                                }`}
                                        />
                                    </span>

                                    <span className="absolute bottom-0 h-1.5 w-1.5 translate-y-1 rounded-full bg-primary shadow-sm" />
                                </button>
                            </Marker>
                        );
                    }
                )}

                {placesDetails &&
                    placesDetails.lng !==
                    null &&
                    placesDetails.lat !==
                    null && (
                        <Popup
                            longitude={
                                placesDetails.lng
                            }
                            latitude={
                                placesDetails.lat
                            }
                            anchor="bottom"
                            offset={18}
                            closeOnClick={false}
                            closeButton={false}
                            onClose={() =>
                                onToggleDetails(
                                    null
                                )
                            }
                            className="explore-popup"
                            maxWidth="320px"
                        >
                            <div className="w-[280px] overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-2xl">
                                <div className="relative h-36 w-full">
                                    {placesDetails.image ? (
                                        <img
                                            src={
                                                placesDetails.image
                                            }
                                            alt={
                                                placesDetails.name ||
                                                "Travel place"
                                            }
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full flex-col items-center justify-center text-muted-foreground">
                                            <ImageOff className="h-6 w-6" />
                                            <span className="mt-2 text-[11px]">
                                                No
                                                image
                                                available
                                            </span>
                                        </div>
                                    )}

                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />

                                    {placesDetails.rate !==
                                        undefined &&
                                        placesDetails.rate !==
                                        null && (
                                            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/20 bg-black/45 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                                                <Star className="h-3 w-3 fill-current" />
                                                {
                                                    placesDetails.rate
                                                }
                                            </div>
                                        )}
                                </div>

                                <div className="p-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-foreground">
                                                {
                                                    placesDetails.name
                                                }
                                            </h3>

                                            {placesDetails.address?.country && (
                                                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                                                    <MapPin className="h-3 w-3 shrink-0" />

                                                    <span className="truncate">
                                                        {
                                                            placesDetails
                                                                .address
                                                                .country
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {placesDetails.description && (
                                        <p className="mt-3 line-clamp-3 text-[11px] leading-5 text-muted-foreground">
                                            {
                                                placesDetails.description
                                            }
                                        </p>
                                    )}

                                    <div className="mt-4 flex gap-2">
                                        <a
                                            href={`https://www.google.com/maps?q=${placesDetails.lat},${placesDetails.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 text-[11px] font-medium text-primary-foreground transition hover:opacity-90"
                                        >
                                            <Navigation className="h-3.5 w-3.5" />
                                            Directions
                                        </a>

                                        {placesDetails.wikipedia && (
                                            <a
                                                href={
                                                    placesDetails.wikipedia
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-9 items-center justify-center rounded-lg border border-border bg-background px-3 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                                                aria-label="Read more"
                                            >
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    )}
            </Map>
        </div>
    );
}
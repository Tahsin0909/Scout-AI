"use client";

import { Logo } from "@/components/logo/Logo";
import { Compass } from "lucide-react";
import { useRef, useState } from "react";
import {
    LocationResult,
    TravelPlace,
    TravelPlaceDetails,
} from "../../explore-map.interface";
import { ExploreOpenTripMap } from "./mapBocMap/MapBoxMap";
import OpenTripHeader from "./OpenTripHeader";
import { PlaceSkeleton } from "./PlaceSkeleton";
import { TravelPlaceCard } from "./TravelPlaceCard";
import TravelPlacesClient from "./TravelPlaces";
import SidebarToolOpenTrip from "./mapBocMap/SidebarToolOpenTrio";
import { MAP_STYLE_OUTDOORS } from "./mapBocMap/lib/mapbox";
import { MapRef } from "react-map-gl";

const ExploreMapWithOpenTrip = () => {
    const [selectedLocation, setSelectedLocation] = useState<LocationResult | null>(null);
    const [places, setPlaces] = useState<TravelPlace[]>([]);
    const [placesDetails, setPlacesDetails] = useState<TravelPlaceDetails | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [detailsError, setDetailsError] = useState("");
    const [mapStyle, setMapStyle] = useState(MAP_STYLE_OUTDOORS);
    const mapRef = useRef<MapRef | null>(null);
    const [is3D, setIs3D] = useState(false);

    const loadPlaces = async (lat: number, lng: number) => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`/api/travel-places?lat=${lat}&lng=${lng}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to load travel places."
                );
            }

            setPlaces(data.places || []);
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong."
            );

            setPlaces([]);
        } finally {
            setLoading(false);
        }
    };

    const toggleDetails = async (place: TravelPlace | null) => {
        if (!place) {
            setExpandedId(null);
            setPlacesDetails(null);
            return;
        }

        if (expandedId === place.xid) {
            setExpandedId(null);
            setPlacesDetails(null);
            return;
        }

        setExpandedId(place.xid);

        try {
            setDetailsLoading(true);
            setDetailsError("");

            const response = await fetch(`/api/travel-places/${place.xid}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to load place details."
                );
            }

            setPlacesDetails(data.place);
        } catch (error) {
            setDetailsError(
                error instanceof Error
                    ? error.message
                    : "Failed to load details."
            );

            setExpandedId(null);
        } finally {
            setDetailsLoading(false);
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <ExploreOpenTripMap
                    mapStyle={mapStyle}
                    placesDetails={placesDetails}
                    onToggleDetails={toggleDetails}
                    travelPlace={places}
                    mapRef={mapRef}
                    is3D={is3D}
                />
            </div>

            <div className="pointer-events-none absolute inset-0 z-20">
                <div className="pointer-events-auto absolute left-0 top-0 flex h-full w-[360px] flex-col border border-white/10 bg-black/45 shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <div className="shrink-0 px-3 pt-2">
                        <div className="relative -translate-x-7">
                            <Logo forceWhite />
                        </div>
                        <TravelPlacesClient
                            selectedLocation={selectedLocation}
                            setSelectedLocation={setSelectedLocation}
                            loadPlaces={loadPlaces}
                            error={error}
                            loading={loading}
                            places={places}
                            setError={setError}
                            setLoading={setLoading}
                            setPlaces={setPlaces}
                        />
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-6">
                        {loading && (
                            <div className="mt-4 space-y-2">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <PlaceSkeleton key={index} />
                                ))}
                            </div>
                        )}

                        {!loading && places.length > 0 && (
                            <div className="mt-4">
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs font-medium text-accent">
                                            <Compass className="h-3.5 w-3.5" />
                                            Places worth exploring
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-2">
                                    {places.map((place) => (
                                        <TravelPlaceCard
                                            key={place.xid}
                                            place={place}
                                            details={placesDetails}
                                            detailsError={detailsError}
                                            detailsLoading={detailsLoading}
                                            expandedId={expandedId}
                                            onToggleDetails={toggleDetails}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="pointer-events-auto absolute left-[380px] right-20 top-3">
                    <OpenTripHeader
                        setSelectedLocation={setSelectedLocation}
                        loadPlaces={loadPlaces}
                    />
                </div>

                <div className="pointer-events-auto absolute right-3 top-16">
                    <SidebarToolOpenTrip
                        mapRef={mapRef}
                        mapStyle={mapStyle}
                        onStyleChange={setMapStyle}
                        is3D={is3D}
                        on3DChange={setIs3D}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExploreMapWithOpenTrip;
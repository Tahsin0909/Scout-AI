"use client"
import { useState } from "react";
import { LocationResult, TravelPlace, TravelPlaceDetails } from "../../explore-map.interface";
import TravelPlacesClient from "./TravelPlaces";
import OpenTripHeader from "./OpenTripHeader";
import { Logo } from "@/components/logo/Logo";
import { PlaceSkeleton } from "./PlaceSkeleton";
import { TravelPlaceCard } from "./TravelPlaceCard";
import { Compass } from "lucide-react";
import { ExploreOpenTripMap } from "./mapBocMap/MapBoxMap";

const ExploreMapWithOpenTrip = () => {
    const [selectedLocation, setSelectedLocation] = useState<LocationResult | null>(null);
    const [places, setPlaces] = useState<TravelPlace[]>([]);
    const [placesDetails, setPlacesDetails] = useState<TravelPlaceDetails | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [expandedId, setExpandedId] = useState<string>("");
    const [details, setDetails] = useState<TravelPlaceDetails | null>(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [detailsError, setDetailsError] = useState("");

    const loadPlaces = async (lat: number, lng: number) => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`/api/travel-places?lat=${lat}&lng=${lng}`);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to load travel places.");
            }

            setPlaces(data.places || []);
        } catch (error) {
            setError(error instanceof Error ? error.message : "Something went wrong.");
            setPlaces([]);
        } finally {
            setLoading(false);
        }
    };

    const toggleDetails = async (place: TravelPlace | null) => {
        if (expandedId) {
            setExpandedId(place?.xid as string);
            return;
        }

        setExpandedId("");

        if (details) {
            return;
        }

        try {
            setDetailsLoading(true);
            setDetailsError("");

            const response = await fetch(`/api/travel-places/${place?.xid}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to load place details.");
            }

            setDetails(data.place);
            setPlacesDetails(data.place);
        } catch (error) {
            setDetailsError(
                error instanceof Error
                    ? error.message
                    : "Failed to load details."
            );
        } finally {
            setDetailsLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-5 max-h-screen overflow-hidden ">

            <div className="relative col-span-1 max-h-screen ">
                <div className="max-h-[40vh]">
                    <div className="mt-2 relative -translate-x-7">
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
                <div className="max-h-[60vh] overflow-y-auto">
                    {loading && (
                        <div className="mt-5">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <PlaceSkeleton key={index} />
                            ))}
                        </div>
                    )}

                    {!loading && places.length > 0 && (
                        <div className="mt-5">
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                                        <Compass className="h-4 w-4" />
                                        Places worth exploring
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 space-y-2">
                                {places.map((place) => (
                                    <TravelPlaceCard key={place.xid} place={place} details={placesDetails} detailsError={detailsError} detailsLoading={detailsLoading} expandedId={expandedId} onToggleDetails={toggleDetails} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="col-span-4 h-screen">
                <div className="relative h-full w-full overflow-hidden">
                    <div className="absolute left-0 top-0 z-30 w-full bg-transparent p-2">
                        <OpenTripHeader setSelectedLocation={setSelectedLocation} loadPlaces={loadPlaces} />
                    </div>

                    <div className="absolute inset-0 z-0 h-full w-full">
                        <ExploreOpenTripMap placesDetails={placesDetails} onToggleDetails={toggleDetails} travelPlace={places} />
                    </div>

                    <div className="absolute right-0 top-14 z-30 h-full bg-transparent">
                        Side Tools
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreMapWithOpenTrip;
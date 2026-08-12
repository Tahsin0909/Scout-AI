"use client";

import {
    Compass,
    Loader2,
    LocateFixed,
    Navigation,
    Sparkles
} from "lucide-react";
import { useState } from "react";
import { LocationResult, TravelPlace } from "../../explore-map.interface";
import { LocationSearch } from "./LocationSearch";
import { PlaceSkeleton } from "./PlaceSkeleton";
import { TravelPlaceCard } from "./TravelPlaceCard";



export default function TravelPlacesClient() {
    const [places, setPlaces] = useState<TravelPlace[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedLocation, setSelectedLocation] = useState<LocationResult | null>(null);

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

    const handleLocationSelect = async (location: LocationResult) => {
        setSelectedLocation(location);
        await loadPlaces(location.latitude, location.longitude);
    };

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        setLoading(true);
        setError("");

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                setSelectedLocation({
                    id: "current-location",
                    name: "Current location",
                    fullName: "Places near your current location",
                    latitude: lat,
                    longitude: lng,
                    type: "current",
                });

                await loadPlaces(lat, lng);
            },
            (error) => {
                console.error(error);

                if (error.code === error.PERMISSION_DENIED) {
                    setError("Location permission was denied. Search a city or country instead.");
                } else {
                    setError("Unable to detect your current location.");
                }

                setLoading(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000,
            }
        );
    };

    return (
        <main className="">
            <section className="">
                <div className="overflow-hidden rounded-[32px] p-6 shadow-xl shadow-zinc-200/60 backdrop-blur-xl md:p-10">
                    <div className="">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full  px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
                                <Sparkles className="h-3.5 w-3.5" />
                                Discover nearby
                            </div>

                            <h1 className="font-bold tracking-tight">
                                Find your next place to explore.
                            </h1>

                            <p className="mt-5">
                                Search a city or country, or use your current location to discover interesting places nearby.
                            </p>
                        </div>
                        <div className="mt-5">
                            <LocationSearch onSelect={handleLocationSelect} />
                        </div>

                        <div className="my-4 flex items-center gap-3">
                            <div className="h-px flex-1 bg-border" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                                OR
                            </span>

                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <button onClick={getCurrentLocation} disabled={loading} className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background text-xs font-semibold text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50">
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LocateFixed className="h-4 w-4" />}

                            {loading ? "Finding places..." : "Use My Current Location"}
                        </button>

                        {error && (
                            <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2.5 text-xs leading-5 text-destructive">
                                {error}
                            </div>
                        )}
                    </div>
                </div>

                {selectedLocation && (
                    <div className="mt-8 flex flex-col gap-4 rounded-2xl border  px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl ">
                                <Navigation className="h-4 w-4 " />
                            </div>

                            <div>
                                <p className="text-xs font-medium uppercase tracking-wider 0">
                                    Exploring
                                </p>

                                <p className="font-semibold text-zinc-900">
                                    {selectedLocation.fullName}
                                </p>
                            </div>
                        </div>

                        {!loading && places.length > 0 && (
                            <div className="rounded-full  px-3 py-1.5 text-sm font-medium ">
                                {places.length} places found
                            </div>
                        )}
                    </div>
                )}

                {error && (
                    <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {loading && (
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <PlaceSkeleton key={index} />
                        ))}
                    </div>
                )}

                {!loading && places.length > 0 && (
                    <div className="mt-10">
                        <div className="mb-6 flex items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                                    <Compass className="h-4 w-4" />
                                    Travel inspiration
                                </div>

                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">
                                    Places worth exploring
                                </h2>
                            </div>
                        </div>

                        <div className="grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {places.map((place) => (
                                <TravelPlaceCard key={place.xid} place={place} />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
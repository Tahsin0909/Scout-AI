"use client";

import {
    Loader2,
    LocateFixed,
    Navigation
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { LocationResult, TravelPlace } from "../../explore-map.interface";



export default function TravelPlacesClient({
    selectedLocation,
    setSelectedLocation,
    loadPlaces,
    places,
    error,
    loading,
    setError,
    setLoading
}: {
    selectedLocation: LocationResult | null,
    setSelectedLocation: Dispatch<SetStateAction<LocationResult | null>>,
    loadPlaces: (lat: number, lng: number) => Promise<void>,
    places: TravelPlace[],
    setPlaces: Dispatch<SetStateAction<TravelPlace[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    loading: boolean,
    setError: Dispatch<SetStateAction<string>>,
    error: string
}) {
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
                <div className="overflow-hidden rounded-[32px] p-2 shadow-xl shadow-zinc-200/60">
                    <div>
                        <h1 className="font-bold tracking-tight text-white">
                            Find your next place to explore.
                        </h1>

                        <p className="mt-5 text-white">
                            Search a city or country, or use your current location to discover interesting places nearby.
                        </p>
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

                {selectedLocation && (
                    <div className=" mt-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center">
                                <Navigation className="h-4 w-4 " />
                            </div>
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wider">
                                    Exploring
                                </p>

                                <p className="font-semibold text-sm">
                                    {selectedLocation.fullName}
                                </p>
                            </div>
                        </div>

                        {!loading && places.length > 0 && (
                            <div className="rounded-full px-3 py-1.5 text-sm font-medium ">
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
            </section>
        </main>
    );
}
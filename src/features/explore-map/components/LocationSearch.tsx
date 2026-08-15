"use client";

import { useEffect, useState } from "react";
import { Loader2, MapPin, Search, X } from "lucide-react";

export interface LocationResult {
    id: string;
    name: string;
    fullName: string;
    latitude: number;
    longitude: number;
    type: string;
}

interface LocationSearchProps {
    onSelect: (location: LocationResult) => void;
}

interface MapboxFeature {
    id: string;
    geometry: {
        coordinates: [number, number];
    };
    properties: {
        mapbox_id?: string;
        feature_type?: string;
        name?: string;
        name_preferred?: string;
        full_address?: string;
        place_formatted?: string;
    };
}

export default function LocationSearch({
    onSelect,
}: LocationSearchProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<LocationResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (query.trim().length < 2) {
            setResults([]);
            setOpen(false);
            return;
        }

        const timeout = setTimeout(() => {
            searchLocation(query);
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    const searchLocation = async (value: string) => {
        try {
            setLoading(true);

            const token =
                process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

            if (!token) {
                console.error(
                    "NEXT_PUBLIC_MAPBOX_TOKEN is missing."
                );
                return;
            }

            const params = new URLSearchParams({
                q: value,
                access_token: token,
                autocomplete: "true",
                limit: "6",
                types: "place,country",
            });

            const response = await fetch(
                `https://api.mapbox.com/search/geocode/v6/forward?${params.toString()}`
            );

            if (!response.ok) {
                throw new Error(
                    "Failed to search location."
                );
            }

            const data = await response.json();

            const formattedResults: LocationResult[] =
                (data.features || []).map(
                    (feature: MapboxFeature) => {
                        const [longitude, latitude] =
                            feature.geometry.coordinates;

                        const name =
                            feature.properties.name_preferred ||
                            feature.properties.name ||
                            "Unknown";

                        return {
                            id:
                                feature.properties.mapbox_id ||
                                feature.id,

                            name,

                            fullName:
                                feature.properties.full_address ||
                                [
                                    name,
                                    feature.properties.place_formatted,
                                ]
                                    .filter(Boolean)
                                    .join(", "),

                            latitude,
                            longitude,

                            type:
                                feature.properties.feature_type ||
                                "place",
                        };
                    }
                );

            setResults(formattedResults);
            setOpen(true);
        } catch (error) {
            console.error(
                "Location search error:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (
        location: LocationResult
    ) => {
        setQuery(location.fullName);
        setOpen(false);

        onSelect(location);
    };

    const clearSearch = () => {
        setQuery("");
        setResults([]);
        setOpen(false);
    };

    return (
        <div className="relative w-full">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />

                <input
                    value={query}
                    onChange={(event) =>
                        setQuery(event.target.value)
                    }
                    onFocus={() => {
                        if (results.length > 0) {
                            setOpen(true);
                        }
                    }}
                    placeholder="Search city or country..."
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white pl-12 pr-12 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                />

                {loading ? (
                    <Loader2 className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-zinc-400" />
                ) : query ? (
                    <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-900"
                    >
                        <X className="h-5 w-5" />
                    </button>
                ) : null}
            </div>

            {open && results.length > 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
                    {results.map((location) => (
                        <button
                            key={location.id}
                            type="button"
                            onClick={() =>
                                handleSelect(location)
                            }
                            className="flex w-full items-start gap-3 border-b border-zinc-100 px-4 py-3 text-left transition last:border-b-0 hover:bg-zinc-50"
                        >
                            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                                <MapPin className="h-4 w-4 text-zinc-600" />
                            </div>

                            <div className="min-w-0">
                                <p className="font-medium text-zinc-900">
                                    {location.name}
                                </p>

                                <p className="mt-0.5 truncate text-sm text-zinc-500">
                                    {location.fullName}
                                </p>

                                <span className="mt-1 inline-block text-xs capitalize text-zinc-400">
                                    {location.type}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {open &&
                !loading &&
                query.length >= 2 &&
                results.length === 0 && (
                    <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-2xl border border-zinc-200 bg-white p-5 text-center text-sm text-zinc-500 shadow-xl">
                        No city or country found.
                    </div>
                )}
        </div>
    );
}
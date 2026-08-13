import { Loader2, MapPin, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LocationResult, MapboxFeature } from "../../explore-map.interface";

export function LocationSearch({
    onSelect,
}: {
    onSelect: (location: LocationResult) => void;
}) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<LocationResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [searchError, setSearchError] = useState("");

    useEffect(() => {
        if (query.trim().length < 2) {
            setResults([]);
            setOpen(false);
            setSearchError("");
            return;
        }

        const timeout = window.setTimeout(() => {
            searchLocation(query);
        }, 350);

        return () => window.clearTimeout(timeout);
    }, [query]);

    const searchLocation = async (value: string) => {
        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

        if (!token) {
            setSearchError("Mapbox token is missing.");
            return;
        }

        try {
            setLoading(true);
            setSearchError("");

            const params = new URLSearchParams({
                q: value,
                access_token: token,
                autocomplete: "true",
                limit: "6",
                types: "place,country",
            });

            const response = await fetch(`https://api.mapbox.com/search/geocode/v6/forward?${params.toString()}`);

            if (!response.ok) {
                throw new Error("Location search failed.");
            }

            const data = await response.json();

            const formattedResults: LocationResult[] = (data.features || []).map(
                (feature: MapboxFeature) => {
                    const [longitude, latitude] = feature.geometry.coordinates;

                    const name =
                        feature.properties.name_preferred ||
                        feature.properties.name ||
                        "Unknown location";

                    return {
                        id: feature.properties.mapbox_id || feature.id,
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
                        type: feature.properties.feature_type || "place",
                    };
                }
            );

            setResults(formattedResults);
            setOpen(true);
        } catch (error) {
            console.error(error);

            setSearchError("Unable to search locations.");
            setResults([]);
            setOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (location: LocationResult) => {
        setQuery(location.fullName);
        setOpen(false);

        onSelect(location);
    };

    const clearSearch = () => {
        setQuery("");
        setResults([]);
        setOpen(false);
        setSearchError("");
    };

    return (
        <div className="relative w-full">
            <div className="group relative">
                <Search className="pointer-events-none absolute z-10 left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white transition-colors group-focus-within:text-yellow-400" />

                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onFocus={() => {
                        if (results.length > 0) {
                            setOpen(true);
                        }
                    }}
                    placeholder="Search city or country"
                    className="h-10 w-full rounded-xl border border-white/10 bg-black/25 pl-9 pr-9 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-white/35 hover:border-white/20 focus:border-yellow-400/40 focus:bg-black/35 focus:ring-2 focus:ring-yellow-400/10"
                />

                {loading ? (
                    <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-white/45" />
                ) : query ? (
                    <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-white/40 transition hover:bg-white/10 hover:text-white"
                    >
                        <X className="h-3.5 w-3.5" />
                    </button>
                ) : null}
            </div>

            {open && (
                <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-black/70 p-1.5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl">
                    {searchError ? (
                        <div className="px-3 py-4 text-center text-xs text-red-300">
                            {searchError}
                        </div>
                    ) : results.length > 0 ? (
                        results.map((location) => (
                            <button
                                key={location.id}
                                type="button"
                                onClick={() => handleSelect(location)}
                                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition hover:bg-white/10"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                    <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="truncate text-sm font-medium text-white">
                                            {location.name}
                                        </p>

                                        <span className="shrink-0 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-white/40">
                                            {location.type}
                                        </span>
                                    </div>

                                    <p className="mt-0.5 truncate text-[11px] text-white/45">
                                        {location.fullName}
                                    </p>
                                </div>
                            </button>
                        ))
                    ) : (
                        <div className="px-3 py-4 text-center">
                            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                <MapPin className="h-3.5 w-3.5 text-white/40" />
                            </div>

                            <p className="mt-2 text-xs text-white/45">
                                No location found
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
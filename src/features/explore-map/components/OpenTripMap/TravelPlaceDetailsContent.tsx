/* eslint-disable @next/next/no-img-element */
"use client";

import { ExternalLink, ImageOff, MapPin } from "lucide-react";
import { TravelPlace, TravelPlaceDetails } from "../../explore-map.interface";
import { CoordinateCard } from "./CoordinateCard";

export function TravelPlaceDetailsContent({
    details,
    fallbackPlace,
}: {
    details: TravelPlaceDetails;
    fallbackPlace: TravelPlace;
}) {
    const lat = details.lat ?? fallbackPlace.point.lat;
    const lng = details.lng ?? fallbackPlace.point.lon;
    const formattedAddress = formatAddress(details.address);

    return (
        <div className="overflow-hidden text-white">
            <div className="relative overflow-hidden">
                {details.image ? (
                    <img src={details.image} alt={details.name || fallbackPlace.name} className="h-44 w-full object-cover transition-transform duration-500 hover:scale-[1.02]" />
                ) : (
                    <div className="flex h-40 flex-col items-center justify-center bg-white/5 text-white/40">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                            <ImageOff className="h-5 w-5" />
                        </div>

                        <p className="mt-2 text-[11px] font-medium">
                            No image available
                        </p>
                    </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            <div className="p-3.5">
                {details.description ? (
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

                            <h4 className="text-xs font-semibold text-white">
                                About this place
                            </h4>
                        </div>

                        <p className="text-[11px] leading-5 text-white/60">
                            {details.description}
                        </p>
                    </div>
                ) : (
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-[11px] text-white/50">
                        No description available for this place.
                    </div>
                )}

                {formattedAddress && (
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                        <div className="flex items-start gap-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
                                    Address
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-white/70">
                                    {formattedAddress}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-3 grid grid-cols-2 gap-2">
                    <CoordinateCard label="Latitude" value={lat.toFixed(6)} />
                    <CoordinateCard label="Longitude" value={lng.toFixed(6)} />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                    <a href={`https://www.google.com/maps?q=${lat},${lng}`} target="_blank" rel="noopener noreferrer" className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-3 text-[11px] font-medium text-yellow-300 transition hover:bg-yellow-400/15">
                        Open Location
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    {details.wikipedia && (
                        <a href={details.wikipedia} target="_blank" rel="noopener noreferrer" className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-[11px] font-medium text-white/70 transition hover:bg-white/10 hover:text-white">
                            Read More
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function formatAddress(address: TravelPlaceDetails["address"]) {
    if (!address) {
        return null;
    }

    return [
        address.houseNumber,
        address.road,
        address.suburb,
        address.city,
        address.state,
        address.postcode,
        address.country,
    ]
        .filter(Boolean)
        .join(", ");
}
/* eslint-disable @next/next/no-img-element */
"use client";

import {
    ExternalLink,
    ImageOff,
    MapPin
} from "lucide-react";
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
        <div>
            <div className="relative">
                {details.image ? (
                    <img src={details.image} alt={details.name || fallbackPlace.name} className="h-60 w-full object-cover" />
                ) : (
                    <div className="flex h-60 flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-400">
                        <ImageOff className="h-9 w-9" />
                        <p className="mt-3 text-sm font-medium">No image available</p>
                    </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="p-5">
                {details.description ? (
                    <div>
                        <h4 className="text-sm font-bold text-zinc-900">
                            About this place
                        </h4>

                        <p className="mt-2 line-clamp-6 text-sm leading-6 text-zinc-600">
                            {details.description}
                        </p>
                    </div>
                ) : (
                    <div className="rounded-xl bg-zinc-100 px-4 py-3 text-sm text-zinc-500">
                        No description available for this place.
                    </div>
                )}

                {formattedAddress && (
                    <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                                <MapPin className="h-4 w-4 text-emerald-600" />
                            </div>

                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                                    Address
                                </p>

                                <p className="mt-1 text-sm leading-6 text-zinc-700">
                                    {formattedAddress}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <CoordinateCard label="Latitude" value={lat.toFixed(6)} />
                    <CoordinateCard label="Longitude" value={lng.toFixed(6)} />
                </div>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <a href={`https://www.google.com/maps?q=${lat},${lng}`} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
                        Open Location
                        <ExternalLink className="h-4 w-4" />
                    </a>

                    {details.wikipedia && (
                        <a href={details.wikipedia} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100">
                            Read More
                            <ExternalLink className="h-4 w-4" />
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
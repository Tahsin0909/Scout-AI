"use client";

import type { RefObject } from "react";
import type { MapRef } from "react-map-gl";

import {
    Box,
    Check,
    Compass,
    Map,
    Minus,
    Moon,
    Navigation,
    Plus,
    Satellite,
    Sun,
    Trees,
} from "lucide-react";

import {
    MAP_STYLE_DARK,
    MAP_STYLE_LIGHT,
    MAP_STYLE_NAVIGATION_DAY,
    MAP_STYLE_NAVIGATION_NIGHT,
    MAP_STYLE_OUTDOORS,
    MAP_STYLE_SATELLITE,
    MAP_STYLE_SATELLITE_STREETS,
    MAP_STYLE_STANDARD,
    MAP_STYLE_STREETS,
} from "./lib/mapbox";

interface SidebarToolOpenTripProps {
    mapStyle: string;
    onStyleChange: (style: string) => void;
    mapRef: RefObject<MapRef | null>;
    is3D: boolean;
    on3DChange: (value: boolean) => void;
}

const mapStyles = [
    {
        name: "Standard",
        value: MAP_STYLE_STANDARD,
        icon: Map,
    },
    {
        name: "Streets",
        value: MAP_STYLE_STREETS,
        icon: Navigation,
    },
    {
        name: "Outdoors",
        value: MAP_STYLE_OUTDOORS,
        icon: Trees,
    },
    {
        name: "Light",
        value: MAP_STYLE_LIGHT,
        icon: Sun,
    },
    {
        name: "Dark",
        value: MAP_STYLE_DARK,
        icon: Moon,
    },
    {
        name: "Satellite",
        value: MAP_STYLE_SATELLITE,
        icon: Satellite,
    },
    {
        name: "Satellite Streets",
        value: MAP_STYLE_SATELLITE_STREETS,
        icon: Compass,
    },
    {
        name: "Navigation Day",
        value: MAP_STYLE_NAVIGATION_DAY,
        icon: Sun,
    },
    {
        name: "Navigation Night",
        value: MAP_STYLE_NAVIGATION_NIGHT,
        icon: Moon,
    },
];

const SidebarToolOpenTrip = ({
    mapStyle,
    onStyleChange,
    mapRef,
    is3D,
    on3DChange,
}: SidebarToolOpenTripProps) => {
    const handleZoomIn = () => {
        mapRef.current?.zoomIn({
            duration: 300,
        });
    };

    const handleZoomOut = () => {
        mapRef.current?.zoomOut({
            duration: 300,
        });
    };

    const handleResetCompass = () => {
        mapRef.current?.easeTo({
            bearing: 0,
            pitch: is3D ? 55 : 0,
            duration: 500,
        });
    };

    const handleToggle3D = () => {
        const map = mapRef.current?.getMap();

        if (!map) return;

        const next3D = !is3D;

        on3DChange(next3D);

        if (next3D) {
            if (!map.getSource("triptrax-terrain")) {
                map.addSource("triptrax-terrain", {
                    type: "raster-dem",
                    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
                    tileSize: 512,
                    maxzoom: 14,
                });
            }

            map.setTerrain({
                source: "triptrax-terrain",
                exaggeration: 1.35,
            });

            map.easeTo({
                pitch: 60,
                bearing: -18,
                duration: 800,
            });
        } else {
            map.setTerrain(undefined);

            map.easeTo({
                pitch: 0,
                bearing: 0,
                duration: 700,
            });
        }
    };

    return (
        <div className="w-48 rounded-2xl border border-white/10 bg-black/45 shadow-2xl shadow-black/20 backdrop-blur-xl p-3 ">
            <div>
                <h3 className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Map Style
                </h3>

                <div className="space-y-1">
                    {mapStyles.map((style) => {
                        const Icon = style.icon;
                        const isActive =
                            mapStyle === style.value;

                        return (
                            <button
                                key={style.value}
                                type="button"
                                onClick={() =>
                                    onStyleChange(
                                        style.value
                                    )
                                }
                                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left transition-colors ${isActive
                                    ? "bg-white/15 text-white"
                                    : "text-white/60 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <div className="flex min-w-0 items-center gap-2.5">
                                    <Icon className="h-3.5 w-3.5 shrink-0" />

                                    <span className="truncate text-[11px] font-medium">
                                        {style.name}
                                    </span>
                                </div>

                                {isActive && (
                                    <Check className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="my-3 h-px bg-white/10" />

            <div>
                <h3 className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    View
                </h3>

                <button
                    type="button"
                    onClick={handleToggle3D}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 transition ${is3D ? "border border-yellow-400/20 bg-yellow-400/10 text-yellow-300" : "border border-white/10 bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"}`}
                >
                    <div className="flex items-center gap-2.5">
                        <Box className="h-3.5 w-3.5" />

                        <span className="text-[11px] font-medium">
                            3D Terrain
                        </span>
                    </div>

                    <div className={`relative h-5 w-9 shrink-0 rounded-full border transition-all duration-200 ${is3D ? "border-yellow-400/30 bg-yellow-400" : "border-white/10 bg-white/10"}`}>
                        <span className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ${is3D ? "translate-x-4" : "translate-x-0"}`} />
                    </div>
                </button>
            </div>

            <div className="my-3 h-px bg-white/10" />

            <div>
                <h3 className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Navigation
                </h3>

                <div className="grid grid-cols-3 gap-1.5">
                    <button
                        type="button"
                        onClick={handleZoomIn}
                        title="Zoom In"
                        className="flex h-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
                    >
                        <Plus className="h-4 w-4" />
                    </button>

                    <button
                        type="button"
                        onClick={handleZoomOut}
                        title="Zoom Out"
                        className="flex h-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
                    >
                        <Minus className="h-4 w-4" />
                    </button>

                    <button
                        type="button"
                        onClick={handleResetCompass}
                        title="Reset Compass"
                        className="flex h-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
                    >
                        <Compass className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarToolOpenTrip;
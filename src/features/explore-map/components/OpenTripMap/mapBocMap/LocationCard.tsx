"use client";

import { Star, MapPin } from "lucide-react";
import { ExploreLocation } from "./types/explore";
import { CATEGORIES } from "./data/categories";


const DOT_CLASS: Record<string, string> = {
  forest: "bg-forest",
  summit: "bg-summit",
  trail: "bg-trail",
  clay: "bg-clay",
};

interface Props {
  location: ExploreLocation;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function LocationCard({ location, isSelected, onSelect }: Props) {
  const category = CATEGORIES.find((c) => c.id === location.category);

  return (
    <button
      type="button"
      onClick={() => onSelect(location.id)}
      className={`group flex w-full gap-3 rounded-xl2 border p-2.5 text-left transition ${isSelected
          ? "border-trail/60 bg-panel-2"
          : "border-transparent hover:border-hairline hover:bg-panel-2/60"
        }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={location.imageUrl}
        alt=""
        className="h-16 w-20 shrink-0 rounded-lg object-cover"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${category ? DOT_CLASS[category.color] : ""}`} />
          <span className="truncate text-[0.7rem] uppercase tracking-wide text-muted">
            {category?.label}
          </span>
        </div>
        <p className="mt-0.5 truncate font-display text-sm text-ink">{location.name}</p>
        <div className="mt-1 flex items-center gap-2.5 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-trail text-trail" />
            {location.rating.toFixed(1)}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location.state}
          </span>
          {typeof location.distanceKm === "number" && (
            <span className="font-mono text-[0.7rem] text-summit">
              {location.distanceKm} km
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

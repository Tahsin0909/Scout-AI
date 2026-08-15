"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation, Search, Loader2 } from "lucide-react";
import { GeocodeResult } from "./types/explore";
import { geocodePlace } from "./lib/exploreApi";


interface PlaceFieldProps {
  label: string;
  placeholder: string;
  onPick: (result: GeocodeResult) => void;
}

function PlaceField({ label, placeholder, onPick }: PlaceFieldProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeocodeResult[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    const t = setTimeout(() => {
      geocodePlace(query).then((res) => {
        if (!cancelled) {
          setResults(res);
          setLoading(false);
          setOpen(true);
        }
      });
    }, 200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <label className="mb-1 block text-[0.7rem] uppercase tracking-wide text-muted">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-hairline bg-void px-3 py-2 focus-within:border-trail/60">
        <Search className="h-3.5 w-3.5 shrink-0 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
        />
        {loading && <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-muted" />}
      </div>

      {open && results.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border border-hairline bg-panel-2 shadow-panel">
          {results.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => {
                  setQuery(r.placeName);
                  onPick(r);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-ink hover:bg-panel"
              >
                <Navigation className="h-3 w-3 shrink-0 text-muted" />
                <span className="truncate">{r.placeName}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface Props {
  onSearch: (origin: [number, number], destination: [number, number]) => void;
  loading: boolean;
}

export function RouteSearchPanel({ onSearch, loading }: Props) {
  const [origin, setOrigin] = useState<GeocodeResult | null>(null);
  const [destination, setDestination] = useState<GeocodeResult | null>(null);

  const canSearch = Boolean(origin && destination);

  return (
    <div className="space-y-3 border-b border-hairline p-3">
      <PlaceField label="Start" placeholder="City or park name" onPick={setOrigin} />
      <PlaceField label="End" placeholder="City or park name" onPick={setDestination} />
      <button
        type="button"
        disabled={!canSearch || loading}
        onClick={() => origin && destination && onSearch(origin.coordinates, destination.coordinates)}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-trail px-3 py-2 text-sm font-medium text-void transition disabled:cursor-not-allowed disabled:bg-panel-2 disabled:text-muted"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Navigation className="h-4 w-4" />}
        Find what&apos;s along the way
      </button>
    </div>
  );
}

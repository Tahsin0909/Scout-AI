"use client";

import { Search, Compass, Route, Loader2, X } from "lucide-react";
import { CategoryFilters } from "./CategoryFilters";
import { LocationCard } from "./LocationCard";
import { RouteSearchPanel } from "./RouteSearchPanel";
import { AsyncState, CategoryId, ExploreLocation, RouteResult } from "./types/explore";

export type ExploreMode = "browse" | "route";

interface Props {
  mode: ExploreMode;
  onModeChange: (mode: ExploreMode) => void;

  search: string;
  onSearchChange: (value: string) => void;

  activeCategories: CategoryId[];
  onToggleCategory: (id: CategoryId) => void;
  onClearCategories: () => void;

  browseState: AsyncState<ExploreLocation[]>;
  routeState: AsyncState<RouteResult>;
  onRouteSearch: (origin: [number, number], destination: [number, number]) => void;

  selectedId: string | null;
  onSelect: (id: string) => void;
}

function ResultsList({
  locations,
  selectedId,
  onSelect,
  emptyLabel,
}: {
  locations: ExploreLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  emptyLabel: string;
}) {
  if (locations.length === 0) {
    return <p className="px-3 py-8 text-center text-sm text-muted">{emptyLabel}</p>;
  }
  return (
    <div className="flex flex-col gap-1 p-2">
      {locations.map((loc) => (
        <LocationCard
          key={loc.id}
          location={loc}
          isSelected={loc.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export function LocationSidebar({
  mode,
  onModeChange,
  search,
  onSearchChange,
  activeCategories,
  onToggleCategory,
  onClearCategories,
  browseState,
  routeState,
  onRouteSearch,
  selectedId,
  onSelect,
}: Props) {
  return (
    <aside className="pointer-events-auto flex max-h-[70vh] w-full flex-col overflow-hidden rounded-xl2 border border-hairline bg-panel/95 shadow-panel backdrop-blur sm:h-full sm:max-h-none sm:w-[380px]">
      <div className="flex border-b border-hairline">
        <button
          type="button"
          onClick={() => onModeChange("browse")}
          className={`relative flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium transition ${mode === "browse" ? "text-ink" : "text-muted hover:text-ink"
            }`}
        >
          <Compass className="h-3.5 w-3.5" />
          Browse
          {mode === "browse" && (
            <span className="absolute bottom-0 h-0.5 w-10 rounded-full bg-trail" />
          )}
        </button>
        <button
          type="button"
          onClick={() => onModeChange("route")}
          className={`relative flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium transition ${mode === "route" ? "text-ink" : "text-muted hover:text-ink"
            }`}
        >
          <Route className="h-3.5 w-3.5" />
          Plan a route
          {mode === "route" && (
            <span className="absolute bottom-0 h-0.5 w-10 rounded-full bg-trail" />
          )}
        </button>
      </div>

      {mode === "browse" ? (
        <>
          <div className="space-y-3 border-b border-hairline p-3">
            <div className="flex items-center gap-2 rounded-lg border border-hairline bg-void px-3 py-2 focus-within:border-trail/60">
              <Search className="h-3.5 w-3.5 shrink-0 text-muted" />
              <input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search parks, forests, attractions..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
              />
              {search && (
                <button type="button" onClick={() => onSearchChange("")} aria-label="Clear search">
                  <X className="h-3.5 w-3.5 text-muted hover:text-ink" />
                </button>
              )}
            </div>
            <CategoryFilters
              active={activeCategories}
              onToggle={onToggleCategory}
              onClear={onClearCategories}
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {browseState.status === "loading" && (
              <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading locations...
              </div>
            )}
            {browseState.status === "error" && (
              <p className="px-3 py-8 text-center text-sm text-clay">{browseState.message}</p>
            )}
            {browseState.status === "success" && (
              <>
                <p className="px-3 pt-3 text-xs text-muted">
                  {browseState.data.length} location{browseState.data.length === 1 ? "" : "s"}
                </p>
                <ResultsList
                  locations={browseState.data}
                  selectedId={selectedId}
                  onSelect={onSelect}
                  emptyLabel="No locations match those filters yet."
                />
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <RouteSearchPanel onSearch={onRouteSearch} loading={routeState.status === "loading"} />
          <div className="flex-1 overflow-y-auto">
            {routeState.status === "idle" && (
              <p className="px-3 py-8 text-center text-sm text-muted">
                Enter a start and end point to see what&apos;s along the way.
              </p>
            )}
            {routeState.status === "loading" && (
              <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted">
                <Loader2 className="h-4 w-4 animate-spin" />
                Calculating route...
              </div>
            )}
            {routeState.status === "error" && (
              <p className="px-3 py-8 text-center text-sm text-clay">{routeState.message}</p>
            )}
            {routeState.status === "success" && (
              <>
                <div className="mx-3 mt-3 flex items-center justify-between rounded-lg bg-panel-2 px-3 py-2 font-mono text-xs text-muted">
                  <span>{routeState.data.route.distanceKm} km</span>
                  <span>
                    {Math.floor(routeState.data.route.durationMin / 60)}h{" "}
                    {routeState.data.route.durationMin % 60}m
                  </span>
                </div>
                <p className="px-3 pt-3 text-xs text-muted">
                  {routeState.data.nearby.length} stop{routeState.data.nearby.length === 1 ? "" : "s"} near your route
                </p>
                <ResultsList
                  locations={routeState.data.nearby}
                  selectedId={selectedId}
                  onSelect={onSelect}
                  emptyLabel="Nothing in our dataset falls near this route."
                />
              </>
            )}
          </div>
        </>
      )}
    </aside>
  );
}

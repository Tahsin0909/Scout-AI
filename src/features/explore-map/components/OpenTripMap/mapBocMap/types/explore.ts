/**
 * Domain types for the Explore feature.
 *
 * These types are the contract between the UI and the data layer
 * (`src/lib/exploreApi.ts`). The mock implementation and a future
 * real backend/API implementation both return these exact shapes,
 * so swapping one for the other requires no changes above the API layer.
 */

export type CategoryId =
  | "national-park"
  | "national-forest"
  | "state-park"
  | "attraction";

export interface Category {
  id: CategoryId;
  label: string;
  /** Tailwind color token used for pins/badges for this category. */
  color: string;
  /** Short description shown in the filter UI. */
  description: string;
}

export interface ExploreLocation {
  id: string;
  name: string;
  category: CategoryId;
  /** [longitude, latitude] to match GeoJSON / Mapbox convention. */
  coordinates: [number, number];
  state: string;
  summary: string;
  /** 0-5, one decimal place, mirrors typical review aggregations. */
  rating: number;
  reviewCount: number;
  imageUrl: string;
  /** Distance in km from the current search/route context, if applicable. */
  distanceKm?: number;
  tags: string[];
}

export interface LocationQuery {
  categories?: CategoryId[];
  /** Restrict results to within this radius (km) of a center point. */
  near?: {
    center: [number, number];
    radiusKm: number;
  };
  /** Free-text match against name/state/tags. */
  search?: string;
}

export interface GeocodeResult {
  id: string;
  placeName: string;
  coordinates: [number, number];
}

export interface RouteQuery {
  origin: [number, number];
  destination: [number, number];
  /** How far off the route (km) a location can be and still count as "nearby". */
  corridorKm?: number;
  categories?: CategoryId[];
}

export interface RouteSummary {
  distanceKm: number;
  durationMin: number;
  /** Simplified route geometry as an array of [lng, lat] points. */
  geometry: [number, number][];
}

export interface RouteResult {
  route: RouteSummary;
  nearby: ExploreLocation[];
}

/**
 * Generic async result wrapper so components can render loading /
 * error / success states uniformly, the same way a real fetch-based
 * hook would once a live API replaces the mock layer.
 */
export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: T };

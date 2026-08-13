import { MOCK_LOCATIONS } from "@/data/mockLocations";
import {
  CategoryId,
  ExploreLocation,
  GeocodeResult,
  LocationQuery,
  RouteQuery,
  RouteResult,
} from "@/types/explore";

/**
 * Explore API layer.
 *
 * Every exported function here mirrors a real network call
 * (REST endpoint, Mapbox API, or a backend service) with the exact
 * same signature and return shape. Right now each one resolves against
 * `MOCK_LOCATIONS` after an artificial delay so the UI, loading states,
 * and error handling all behave like they will once this file's
 * internals are swapped for real `fetch` calls.
 *
 * Integration checklist for wiring up the real thing:
 *  1. Set NEXT_PUBLIC_MAPBOX_TOKEN (see .env.example).
 *  2. Replace the body of `getLocations` with a call to your own
 *     backend (which in turn queries the Mapbox tileset), e.g.
 *       const res = await fetch(`${API_BASE}/explore/locations?...`);
 *  3. Replace `geocodePlace` with the Mapbox Geocoding API:
 *       https://api.mapbox.com/geocoding/v5/mapbox.places/{query}.json
 *  4. Replace `getRoute` with the Mapbox Directions API:
 *       https://api.mapbox.com/directions/v5/mapbox/driving/{coords}
 *     then filter `MOCK_LOCATIONS` (or your tileset) by distance from
 *     the returned route geometry to build `nearby`.
 * No component outside this file needs to change when you do this —
 * they only depend on the types in `src/types/explore.ts`.
 */

const SIMULATED_LATENCY_MS = 400;

function delay<T>(value: T, ms = SIMULATED_LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function haversineKm(a: [number, number], b: [number, number]): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const [lon1, lat1] = a;
  const [lon2, lat2] = b;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}

/** Fetch locations, optionally filtered by category, proximity, or search text. */
export async function getLocations(query: LocationQuery = {}): Promise<ExploreLocation[]> {
  let results = [...MOCK_LOCATIONS];

  if (query.categories && query.categories.length > 0) {
    const set = new Set<CategoryId>(query.categories);
    results = results.filter((loc) => set.has(loc.category));
  }

  if (query.search && query.search.trim().length > 0) {
    const q = query.search.trim().toLowerCase();
    results = results.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.state.toLowerCase().includes(q) ||
        loc.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (query.near) {
    const { center, radiusKm } = query.near;
    results = results
      .map((loc) => ({ ...loc, distanceKm: haversineKm(center, loc.coordinates) }))
      .filter((loc) => (loc.distanceKm ?? Infinity) <= radiusKm)
      .sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
  }

  return delay(results);
}

/** Look up a single location by id. */
export async function getLocationById(id: string): Promise<ExploreLocation | undefined> {
  return delay(MOCK_LOCATIONS.find((loc) => loc.id === id));
}

/**
 * Forward-geocode a free-text place name into coordinates.
 * Mock implementation does a loose match against known locations plus
 * a couple of common city anchors so the route-search demo has
 * somewhere sensible to resolve "Denver" or "Chicago" to.
 */
const MOCK_CITY_ANCHORS: GeocodeResult[] = [
  { id: "city-denver", placeName: "Denver, CO", coordinates: [-104.9903, 39.7392] },
  { id: "city-chicago", placeName: "Chicago, IL", coordinates: [-87.6298, 41.8781] },
  { id: "city-salt-lake", placeName: "Salt Lake City, UT", coordinates: [-111.8910, 40.7608] },
  { id: "city-phoenix", placeName: "Phoenix, AZ", coordinates: [-112.0740, 33.4484] },
  { id: "city-seattle", placeName: "Seattle, WA", coordinates: [-122.3321, 47.6062] },
  { id: "city-nashville", placeName: "Nashville, TN", coordinates: [-86.7816, 36.1627] },
];

export async function geocodePlace(query: string): Promise<GeocodeResult[]> {
  const q = query.trim().toLowerCase();
  if (!q) return delay([]);

  const fromLocations: GeocodeResult[] = MOCK_LOCATIONS.filter(
    (loc) =>
      loc.name.toLowerCase().includes(q) || loc.state.toLowerCase().includes(q)
  ).map((loc) => ({ id: loc.id, placeName: `${loc.name}, ${loc.state}`, coordinates: loc.coordinates }));

  const fromCities = MOCK_CITY_ANCHORS.filter((c) => c.placeName.toLowerCase().includes(q));

  return delay([...fromCities, ...fromLocations].slice(0, 6));
}

/**
 * Get a driving route between two points, plus locations that fall
 * within `corridorKm` of the (straight-line, in this mock) path.
 */
export async function getRoute(query: RouteQuery): Promise<RouteResult> {
  const { origin, destination, corridorKm = 40, categories } = query;

  const distanceKm = haversineKm(origin, destination);
  // Mock geometry: a straight line with a couple of interpolated points,
  // standing in for the polyline a real Directions API call would return.
  const steps = 6;
  const geometry: [number, number][] = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    return [
      origin[0] + (destination[0] - origin[0]) * t,
      origin[1] + (destination[1] - origin[1]) * t,
    ] as [number, number];
  });

  const candidates = categories && categories.length > 0
    ? MOCK_LOCATIONS.filter((loc) => categories.includes(loc.category))
    : MOCK_LOCATIONS;

  const nearby = candidates
    .map((loc) => {
      const distToCorridor = Math.min(...geometry.map((p) => haversineKm(p, loc.coordinates)));
      return { ...loc, distanceKm: Math.round(distToCorridor) };
    })
    .filter((loc) => (loc.distanceKm ?? Infinity) <= corridorKm)
    .sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));

  return delay({
    route: {
      distanceKm: Math.round(distanceKm),
      durationMin: Math.round((distanceKm / 90) * 60), // assumes ~90 km/h average
      geometry,
    },
    nearby,
  });
}

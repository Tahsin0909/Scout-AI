export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

// Modern styles
// export const MAP_STYLE = "mapbox://styles/mapbox/standard";
// export const MAP_STYLE = "mapbox://styles/mapbox/standard-satellite";

// Classic styles
// export const MAP_STYLE = "mapbox://styles/mapbox/streets-v12";
export const MAP_STYLE = "mapbox://styles/mapbox/outdoors-v12";
// export const MAP_STYLE = "mapbox://styles/mapbox/light-v11";
// export const MAP_STYLE = "mapbox://styles/mapbox/dark-v11";
// export const MAP_STYLE = "mapbox://styles/mapbox/satellite-v9";
// export const MAP_STYLE = "mapbox://styles/mapbox/satellite-streets-v12";
// export const MAP_STYLE = "mapbox://styles/mapbox/navigation-day-v1";
// export const MAP_STYLE = "mapbox://styles/mapbox/navigation-night-v1";

// export const MAP_STYLE = "mapbox://styles/mapbox/standard";


export const DEFAULT_VIEW = {
  longitude: -98.5795,
  latitude: 39.8283,
  zoom: 3.4,
};

export function hasMapboxToken(): boolean {
  return MAPBOX_TOKEN.length > 0;
}

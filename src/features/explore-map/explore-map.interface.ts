export interface IExploreMap {
  id: string;
}

export interface TravelPlace {
  xid: string;
  name: string;
  rate?: number;
  kinds?: string;
  dist?: number;
  point: {
    lat: number;
    lon: number;
  };
}

export interface LocationResult {
  id: string;
  name: string;
  fullName: string;
  latitude: number;
  longitude: number;
  type: string;
}

export interface MapboxFeature {
  id: string;
  geometry: {
    coordinates: [number, number];
  };
  properties: {
    mapbox_id?: string;
    feature_type?: string;
    name?: string;
    name_preferred?: string;
    full_address?: string;
    place_formatted?: string;
  };
}

export interface TravelPlaceDetails {
  xid: string;
  name: string;
  kinds?: string;
  rate?: number;
  image: string | null;
  description: string | null;
  wikipedia: string | null;
  lat: number | null;
  lng: number | null;
  address: {
    road?: string | null;
    houseNumber?: string | null;
    suburb?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postcode?: string | null;
  } | null;
}
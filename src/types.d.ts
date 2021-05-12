interface Photo {
  height: number;
  html_attribution: string[];
  photo_reference: string[];
  width: number;
}

interface Location {
  lat: number;
  lng: number;
}

interface GooglePlacesItem {
  business_status: string;
  geometry: {
    location: Location;
    viewport: { northeast: Location; southwest: Location };
  };
  icon: string;
  name: string;
  photos: Photo[];
  place_id: string;
  plus_code: { compound_code: string; global_code: string };
  price_level: number;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}

interface Restaurant {
  name: string;
  address: string;
  rating: number;
}

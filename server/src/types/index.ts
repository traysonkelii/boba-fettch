export interface Office {
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface BobaShop {
  id: string;
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
  distance: number;
  location: {
    address1: string;
    address2?: string;
    address3?: string;
    city: string;
    state: string;
    zip_code: string;
  };
  display_phone?: string;
  url: string;
}

export interface BobaShopsResponse {
  businesses: BobaShop[];
  total: number;
  office: Office;
}

export type SortOption = 'rating' | 'distance';

export interface Car {
  id: string;
  name: string;
  type: 'hatchback' | 'sedan' | 'suv' | 'luxury' | 'compact';
  image: string;
  pricePerDay: number;
  transmission: 'manual' | 'automatic';
  fuel: 'petrol' | 'diesel' | 'hybrid';
  seats: number;
  features: string[];
  available: boolean;
  rating: number;
  reviews: number;
}
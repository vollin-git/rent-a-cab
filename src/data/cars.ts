import { Car } from '../types/car';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Maruti Swift',
    type: 'hatchback',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    pricePerDay: 1200,
    transmission: 'manual',
    fuel: 'petrol',
    seats: 5,
    features: ['AC', 'Music System', 'Power Steering', 'Central Locking'],
    available: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Honda City',
    type: 'sedan',
    image: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=800',
    pricePerDay: 2000,
    transmission: 'automatic',
    fuel: 'petrol',
    seats: 5,
    features: ['AC', 'Music System', 'Power Steering', 'Central Locking', 'ABS', 'Airbags'],
    available: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Mahindra XUV500',
    type: 'suv',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    pricePerDay: 3500,
    transmission: 'manual',
    fuel: 'diesel',
    seats: 7,
    features: ['AC', 'Music System', 'Power Steering', 'Central Locking', 'ABS', 'Airbags', '4WD'],
    available: true,
    rating: 4.6,
    reviews: 76
  },
  {
    id: '4',
    name: 'Toyota Innova',
    type: 'suv',
    image: 'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=800',
    pricePerDay: 3000,
    transmission: 'manual',
    fuel: 'diesel',
    seats: 8,
    features: ['AC', 'Music System', 'Power Steering', 'Central Locking', 'ABS', 'Airbags'],
    available: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '5',
    name: 'BMW 3 Series',
    type: 'luxury',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    pricePerDay: 8000,
    transmission: 'automatic',
    fuel: 'petrol',
    seats: 5,
    features: ['AC', 'Premium Sound', 'Power Steering', 'Central Locking', 'ABS', 'Airbags', 'GPS', 'Leather Seats'],
    available: true,
    rating: 4.9,
    reviews: 45
  },
  {
    id: '6',
    name: 'Hyundai i20',
    type: 'hatchback',
    image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800',
    pricePerDay: 1400,
    transmission: 'manual',
    fuel: 'petrol',
    seats: 5,
    features: ['AC', 'Music System', 'Power Steering', 'Central Locking', 'ABS'],
    available: true,
    rating: 4.4,
    reviews: 92
  }
];
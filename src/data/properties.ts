
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  host: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  description: string;
  latitude: number;
  longitude: number;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Stunning Beachfront Villa with Ocean Views",
    location: "Malibu, California",
    price: 450,
    rating: 4.95,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ],
    host: "Sarah Johnson",
    type: "Entire house",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["WiFi", "Kitchen", "Pool", "Beach access", "Parking"],
    description: "Experience luxury beachfront living in this stunning villa overlooking the Pacific Ocean. Perfect for groups and families looking for an unforgettable getaway.",
    latitude: 34.0259,
    longitude: -118.7798
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin Retreat",
    location: "Aspen, Colorado",
    price: 280,
    rating: 4.88,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
    ],
    host: "Michael Chen",
    type: "Cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Kitchen", "Fireplace", "Ski access", "Hot tub"],
    description: "Escape to this charming mountain cabin surrounded by pristine wilderness. Perfect for skiing in winter and hiking in summer.",
    latitude: 39.1911,
    longitude: -106.8175
  },
  {
    id: "3",
    title: "Modern Loft in Downtown Manhattan",
    location: "New York, New York",
    price: 320,
    rating: 4.92,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    host: "Emma Rodriguez",
    type: "Loft",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Kitchen", "Gym", "Rooftop access", "Doorman"],
    description: "Stylish modern loft in the heart of Manhattan with easy access to restaurants, shopping, and entertainment.",
    latitude: 40.7589,
    longitude: -73.9851
  },
  {
    id: "4",
    title: "Charming Tuscan Farmhouse",
    location: "Florence, Italy",
    price: 195,
    rating: 4.90,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
    ],
    host: "Lorenzo Bianchi",
    type: "Farmhouse",
    guests: 10,
    bedrooms: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Kitchen", "Pool", "Garden", "Wine cellar"],
    description: "Authentic Tuscan experience in this beautifully restored farmhouse surrounded by vineyards and olive groves.",
    latitude: 43.7696,
    longitude: 11.2558
  },
  {
    id: "5",
    title: "Luxury Overwater Bungalow",
    location: "Bora Bora, French Polynesia",
    price: 890,
    rating: 4.98,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    ],
    host: "Teiva Marama",
    type: "Overwater bungalow",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchenette", "Snorkeling gear", "Kayak", "Room service"],
    description: "Ultimate romantic getaway in this luxury overwater bungalow with direct lagoon access and breathtaking views.",
    latitude: -16.5004,
    longitude: -151.7415
  },
  {
    id: "6",
    title: "Historic Brownstone Apartment",
    location: "Boston, Massachusetts",
    price: 240,
    rating: 4.85,
    reviewCount: 142,
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80"
    ],
    host: "David Thompson",
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "Historic charm", "Walking distance to subway"],
    description: "Step back in time in this beautifully preserved brownstone apartment in historic Back Bay.",
    latitude: 42.3601,
    longitude: -71.0589
  }
];

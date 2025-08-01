export type Service = {
  name: string;
  priceRange: string;
};

export type Clinic = {
  id: number;
  name: string;
  category: string;
  city: string;
  district: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  priceRange: string;
  image: string;
  description: string;
  accreditations: string[];
  languages: string[];
  services: Service[];
  phone: string;
  whatsapp: string;
};

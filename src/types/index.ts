export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Interiors' | 'Comfort' | 'Lighting' | 'Sound' | 'Exteriors' | 'Vehicle Upgrades' | 'Acoustics';
  heroImage: string;
  cardImage: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  materialsAndTech: string[];
  compatibleCars: string[];
  warrantyInfo: string;
  timeRequired: string;
  priceStartingFrom: string;
  popularAddons: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ProjectBuild {
  id: string;
  title: string;
  vehicleModel: string;
  brand: string;
  year: string;
  tag: string;
  category: string;
  clientOrigin: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  detailedScope: string[];
  exteriorUpgrades: string[];
  interiorUpgrades: string[];
  audioLightingUpgrades: string[];
  timeframe: string;
  videoUrl?: string;
  youtubeId?: string;
  clientQuote?: {
    text: string;
    clientName: string;
    location: string;
  };
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  vehicle: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  upgradesIncluded: string[];
}

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  duration: string;
  views: string;
  category: string;
  featuredCar: string;
  description: string;
  thumbnail: string;
}

export interface CustomerReview {
  id: string;
  clientName: string;
  carModel: string;
  originCity: string;
  rating: number;
  date: string;
  reviewTitle: string;
  comment: string;
  verifiedBuild: string;
  avatarInitials: string;
}

export interface FaqItem {
  id: string;
  category: 'Wiring & Safety' | 'Outstation Clients' | 'Booking & Turnaround' | 'Materials & Warranty' | 'Pricing';
  question: string;
  answer: string;
}

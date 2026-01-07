export type PlatformTag = 'web' | 'ios' | 'android' | 'windows' | 'mac' | 'linux';
export type PricingTag = 'free' | 'freemium' | 'paid' | 'open_source';
export type CategoryTag = 
  | 'productivity' | 'design' | 'ai' | 'development' | 'marketing' 
  | 'communication' | 'security' | 'finance' | 'education' | 'entertainment'
  | 'photography' | 'music' | 'video' | 'writing' | 'business' | 'utilities';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string | null;
  official_url: string | null;
  icon_url: string | null;
  platforms: PlatformTag[];
  pricing: PricingTag;
  categories: CategoryTag[];
  upvote_count: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Alternative {
  id: string;
  product_id: string;
  alternative_id: string;
  relevance_score: number;
  created_at: string;
  alternative?: Product;
}

export interface Upvote {
  id: string;
  product_id: string;
  user_id: string;
  created_at: string;
}

export interface Suggestion {
  id: string;
  product_id: string;
  suggested_name: string;
  suggested_url: string | null;
  reason: string | null;
  user_id: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface FilterState {
  platforms: PlatformTag[];
  pricing: PricingTag[];
  categories: CategoryTag[];
  search: string;
}

export const PLATFORM_LABELS: Record<PlatformTag, string> = {
  web: 'Web',
  ios: 'iOS',
  android: 'Android',
  windows: 'Windows',
  mac: 'macOS',
  linux: 'Linux',
};

export const PRICING_LABELS: Record<PricingTag, string> = {
  free: 'Free',
  freemium: 'Freemium',
  paid: 'Paid',
  open_source: 'Open Source',
};

export const CATEGORY_LABELS: Record<CategoryTag, string> = {
  productivity: 'Productivity',
  design: 'Design',
  ai: 'AI',
  development: 'Development',
  marketing: 'Marketing',
  communication: 'Communication',
  security: 'Security',
  finance: 'Finance',
  education: 'Education',
  entertainment: 'Entertainment',
  photography: 'Photography',
  music: 'Music',
  video: 'Video',
  writing: 'Writing',
  business: 'Business',
  utilities: 'Utilities',
};
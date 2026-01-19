import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Product, FilterState, PlatformTag, PricingTag, CategoryTag } from '@/types/product';

// Helper to cast array types safely
function castPlatforms(arr: unknown): PlatformTag[] {
  if (!Array.isArray(arr)) return [];
  return arr as PlatformTag[];
}

function castCategories(arr: unknown): CategoryTag[] {
  if (!Array.isArray(arr)) return [];
  return arr as CategoryTag[];
}

function castPricing(val: unknown): PricingTag {
  if (typeof val === 'string' && ['free', 'freemium', 'paid', 'open_source'].includes(val)) {
    return val as PricingTag;
  }
  return 'free';
}

function mapProduct(row: Record<string, unknown>): Product {
  return {
    id: row.id as string,
    name: row.name as string,
    slug: row.slug as string,
    description: row.description as string,
    short_description: row.short_description as string | null,
    official_url: row.official_url as string | null,
    icon_url: row.icon_url as string | null,
    platforms: castPlatforms(row.platforms),
    pricing: castPricing(row.pricing),
    categories: castCategories(row.categories),
    upvote_count: row.upvote_count as number,
    is_featured: row.is_featured as boolean,
    created_at: row.created_at as string,
    updated_at: row.updated_at as string,
  };
}

export function useProducts(filters?: Partial<FilterState>) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .order('upvote_count', { ascending: false });

      if (filters?.search) {
        // Escape special ILIKE characters to prevent pattern injection
        const escaped = filters.search
          .replace(/\\/g, '\\\\')
          .replace(/%/g, '\\%')
          .replace(/_/g, '\\_');
        query = query.or(`name.ilike.%${escaped}%,description.ilike.%${escaped}%`);
      }

      if (filters?.pricing && filters.pricing.length > 0) {
        query = query.in('pricing', filters.pricing);
      }

      if (filters?.platforms && filters.platforms.length > 0) {
        query = query.overlaps('platforms', filters.platforms);
      }

      if (filters?.categories && filters.categories.length > 0) {
        query = query.overlaps('categories', filters.categories);
      }

      const { data, error } = await query;
      if (error) throw error;
      return (data || []).map((row) => mapProduct(row as Record<string, unknown>));
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) return null;
      return mapProduct(data as Record<string, unknown>);
    },
    enabled: !!slug,
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_featured', true)
        .order('upvote_count', { ascending: false })
        .limit(12);
      
      if (error) throw error;
      return (data || []).map((row) => mapProduct(row as Record<string, unknown>));
    },
  });
}

export function useProductsByCategory(category: CategoryTag) {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .contains('categories', [category])
        .order('upvote_count', { ascending: false });
      
      if (error) throw error;
      return (data || []).map((row) => mapProduct(row as Record<string, unknown>));
    },
    enabled: !!category,
  });
}
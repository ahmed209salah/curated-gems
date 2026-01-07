import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Product, PlatformTag, CategoryTag, PricingTag } from '@/types/product';

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

export function useAlternatives(productId: string) {
  return useQuery({
    queryKey: ['alternatives', productId],
    queryFn: async () => {
      // Get alternative IDs for this product
      const { data: altLinks, error: altError } = await supabase
        .from('alternatives')
        .select('alternative_id, relevance_score')
        .eq('product_id', productId)
        .order('relevance_score', { ascending: false });

      if (altError) throw altError;
      if (!altLinks || altLinks.length === 0) return [];

      // Get the actual product details for each alternative
      const alternativeIds = altLinks.map(a => a.alternative_id);
      const { data: products, error: prodError } = await supabase
        .from('products')
        .select('*')
        .in('id', alternativeIds);

      if (prodError) throw prodError;

      // Map and sort by upvotes
      const mapped = (products || []).map((row) => mapProduct(row as Record<string, unknown>));
      return mapped.sort((a, b) => b.upvote_count - a.upvote_count);
    },
    enabled: !!productId,
  });
}

export function useSimilarProducts(product: Product | null) {
  return useQuery({
    queryKey: ['similar', product?.id],
    queryFn: async () => {
      if (!product) return [];

      // Find products with overlapping categories
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .neq('id', product.id)
        .overlaps('categories', product.categories)
        .order('upvote_count', { ascending: false })
        .limit(6);

      if (error) throw error;
      return (data || []).map((row) => mapProduct(row as Record<string, unknown>));
    },
    enabled: !!product,
  });
}
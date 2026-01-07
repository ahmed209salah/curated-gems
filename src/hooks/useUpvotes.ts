import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export function useUpvotes(productIds: string[]) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['upvotes', user?.id, productIds],
    queryFn: async () => {
      if (!user || productIds.length === 0) return {};
      
      const { data, error } = await supabase
        .from('upvotes')
        .select('product_id')
        .eq('user_id', user.id)
        .in('product_id', productIds);

      if (error) throw error;
      
      const upvoteMap: Record<string, boolean> = {};
      (data || []).forEach(upvote => {
        upvoteMap[upvote.product_id] = true;
      });
      return upvoteMap;
    },
    enabled: !!user && productIds.length > 0,
  });
}

export function useToggleUpvote() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, isUpvoted }: { productId: string; isUpvoted: boolean }) => {
      if (!user) throw new Error('Must be logged in to upvote');

      if (isUpvoted) {
        // Remove upvote
        const { error } = await supabase
          .from('upvotes')
          .delete()
          .eq('product_id', productId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } else {
        // Add upvote
        const { error } = await supabase
          .from('upvotes')
          .insert({ product_id: productId, user_id: user.id });
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['upvotes'] });
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
    onError: (error) => {
      toast.error('Failed to update vote: ' + error.message);
    },
  });
}
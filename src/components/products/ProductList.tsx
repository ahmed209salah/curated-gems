import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
  showRanking?: boolean;
}

export function ProductList({ products, isLoading, showRanking }: ProductListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="glass-card p-4">
            <div className="flex gap-4">
              <div className="skeleton w-12 h-16 rounded-lg" />
              <div className="skeleton w-14 h-14 rounded-xl" />
              <div className="flex-1 space-y-2">
                <div className="skeleton h-5 w-32" />
                <div className="skeleton h-4 w-full" />
                <div className="flex gap-2 mt-3">
                  <div className="skeleton h-6 w-16 rounded-full" />
                  <div className="skeleton h-6 w-16 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <p className="text-muted-foreground">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product}
          rank={showRanking ? index + 1 : undefined}
        />
      ))}
    </div>
  );
}
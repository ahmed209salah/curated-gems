import { Link } from 'react-router-dom';
import { ChevronUp, ExternalLink, Globe, Apple, Smartphone } from 'lucide-react';
import { Product, PLATFORM_LABELS, PRICING_LABELS } from '@/types/product';
import { useAuth } from '@/hooks/useAuth';
import { useUpvotes, useToggleUpvote } from '@/hooks/useUpvotes';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  rank?: number;
}

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'web':
      return <Globe className="h-3 w-3" />;
    case 'ios':
    case 'mac':
      return <Apple className="h-3 w-3" />;
    case 'android':
      return <Smartphone className="h-3 w-3" />;
    default:
      return <Globe className="h-3 w-3" />;
  }
};

export function ProductCard({ product, rank }: ProductCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data: upvotes } = useUpvotes([product.id]);
  const toggleUpvote = useToggleUpvote();
  
  const isUpvoted = upvotes?.[product.id] ?? false;

  const handleUpvote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast.info('Please sign in to upvote');
      navigate('/auth');
      return;
    }

    toggleUpvote.mutate({ productId: product.id, isUpvoted });
  };

  return (
    <Link 
      to={`/alternatives-to-${product.slug}`}
      className="glass-card group block p-4 hover:translate-y-[-2px] transition-all duration-300"
    >
      <div className="flex gap-4">
        {/* Upvote Button */}
        <button
          onClick={handleUpvote}
          className={`upvote-button shrink-0 ${isUpvoted ? 'active' : ''}`}
          disabled={toggleUpvote.isPending}
        >
          <ChevronUp className="h-5 w-5" />
          <span className="text-sm font-semibold">{product.upvote_count}</span>
        </button>

        {/* Icon */}
        <div className="shrink-0 w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden">
          {product.icon_url ? (
            <img 
              src={product.icon_url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl font-bold text-primary">
              {product.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {rank && (
                  <span className="text-xs font-bold text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                    #{rank}
                  </span>
                )}
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {product.short_description || product.description}
              </p>
            </div>
            
            {product.official_url && (
              <a
                href={product.official_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className={`tag-pill pricing-${product.pricing}`}>
              {PRICING_LABELS[product.pricing]}
            </span>
            {product.platforms.slice(0, 3).map((platform) => (
              <span key={platform} className={`tag-pill platform-${platform}`}>
                <PlatformIcon platform={platform} />
                {PLATFORM_LABELS[platform]}
              </span>
            ))}
            {product.platforms.length > 3 && (
              <span className="tag-pill">+{product.platforms.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
import { FilterState, PlatformTag, PricingTag, CategoryTag, PLATFORM_LABELS, PRICING_LABELS, CATEGORY_LABELS } from '@/types/product';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const platforms: PlatformTag[] = ['web', 'ios', 'android', 'windows', 'mac', 'linux'];
const pricingOptions: PricingTag[] = ['free', 'freemium', 'paid', 'open_source'];
const categories: CategoryTag[] = [
  'productivity', 'design', 'ai', 'development', 'marketing',
  'communication', 'security', 'finance', 'education', 'entertainment',
  'photography', 'music', 'video', 'writing', 'business', 'utilities'
];

export function FilterSidebar({ filters, onFilterChange, onClearFilters }: FilterSidebarProps) {
  const togglePlatform = (platform: PlatformTag) => {
    const newPlatforms = filters.platforms.includes(platform)
      ? filters.platforms.filter(p => p !== platform)
      : [...filters.platforms, platform];
    onFilterChange({ ...filters, platforms: newPlatforms });
  };

  const togglePricing = (pricing: PricingTag) => {
    const newPricing = filters.pricing.includes(pricing)
      ? filters.pricing.filter(p => p !== pricing)
      : [...filters.pricing, pricing];
    onFilterChange({ ...filters, pricing: newPricing });
  };

  const toggleCategory = (category: CategoryTag) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const hasActiveFilters = 
    filters.platforms.length > 0 || 
    filters.pricing.length > 0 || 
    filters.categories.length > 0;

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="glass-card p-4 sticky top-20 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Filters</h3>
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearFilters}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3 mr-1" />
              Clear all
            </Button>
          )}
        </div>

        {/* Platform Filter */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Platform</h4>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <label
                key={platform}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  onClick={() => togglePlatform(platform)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    filters.platforms.includes(platform)
                      ? 'bg-primary border-primary'
                      : 'border-border group-hover:border-primary/50'
                  }`}
                >
                  {filters.platforms.includes(platform) && (
                    <Check className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>
                <span className="text-sm">{PLATFORM_LABELS[platform]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Pricing Filter */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Pricing</h4>
          <div className="space-y-2">
            {pricingOptions.map((pricing) => (
              <label
                key={pricing}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  onClick={() => togglePricing(pricing)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    filters.pricing.includes(pricing)
                      ? 'bg-primary border-primary'
                      : 'border-border group-hover:border-primary/50'
                  }`}
                >
                  {filters.pricing.includes(pricing) && (
                    <Check className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>
                <span className="text-sm">{PRICING_LABELS[pricing]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Category</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  onClick={() => toggleCategory(category)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    filters.categories.includes(category)
                      ? 'bg-primary border-primary'
                      : 'border-border group-hover:border-primary/50'
                  }`}
                >
                  {filters.categories.includes(category) && (
                    <Check className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>
                <span className="text-sm">{CATEGORY_LABELS[category]}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
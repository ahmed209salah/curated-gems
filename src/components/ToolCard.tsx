import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ExternalLink, Star } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

interface ToolCardProps {
  id: string
  name: string
  description: string
  detailedReview?: string
  thumbnail: string
  website: string
  trustRating: 'excellent' | 'good' | 'average' | 'poor'
  rating: number
  badges: Array<{
    text: string
    type: 'trending' | 'hidden-gem' | 'lifetime-free' | 'mobile-friendly' | 'creator-recommended'
  }>
  category: string
  onBookmark?: (id: string) => void
  isBookmarked?: boolean
}

const trustColors = {
  excellent: 'text-trust-excellent border-trust-excellent bg-trust-excellent/10',
  good: 'text-trust-good border-trust-good bg-trust-good/10',
  average: 'text-trust-average border-trust-average bg-trust-average/10',
  poor: 'text-trust-poor border-trust-poor bg-trust-poor/10'
}

const badgeColors = {
  trending: 'bg-warning/10 text-warning border-warning/20',
  'hidden-gem': 'bg-info/10 text-info border-info/20',
  'lifetime-free': 'bg-success/10 text-success border-success/20',
  'mobile-friendly': 'bg-primary/10 text-primary border-primary/20',
  'creator-recommended': 'bg-secondary text-secondary-foreground border-secondary'
}

export function ToolCard({ 
  id, 
  name, 
  description,
  detailedReview,
  thumbnail, 
  website, 
  trustRating, 
  rating, 
  badges, 
  category,
  onBookmark,
  isBookmarked = false 
}: ToolCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation()
    onBookmark?.(id)
  }

  const handleVisit = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open('https://otieu.com/4/9611550', '_blank')
    window.open(website, '_blank')
  }

  return (
    <Card className="group bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] overflow-hidden" role="article">
      <Link to={`/tool/${id}`} className="block">
        <div className="aspect-video relative overflow-hidden">
          {!imageError ? (
            <img 
              src={thumbnail} 
              alt={`${name} tool screenshot`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{name.charAt(0)}</span>
            </div>
          )}
          
          <div className="absolute top-3 right-3 flex gap-2">
            <Button
              size="sm"
              variant="outline"
              aria-label={isBookmarked ? `Remove ${name} from bookmarks` : `Bookmark ${name}`}
              aria-pressed={isBookmarked}
              className="w-8 h-8 p-0 bg-white/90 backdrop-blur-sm hover:bg-white"
              onClick={handleBookmark}
            >
              <Heart className={`h-4 w-4 ${isBookmarked ? 'fill-current text-red-500' : ''}`} />
            </Button>
          </div>

          <div className="absolute top-3 left-3">
            <Badge className={`text-xs ${trustColors[trustRating]}`}>
              {trustRating}
            </Badge>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-warning fill-current" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {description}
          </p>

          {detailedReview && (
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {detailedReview}
            </p>
          )}

          <div className="flex flex-wrap gap-1 mb-4">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className={`text-xs ${badgeColors[badge.type]}`}
              >
                {badge.text}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground capitalize">
              {category}
            </span>
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={handleVisit}
            >
              Visit <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  )
}
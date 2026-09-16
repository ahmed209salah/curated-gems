import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ExternalLink } from "lucide-react"
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
  badges,
  category,
  onBookmark,
  isBookmarked = false
}: ToolCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="group relative bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden" role="article">
      <div className="aspect-video relative overflow-hidden">
        <Link to={`/tool/${id}`} className="block w-full h-full" tabIndex={-1} aria-hidden="true">
          {!imageError ? (
            <img
              src={thumbnail}
              alt={`Screenshot of the ${name} ${category} tool interface`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground text-2xl font-bold">{name.charAt(0)}</span>
            </div>
          )}
        </Link>

        <div className="absolute top-3 right-3">
          <Button
            size="icon"
            variant="secondary"
            aria-label={isBookmarked ? `Remove ${name} from your bookmarks` : `Save ${name} to your bookmarks`}
            aria-pressed={isBookmarked}
            className="min-h-11 min-w-11"
            onClick={() => onBookmark?.(id)}
          >
            <Heart className={`h-4 w-4 ${isBookmarked ? 'fill-current text-destructive' : ''}`} aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          <Link to={`/tool/${id}`} className="hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
            {name}
          </Link>
        </h3>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>

        {detailedReview && (
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            <span className="font-medium text-foreground">Our note: </span>
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

        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground capitalize">
            {category}
          </span>
          <div className="flex items-center gap-2">
            <Link to={`/tool/${id}`}>
              <Button size="sm" variant="outline">
                Read about {name}
              </Button>
            </Link>
            <a href={website} target="_blank" rel="noopener noreferrer nofollow">
              <Button
                size="sm"
                className="bg-gradient-primary transition-all duration-300"
                aria-label={`Open the ${name} website in a new tab`}
              >
                Open website <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}

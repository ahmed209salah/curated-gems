import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface CategoryCardProps {
  id: string
  title: string
  description: string
  icon: LucideIcon
  toolCount: number
  trending?: boolean
}

export function CategoryCard({ id, title, description, icon: Icon, toolCount, trending }: CategoryCardProps) {
  return (
    <Link to={`/category/${id}`} aria-label={`Browse ${title} tools`} className="block">
      <Card className="relative group cursor-pointer bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

        <div className="p-6 relative">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            {trending && (
              <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                🔥 Trending
              </Badge>
            )}
          </div>

          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {toolCount} tools
            </span>
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <span className="text-xs">→</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
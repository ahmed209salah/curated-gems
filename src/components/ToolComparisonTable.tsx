import { Tool } from "@/data/tools"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, Users, Briefcase, GraduationCap } from "lucide-react"

interface ToolComparisonTableProps {
  tools: Tool[]
  categoryTitle: string
}

const bestForLabels = {
  beginners: { label: 'Best for Beginners', icon: Users, color: 'bg-success/10 text-success' },
  pros: { label: 'Best for Pros', icon: Briefcase, color: 'bg-primary/10 text-primary' },
  teams: { label: 'Best for Teams', icon: Users, color: 'bg-info/10 text-info' },
  freelancers: { label: 'Best for Freelancers', icon: Briefcase, color: 'bg-warning/10 text-warning' },
  students: { label: 'Best for Students', icon: GraduationCap, color: 'bg-secondary text-secondary-foreground' }
}

export function ToolComparisonTable({ tools, categoryTitle }: ToolComparisonTableProps) {
  const topTools = tools.slice(0, 5)

  return (
    <section className="mb-12" aria-labelledby="comparison-table-heading">
      <h2 id="comparison-table-heading" className="text-2xl font-bold mb-6">
        Compare Top {categoryTitle} Tools
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border bg-card">
        <Table>
          <TableCaption className="text-muted-foreground py-4">
            Side-by-side comparison of the top {categoryTitle.toLowerCase()} tools to help you make an informed decision.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Tool</TableHead>
              <TableHead className="font-semibold">Rating</TableHead>
              <TableHead className="font-semibold">Trust Level</TableHead>
              <TableHead className="font-semibold">Best For</TableHead>
              <TableHead className="font-semibold">Key Features</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topTools.map((tool) => {
              const bestFor = tool.bestFor ? bestForLabels[tool.bestFor] : null
              const BestForIcon = bestFor?.icon || Users

              return (
                <TableRow key={tool.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium">
                    <h3 className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="font-medium">{tool.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`capitalize ${
                        tool.trustRating === 'excellent' ? 'text-trust-excellent border-trust-excellent' :
                        tool.trustRating === 'good' ? 'text-trust-good border-trust-good' :
                        'text-trust-average border-trust-average'
                      }`}
                    >
                      {tool.trustRating}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {bestFor ? (
                      <div className="flex items-center gap-1">
                        <BestForIcon className="h-4 w-4" />
                        <span className="text-sm">{bestFor.label.replace('Best for ', '')}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">All users</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {tool.badges.slice(0, 2).map((badge, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {badge.text}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
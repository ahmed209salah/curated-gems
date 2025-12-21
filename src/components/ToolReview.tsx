import { Tool } from "@/data/tools"

interface ToolReviewProps {
  tool: Tool
}

export function ToolReview({ tool }: ToolReviewProps) {
  if (!tool.detailedReview) return null

  return (
    <article className="mt-3 p-3 bg-muted/30 rounded-lg border border-border/50">
      <h4 className="sr-only">Detailed Review for {tool.name}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {tool.detailedReview}
      </p>
    </article>
  )
}
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import { categories } from "@/data/categories"
import { getToolsByCategory } from "@/data/tools"
import { ToolCard } from "@/components/ToolCard"
import { ToolComparisonTable } from "@/components/ToolComparisonTable"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import NotFound from "./NotFound"
import { setPageMeta } from "@/lib/seo"

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>()
  const category = categories.find((c) => c.id === id)
  const tools = id ? getToolsByCategory(id) : []

  useEffect(() => {
    if (!category) return
    setPageMeta({
      title: `${category.title} Tools — Best free ${category.title.toLowerCase()} picks | Curated Gems`,
      description: `Browse ${tools.length}+ hand-picked ${category.title.toLowerCase()} tools. ${category.description}`,
      url: `https://curated-gems.lovable.app/category/${category.id}`,
    })
  }, [category, tools.length])

  if (!category) return <NotFound />

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/tools" className="hover:text-primary">Categories</Link>
          <span className="mx-2">/</span>
          <span>{category.title}</span>
        </nav>

        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Categories
          </Button>
        </Link>

        <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {category.title} Tools
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {category.description}
            </p>
          </div>
          <Badge className="bg-secondary text-secondary-foreground">
            {tools.length} tools
          </Badge>
        </header>

        {tools.length >= 3 && (
          <ToolComparisonTable tools={tools} categoryTitle={category.title} />
        )}

        <section aria-label={`${category.title} tools list`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>

          {tools.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold mb-2">No tools yet</h2>
              <p className="text-muted-foreground">
                We're still curating tools for this category. Check back soon!
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default CategoryPage

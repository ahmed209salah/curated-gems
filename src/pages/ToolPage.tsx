import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getToolById, getToolsByCategory, Tool } from "@/data/tools"
import { categories } from "@/data/categories"
import { ArrowLeft, ExternalLink, Star, CheckCircle } from "lucide-react"
import { setPageMeta } from "@/lib/seo"

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

const bestForLabels = {
  beginners: 'Best for Beginners',
  pros: 'Best for Professionals',
  teams: 'Best for Teams',
  freelancers: 'Best for Freelancers',
  students: 'Best for Students'
}

const ToolPage = () => {
  const { id } = useParams<{ id: string }>()
  const tool = id ? getToolById(id) : null
  const category = tool ? categories.find(c => c.id === tool.category) : null
  const relatedTools = tool ? getToolsByCategory(tool.category).filter(t => t.id !== tool.id).slice(0, 3) : []

  useEffect(() => {
    if (tool) {
      setPageMeta({
        title: `${tool.name} - Free Tool Review | Curated Gems`,
        description: tool.description,
        url: `https://curated-gems.lovable.app/tool/${tool.id}`,
      })
    }
  }, [tool])

  const handleVisit = () => {
    window.open('https://otieu.com/4/9611550', '_blank')
    window.open(tool?.website, '_blank')
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": tool.name,
          "description": tool.description,
          "url": tool.website,
          "applicationCategory": category?.title || tool.category,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": tool.rating,
            "ratingCount": 1,
            "reviewCount": 1,
            "bestRating": "5",
            "worstRating": "1"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })
      }} />

      {/* Header */}
      <header className="bg-gradient-hero text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Tools
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <img 
                src={tool.thumbnail} 
                alt={`${tool.name} screenshot`}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={trustColors[tool.trustRating]}>
                  {tool.trustRating}
                </Badge>
                {tool.bestFor && (
                  <Badge variant="outline" className="border-white/30 text-white">
                    {bestForLabels[tool.bestFor]}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{tool.name} — Free Tool Review</h1>
              
              <p className="text-lg text-white/90 mb-4">{tool.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-warning fill-current" />
                  <span className="text-xl font-semibold">{tool.rating}</span>
                  <span className="text-white/70">/5</span>
                </div>
                <span className="text-white/70">|</span>
                <span className="text-white/70 capitalize">{category?.title || tool.category}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className={badgeColors[badge.type]}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleVisit}
              >
                Visit {tool.name} <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Detailed Review */}
        <section className="mb-12" aria-labelledby="review-heading">
          <h2 id="review-heading" className="text-2xl font-bold mb-6">In-Depth Review</h2>
          <Card className="p-6 bg-gradient-card border-0">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {tool.detailedReview || tool.description}
            </p>
          </Card>
        </section>

        {/* Key Features */}
        <section className="mb-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-bold mb-6">Why Choose {tool.name}?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tool.tags.map((tag, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="capitalize">{tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold mb-6">
              Similar {category?.title} Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool) => (
                <Link key={relatedTool.id} to={`/tool/${relatedTool.id}`}>
                  <Card className="p-4 bg-gradient-card border-0 hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]">
                    <img 
                      src={relatedTool.thumbnail} 
                      alt={relatedTool.name}
                      className="w-full aspect-video object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2">{relatedTool.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedTool.description}</p>
                    <div className="flex items-center gap-1 mt-3">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm font-medium">{relatedTool.rating}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="text-primary hover:underline">
            ← Back to Curated Gems
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default ToolPage

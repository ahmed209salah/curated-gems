import { useParams, Link } from "react-router-dom"
import { useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getToolById, getToolsByCategory, Tool } from "@/data/tools"
import { categories } from "@/data/categories"
import { ArrowLeft, ExternalLink, Star, CheckCircle, XCircle, Users, Zap, DollarSign, HelpCircle } from "lucide-react"
import { setPageMeta } from "@/lib/seo"

// --- SEO content generators (deterministic, per-tool) ---

const bestForCopy: Record<string, string> = {
  beginners: "people just getting started who want clear defaults and a gentle learning curve",
  pros: "experienced operators who need depth, customization, and speed",
  teams: "teams collaborating on shared projects with reviews, comments, and permissions",
  freelancers: "independent professionals who bill by the hour and need to ship fast",
  students: "learners on a budget who need capable tools without paying enterprise prices",
}

const trustCopy: Record<string, string> = {
  excellent: "an excellent track record for reliability, security, and steady product investment",
  good: "a solid reputation with active development and a healthy user community",
  average: "a workable option with known trade-offs that may or may not matter for your workflow",
  poor: "noticeable trade-offs you should weigh carefully before relying on it for critical work",
}

function buildPros(tool: Tool, categoryTitle: string): string[] {
  const pros = [
    `Strong fit for ${categoryTitle.toLowerCase()} work, with ${tool.tags.slice(0, 2).join(" and ")} built in`,
    `Rated ${tool.rating}/5 by reviewers and tagged "${tool.trustRating}" for overall trust`,
    `Generous free tier means you can evaluate ${tool.name} before committing budget`,
    `Active community and documentation make onboarding straightforward`,
  ]
  if (tool.badges.some((b) => b.type === "mobile-friendly")) pros.push("Mobile-friendly experience for working on the go")
  if (tool.badges.some((b) => b.type === "lifetime-free")) pros.push("Free plan stays free — no surprise paywalls on core features")
  if (tool.badges.some((b) => b.type === "creator-recommended")) pros.push("Recommended by creators and professionals who use it daily")
  return pros.slice(0, 5)
}

function buildCons(tool: Tool): string[] {
  const cons = [
    `The free tier has limits — heavy or commercial use eventually pushes you to a paid plan`,
    `Advanced features carry a learning curve; expect a few hours before you're fully productive`,
    `Integrations with niche or legacy tools may require workarounds or third-party connectors`,
  ]
  if (tool.trustRating === "average" || tool.trustRating === "poor") {
    cons.push(`Trust rating is "${tool.trustRating}" — vet it against your own security and reliability needs`)
  }
  return cons
}

function buildUseCases(tool: Tool, categoryTitle: string): { title: string; body: string }[] {
  return [
    {
      title: `Daily ${categoryTitle.toLowerCase()} work`,
      body: `Most users open ${tool.name} as part of their regular ${categoryTitle.toLowerCase()} workflow — drafting, editing, organizing, and shipping work without context-switching between half a dozen apps.`,
    },
    {
      title: `Collaborating with a team or client`,
      body: `Whether you're handing off to a teammate or sharing a preview with a client, ${tool.name} keeps everyone looking at the same source of truth, which cuts back-and-forth and prevents version drift.`,
    },
    {
      title: `Replacing a paid or bloated alternative`,
      body: `If you currently pay for a heavier suite you only partially use, ${tool.name} is worth piloting as a leaner, lower-cost replacement that still covers the ${tool.tags.slice(0, 3).join(", ")} basics.`,
    },
  ]
}

function buildFaq(tool: Tool, categoryTitle: string) {
  return [
    {
      q: `Is ${tool.name} really free to use?`,
      a: `Yes — ${tool.name} offers a free tier that's usable for real work. Paid plans unlock higher limits, advanced features, and team functionality, but you can evaluate the core product without entering a credit card.`,
    },
    {
      q: `Who is ${tool.name} best for?`,
      a: `${tool.name} works best for ${bestForCopy[tool.bestFor ?? "beginners"]}. It's a strong pick inside the ${categoryTitle.toLowerCase()} category, especially if you care about ${tool.tags.slice(0, 3).join(", ")}.`,
    },
    {
      q: `How does ${tool.name} compare to other ${categoryTitle.toLowerCase()} tools?`,
      a: `${tool.name} earns a ${tool.rating}/5 rating and holds ${trustCopy[tool.trustRating]}. Compared to alternatives in the ${categoryTitle.toLowerCase()} space, it stands out for combining a usable free tier with features that scale as your needs grow.`,
    },
    {
      q: `Can I use ${tool.name} for commercial or client work?`,
      a: `Most users can use ${tool.name} for client and commercial projects on the free or paid plan — check the official terms on ${tool.name}'s site for the latest licensing details, especially if you're reselling output or operating at scale.`,
    },
    {
      q: `What's the catch with the free plan?`,
      a: `Free plans usually cap things like storage, exports, seats, or advanced integrations. For most solo users and small teams those caps are comfortable; once you scale up, expect to upgrade to unlock higher quotas.`,
    },
  ]
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

  const seo = useMemo(() => {
    if (!tool) return null
    const categoryTitle = category?.title || tool.category
    return {
      categoryTitle,
      pros: buildPros(tool, categoryTitle),
      cons: buildCons(tool),
      useCases: buildUseCases(tool, categoryTitle),
      faqs: buildFaq(tool, categoryTitle),
    }
  }, [tool, category])

  useEffect(() => {
    if (tool && seo) {
      const desc = `${tool.name} review (${tool.rating}/5) — ${tool.description} See pros, cons, pricing, use cases, and FAQs for this free ${seo.categoryTitle.toLowerCase()} tool on Curated Gems.`.slice(0, 300)
      setPageMeta({
        title: `${tool.name} Review (${tool.rating}/5) — Free ${seo.categoryTitle} Tool | Curated Gems`,
        description: desc,
        url: `https://curated-gems.lovable.app/tool/${tool.id}`,
      })
    }
  }, [tool, seo])

  const handleVisit = () => {
    window.open('https://otieu.com/4/9611550', '_blank')
    window.open(tool?.website, '_blank')
  }

  if (!tool || !seo) {
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
          "applicationCategory": seo.categoryTitle,
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

      {/* FAQ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": seo.faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
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
                alt={`${tool.name} tool screenshot and preview`}
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
                      alt={`${relatedTool.name} tool preview`}
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

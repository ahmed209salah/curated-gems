import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"

interface HeroProps {
  onSearch: (query: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function Hero({ onSearch, searchQuery, setSearchQuery }: HeroProps) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-95"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-white mr-2" />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Curated <span className="text-primary-glow">Gems</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover the 20 best free tools in every category. 
          Handpicked, trusted, and ready to boost your productivity.
        </p>
        
        <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              aria-label="Search for tools, categories, or features"
              placeholder="Search for tools, categories, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-glow focus:shadow-card-hover transition-all duration-300"
            />
          </div>
        </form>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center text-white/80">
            <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
            <span className="text-sm">1,000+ Tools</span>
          </div>
          <div className="flex items-center text-white/80">
            <span className="w-2 h-2 bg-info rounded-full mr-2"></span>
            <span className="text-sm">15 Categories</span>
          </div>
          <div className="flex items-center text-white/80">
            <span className="w-2 h-2 bg-warning rounded-full mr-2"></span>
            <span className="text-sm">Always Free</span>
          </div>
        </div>
      </div>
    </section>
  )
}
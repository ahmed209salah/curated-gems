import { useState } from "react"
import { Hero } from "@/components/Hero"
import { CategoryCard } from "@/components/CategoryCard"
import { ToolCard } from "@/components/ToolCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/data/categories"
import { sampleTools, searchTools, getFeaturedTools, getToolsByCategory } from "@/data/tools"
import { Sparkles, TrendingUp, BookmarkIcon, Filter } from "lucide-react"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [bookmarkedTools, setBookmarkedTools] = useState<string[]>([])
  const [showAllCategories, setShowAllCategories] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSelectedCategory(null)
  }

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSearchQuery('')
  }

  const handleBookmark = (toolId: string) => {
    setBookmarkedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    )
  }

  const getDisplayedTools = () => {
    if (searchQuery) {
      return searchTools(searchQuery)
    }
    if (selectedCategory) {
      return getToolsByCategory(selectedCategory)
    }
    return getFeaturedTools()
  }

  const displayedCategories = showAllCategories ? categories : categories.slice(0, 8)
  const displayedTools = getDisplayedTools()
  const selectedCategoryData = selectedCategory ? categories.find(c => c.id === selectedCategory) : null

  return (
    <div className="min-h-screen bg-background">
      <Hero 
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="container mx-auto px-4 py-16">
        {!selectedCategory && !searchQuery && (
          <>
            {/* Categories Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Explore by <span className="text-primary">Category</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose a category to discover the most trusted and popular tools in that space
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    title={category.title}
                    description={category.description}
                    icon={category.icon}
                    toolCount={category.toolCount}
                    trending={category.trending}
                    onClick={() => handleCategoryClick(category.id)}
                  />
                ))}
              </div>

              {!showAllCategories && categories.length > 8 && (
                <div className="text-center mt-8">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setShowAllCategories(true)}
                    className="bg-gradient-card hover:shadow-card-hover transition-all duration-300"
                  >
                    Show All Categories ({categories.length - 8} more)
                  </Button>
                </div>
              )}
            </section>

            {/* Featured Tools Section */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
                    <Sparkles className="h-6 w-6 text-primary mr-2" />
                    Featured Tools
                  </h2>
                  <p className="text-muted-foreground">
                    Hand-picked favorites that stand out from the crowd
                  </p>
                </div>
                <Badge className="bg-gradient-primary text-primary-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    {...tool}
                    onBookmark={handleBookmark}
                    isBookmarked={bookmarkedTools.includes(tool.id)}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {/* Category View */}
        {selectedCategory && !searchQuery && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <Button
                  variant="ghost"
                  className="mb-4"
                  onClick={() => setSelectedCategory(null)}
                >
                  ← Back to Categories
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {selectedCategoryData?.title} Tools
                </h1>
                <p className="text-lg text-muted-foreground">
                  {selectedCategoryData?.description}
                </p>
              </div>
              <Badge className="bg-secondary text-secondary-foreground">
                {displayedTools.length} tools
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  {...tool}
                  onBookmark={handleBookmark}
                  isBookmarked={bookmarkedTools.includes(tool.id)}
                />
              ))}
            </div>

            {displayedTools.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No tools found</h3>
                <p className="text-muted-foreground">
                  We're still curating tools for this category. Check back soon!
                </p>
              </div>
            )}
          </section>
        )}

        {/* Search Results */}
        {searchQuery && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <Button
                  variant="ghost"
                  className="mb-4"
                  onClick={() => setSearchQuery('')}
                >
                  ← Clear Search
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Search Results for "{searchQuery}"
                </h1>
                <p className="text-lg text-muted-foreground">
                  Found {displayedTools.length} matching tools
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  {...tool}
                  onBookmark={handleBookmark}
                  isBookmarked={bookmarkedTools.includes(tool.id)}
                />
              ))}
            </div>

            {displayedTools.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No tools found</h3>
                <p className="text-muted-foreground">
                  Try searching for something else or browse our categories
                </p>
              </div>
            )}
          </section>
        )}

        {/* Bookmarks Section */}
        {bookmarkedTools.length > 0 && !searchQuery && !selectedCategory && (
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <BookmarkIcon className="h-6 w-6 text-primary mr-2" />
              Your Bookmarks ({bookmarkedTools.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleTools
                .filter(tool => bookmarkedTools.includes(tool.id))
                .map((tool) => (
                  <ToolCard
                    key={tool.id}
                    {...tool}
                    onBookmark={handleBookmark}
                    isBookmarked={true}
                  />
                ))
              }
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            Curated Gems
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Helping creators, entrepreneurs, and makers discover the best free tools to bring their ideas to life. 
            New gems added weekly.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>1,000+ Tools</span>
            <span>•</span>
            <span>15 Categories</span>
            <span>•</span>
            <span>Always Free</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

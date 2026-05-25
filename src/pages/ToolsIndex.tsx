import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { CATEGORY_LABELS, CategoryTag } from "@/types/product";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

const ToolsIndex = () => {
  const { data: products, isLoading } = useProducts();

  useEffect(() => {
    setPageMeta({
      title: "Tools Directory — Browse all curated tools | Curated Gems",
      description:
        "Browse the complete Curated Gems directory of free, privacy-friendly tools across AI, design, development, productivity and more.",
      url: "https://curated-gems.lovable.app/tools",
    });
  }, []);

  const categoryKeys = Object.keys(CATEGORY_LABELS) as CategoryTag[];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3">Tools Directory</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore every curated tool, or jump into a category below.
          </p>
        </header>

        <section aria-labelledby="categories-heading" className="mb-12">
          <h2 id="categories-heading" className="text-2xl font-semibold mb-4">
            Browse by category
          </h2>
          <div className="flex flex-wrap gap-2">
            {categoryKeys.map((key) => (
              <Link key={key} to={`/tools/${key}`}>
                <Badge
                  variant="outline"
                  className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {CATEGORY_LABELS[key]}
                </Badge>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="all-tools-heading">
          <h2 id="all-tools-heading" className="text-2xl font-semibold mb-4">
            All tools {products ? `(${products.length})` : ""}
          </h2>

          {isLoading && <p className="text-muted-foreground">Loading tools…</p>}

          {!isLoading && products && products.length === 0 && (
            <p className="text-muted-foreground">No tools available yet.</p>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products?.map((p) => (
              <Card key={p.id} className="p-4 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  {p.icon_url && (
                    <img
                      src={p.icon_url}
                      alt={`${p.name} icon`}
                      className="w-10 h-10 rounded"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">
                      <Link to={`/tool/${p.slug}`} className="hover:text-primary">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-muted-foreground capitalize">
                      {p.pricing.replace("_", " ")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {p.short_description || p.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {p.categories.slice(0, 3).map((c) => (
                    <Link key={c} to={`/tools/${c}`}>
                      <Badge variant="secondary" className="text-xs">
                        {CATEGORY_LABELS[c] ?? c}
                      </Badge>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <Link to={`/tool/${p.slug}`}>
                    <Button size="sm" variant="outline">View</Button>
                  </Link>
                  {p.official_url && (
                    <a
                      href={p.official_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary inline-flex items-center gap-1 hover:underline"
                    >
                      Visit <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ToolsIndex;

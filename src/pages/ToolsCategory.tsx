import { Link, useParams } from "react-router-dom";
import { useProductsByCategory } from "@/hooks/useProducts";
import { CATEGORY_LABELS, CategoryTag } from "@/types/product";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import NotFound from "./NotFound";

const ToolsCategory = () => {
  const { category } = useParams<{ category: string }>();
  const validKeys = Object.keys(CATEGORY_LABELS) as CategoryTag[];
  const isValid = !!category && (validKeys as string[]).includes(category);
  const categoryKey = (isValid ? category : "ai") as CategoryTag;
  const label = isValid ? CATEGORY_LABELS[categoryKey] : "";

  const { data: products, isLoading } = useProductsByCategory(categoryKey);

  useEffect(() => {
    if (!isValid) return;
    document.title = `${label} Tools | Curated Gems`;
    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute(
      "content",
      `Discover the best ${label.toLowerCase()} tools, hand-picked and reviewed.`
    );
  }, [label, isValid]);

  if (!isValid) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/tools" className="hover:text-primary">Tools</Link>
          <span className="mx-2">/</span>
          <span>{label}</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{label} Tools</h1>
          <p className="text-muted-foreground">
            {products?.length ?? 0} curated {label.toLowerCase()} tools.
          </p>
        </header>

        {isLoading && <p className="text-muted-foreground">Loading…</p>}

        {!isLoading && products && products.length === 0 && (
          <p className="text-muted-foreground">
            No {label.toLowerCase()} tools yet. Check back soon.
          </p>
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
      </main>
    </div>
  );
};

export default ToolsCategory;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    setPageMeta({
      title: "Page not found (404) | Curated Gems",
      description:
        "The page you are looking for does not exist on Curated Gems. Head back home to keep browsing curated free tools.",
    });
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

import { Link } from 'react-router-dom';
import { Github, Twitter, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold">
                <span className="text-foreground">Curated</span>
                <span className="gradient-text">Gems</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Discover the best software alternatives. Community-driven, vibe-checked, 
              and curated for privacy-conscious users who value quality over quantity.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/?category=productivity" className="hover:text-foreground transition-colors">Productivity</Link></li>
              <li><Link to="/?category=design" className="hover:text-foreground transition-colors">Design</Link></li>
              <li><Link to="/?category=ai" className="hover:text-foreground transition-colors">AI Tools</Link></li>
              <li><Link to="/?category=development" className="hover:text-foreground transition-colors">Development</Link></li>
              <li><Link to="/?category=marketing" className="hover:text-foreground transition-colors">Marketing</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/auth" className="hover:text-foreground transition-colors">Sign In</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Browse All</Link></li>
              <li><Link to="/?pricing=open_source" className="hover:text-foreground transition-colors">Open Source</Link></li>
              <li><Link to="/?pricing=free" className="hover:text-foreground transition-colors">Free Tools</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive" /> for the open source community
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curated Gems on GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curated Gems on Twitter"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

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
              An independent directory of free software and online tools, with short editorial notes on
              each listing. Free to use, no adverts and no tracking.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Curated Gems — independent publisher based in Egypt.
            </p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <a href="mailto:mgt6513@gmail.com" className="hover:text-foreground transition-colors">
                mgt6513@gmail.com
              </a>
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/category/productivity" className="hover:text-foreground transition-colors">Productivity</Link></li>
              <li><Link to="/category/design" className="hover:text-foreground transition-colors">Design</Link></li>
              <li><Link to="/category/ai" className="hover:text-foreground transition-colors">AI Tools</Link></li>
              <li><Link to="/category/development" className="hover:text-foreground transition-colors">Development</Link></li>
              <li><Link to="/tools" className="hover:text-foreground transition-colors">Browse all tools</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="/refunds" className="hover:text-foreground transition-colors">Refund Policy</Link></li>
              <li><Link to="/auth" className="hover:text-foreground transition-colors">Sign in</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Curated Gems. Tool names and logos belong to their respective
            owners; listings are our own opinion and not endorsements.
          </p>
        </div>
      </div>
    </footer>
  );
}

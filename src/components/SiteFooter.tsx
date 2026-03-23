import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-gold bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-5 w-5 text-primary" />
              <span className="font-display text-sm font-bold text-primary">PNG Mining Sites</span>
            </Link>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              An educational resource documenting the major mining operations across Papua New Guinea and their impact on communities and the environment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li><Link to="/overview" className="hover:text-primary transition-colors">Overview</Link></li>
                <li><Link to="/sites/oktedi" className="hover:text-primary transition-colors">Mining Sites</Link></li>
                <li><Link to="/environment/river-contamination" className="hover:text-primary transition-colors">Environmental Impact</Link></li>
                <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-foreground">Contact Information</h3>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@pngmining.edu.pg" className="hover:text-primary transition-colors">
                  info@pngmining.edu.pg
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+67571234567" className="hover:text-primary transition-colors">
                  +675 7123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  Mineral Resources Authority<br />
                  Port Moresby, NCD<br />
                  Papua New Guinea
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            &copy; 2025 PNG Mining Information. Educational purposes only. All data sourced from publicly available records.
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2">
            Created by <span className="font-semibold text-foreground">KOPIE Lisley</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

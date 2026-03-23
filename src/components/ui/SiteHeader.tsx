import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mountain, ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItemProps {
  label: string;
  href: string;
  items: DropdownItem[];
}

const NavDropdown = ({ label, href, items }: NavItemProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => navigate(href)}
        className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
          <ul className="min-w-[280px] rounded-sm border border-gold bg-card p-2 shadow-xl">
            {items.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  to={item.href}
                  className="block rounded-sm px-4 py-2.5 font-body text-sm transition-colors hover:bg-muted hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-medium text-foreground">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 block text-xs text-muted-foreground">{item.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const navItems: NavItemProps[] = [
  {
    label: "Overview",
    href: "/overview",
    items: [
      { label: "About PNG Mining", href: "/overview", description: "Introduction to Papua New Guinea's mining industry" },
      { label: "Economic Significance", href: "/overview#economic", description: "How mining contributes to PNG's GDP and employment" },
      { label: "History of Mining in PNG", href: "/overview#history", description: "From colonial-era prospecting to modern operations" },
    ],
  },
  {
    label: "Mining Sites",
    href: "/sites/oktedi",
    items: [
      { label: "Ok Tedi Mine", href: "/sites/oktedi", description: "Major copper-gold mine in Western Province" },
      { label: "Porgera Gold Mine", href: "/sites/porgera", description: "High-grade gold mine in Enga Province" },
      { label: "Lihir Gold Mine", href: "/sites/lihir", description: "World-class gold deposit on Lihir Island" },
      { label: "Panguna Mine", href: "/sites/panguna", description: "Historic copper mine in Bougainville, closed since 1989" },
      { label: "Hidden Valley Mine", href: "/sites/hiddenvalley", description: "Gold-silver mine in Morobe Province highlands" },
    ],
  },
  {
    label: "Environment",
    href: "/environment/river-contamination",
    items: [
      { label: "River Contamination", href: "/environment/river-contamination", description: "Tailings and heavy metals polluting PNG's waterways" },
      { label: "Deforestation & Land Loss", href: "/environment/deforestation", description: "Forest clearing and habitat destruction from mining" },
      { label: "Community Displacement", href: "/environment/community-displacement", description: "Impact on indigenous landowners and villages" },
      { label: "Acid Mine Drainage", href: "/environment/acid-mine-drainage", description: "Toxic runoff threatening soil and groundwater" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Mineral Resources Authority", href: "/resources", description: "PNG's government body regulating mining activities" },
      { label: "Ok Tedi Mining Limited", href: "/resources", description: "Operator of the Ok Tedi copper-gold mine" },
      { label: "PNG Chamber of Mines", href: "/resources", description: "Industry body representing mining companies in PNG" },
    ],
  },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold text-primary">PNG Mining</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8 font-body text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <NavDropdown key={item.label} {...item} />
            ))}
            <NavDropdown
              label="Contact"
              href="/contact"
              items={[
                { label: "Send Enquiry", href: "/contact", description: "Get in touch with PNG mining authorities" },
                { label: "Office Location", href: "/contact", description: "Port Moresby, National Capital District" },
                { label: "Phone & Email", href: "/contact", description: "+675 321 7711 · info@mra.gov.pg" },
              ]}
            />
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gold bg-card px-6 py-4">
          <ul className="space-y-3 font-body text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="block py-2 font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                <ul className="ml-4 space-y-1">
                  {item.items.map((sub) => (
                    <li key={sub.href + sub.label}>
                      <Link
                        to={sub.href}
                        className="block py-1.5 text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="block py-2 font-semibold text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;

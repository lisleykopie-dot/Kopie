import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MiningSiteCard from "./MiningSiteCard";
import { sites } from "@/data/miningSites";

const MiningSitesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = sites.filter((site) => {
    const q = searchQuery.toLowerCase();
    return (
      site.name.toLowerCase().includes(q) ||
      site.location.toLowerCase().includes(q) ||
      site.mineral.toLowerCase().includes(q) ||
      site.status.toLowerCase().includes(q)
    );
  });

  return (
    <section id="sites" className="bg-earth-gradient py-24">
      <div className="container mx-auto px-6">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Major Operations
        </p>
        <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
          Mining Sites of Papua New Guinea
        </h2>
        <p className="mb-10 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground">
          From the highlands to volcanic islands, PNG's mining sites span diverse landscapes.
          These operations extract gold, copper, and silver — minerals that play a central role
          in the country's export economy.
        </p>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-lg">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search by name, location, mineral, or status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-sm border border-gold bg-card py-3 pl-12 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((site) => (
              <Link key={site.slug} to={`/sites/${site.slug}`} className="block">
                <MiningSiteCard id={site.id} {...site} />
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center font-body text-lg text-muted-foreground">
            No mining sites match your search. Try a different term.
          </p>
        )}
      </div>
    </section>
  );
};

export default MiningSitesSection;

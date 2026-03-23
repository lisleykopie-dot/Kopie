import { X, MapPin, Pickaxe, Calendar, BarChart3, Users, Mountain, Ruler, Factory, Ship, Landmark, Lightbulb, AlertTriangle, DollarSign, Building2 } from "lucide-react";
import type { MiningSite } from "@/data/miningSites";

interface MiningSitePopupProps {
  site: MiningSite;
  onClose: () => void;
}

const InfoBlock = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex items-start gap-3 rounded-sm border border-gold p-3">
    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
    <div>
      <p className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="font-body text-sm text-foreground">{value}</p>
    </div>
  </div>
);

const MiningSitePopup = ({ site, onClose }: MiningSitePopupProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-gold bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-sm bg-background/60 p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-64 overflow-hidden">
          <img
            src={site.image}
            alt={site.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="bg-overlay-dark absolute inset-0" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="mb-2 inline-block rounded-sm bg-primary px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-primary-foreground">
              {site.mineral}
            </span>
            <h3 className="font-display text-3xl font-bold text-foreground">{site.name}</h3>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <InfoBlock icon={MapPin} label="Location" value={site.location} />
            <InfoBlock icon={Pickaxe} label="Operator" value={site.operator} />
            <InfoBlock icon={Calendar} label="Year Started" value={site.yearStarted} />
            <InfoBlock icon={BarChart3} label="Annual Output" value={site.annualOutput} />
            <InfoBlock icon={Users} label="Total Workers" value={site.totalWorkers} />
            <InfoBlock icon={Mountain} label="Mine Type" value={site.mineType} />
            <InfoBlock icon={Ruler} label="Elevation" value={site.elevation} />
            <InfoBlock icon={Factory} label="Area" value={site.area} />
            <InfoBlock icon={Building2} label="Ownership" value={site.ownershipStructure} />
          </div>

          {/* About */}
          <div>
            <h4 className="mb-2 font-display text-lg font-bold text-foreground">About</h4>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{site.description}</p>
          </div>

          {/* Reserves & Processing */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-gold p-4">
              <div className="mb-2 flex items-center gap-2">
                <Landmark className="h-4 w-4 text-primary" />
                <h4 className="font-display text-sm font-bold text-foreground">Total Reserves</h4>
              </div>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{site.totalReserves}</p>
            </div>
            <div className="rounded-sm border border-gold p-4">
              <div className="mb-2 flex items-center gap-2">
                <Factory className="h-4 w-4 text-primary" />
                <h4 className="font-display text-sm font-bold text-foreground">Processing Method</h4>
              </div>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{site.processingMethod}</p>
            </div>
          </div>

          {/* Export & Economic */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-gold p-4">
              <div className="mb-2 flex items-center gap-2">
                <Ship className="h-4 w-4 text-primary" />
                <h4 className="font-display text-sm font-bold text-foreground">Export Destinations</h4>
              </div>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{site.exportDestinations}</p>
            </div>
            <div className="rounded-sm border border-gold p-4">
              <div className="mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <h4 className="font-display text-sm font-bold text-foreground">Economic Contribution</h4>
              </div>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{site.economicContribution}</p>
            </div>
          </div>

          {/* Community Impact */}
          <div className="rounded-sm border border-gold p-4">
            <div className="mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-display text-sm font-bold text-foreground">Community Impact</h4>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{site.communityImpact}</p>
          </div>

          {/* Environmental Notes */}
          <div className="rounded-sm border border-destructive/30 bg-destructive/5 p-4">
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <h4 className="font-display text-sm font-bold text-foreground">Environmental Concerns</h4>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{site.environmentalNotes}</p>
          </div>

          {/* Interesting Facts */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              <h4 className="font-display text-lg font-bold text-foreground">Interesting Facts</h4>
            </div>
            <ul className="space-y-2">
              {site.interestingFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-3 font-body text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary font-body text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gold pt-4">
            <span className={`rounded-full px-4 py-1 font-body text-xs font-semibold uppercase tracking-wide ${
              site.status === "Active" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {site.status}
            </span>
            <button
              onClick={onClose}
              className="rounded-sm bg-primary px-6 py-2 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningSitePopup;

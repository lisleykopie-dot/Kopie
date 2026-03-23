import { ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Mineral Resources Authority of PNG",
    url: "https://www.mra.gov.pg",
    description: "The government body responsible for regulating the mining sector in Papua New Guinea.",
  },
  {
    title: "Ok Tedi Mining Limited",
    url: "https://www.oktedi.com",
    description: "Official site of Ok Tedi Mining, with information on operations and community programs.",
  },
  {
    title: "PNG Chamber of Mines & Petroleum",
    url: "https://www.pngchamberminpet.com.pg",
    description: "Industry body representing mining and petroleum companies operating in PNG.",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="bg-earth-gradient py-24">
      <div className="container mx-auto px-6">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Learn More
        </p>
        <h2 className="mb-12 font-display text-4xl font-bold text-foreground md:text-5xl">
          Resources & References
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-sm border border-gold bg-card p-6 transition-colors hover:border-primary"
            >
              <div>
                <h3 className="mb-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{r.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-primary font-body text-sm font-semibold">
                Visit <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

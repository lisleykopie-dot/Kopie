import { Link } from "react-router-dom";
import envImage from "@/assets/environmental-impact.jpg";
import { impacts } from "@/data/environmentalImpacts";

const EnvironmentSection = () => {
  return (
    <section id="environment" className="relative">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={envImage}
          alt="River polluted by mining waste flowing through tropical rainforest in Papua New Guinea"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="bg-overlay-darker absolute inset-0" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              The Cost of Mining
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              ENVIRONMENTAL IMPACTS
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {impacts.map((impact) => (
              <Link
                key={impact.slug}
                to={`/environment/${impact.slug}`}
                className="group block rounded-sm border border-gold bg-card p-8 transition-colors hover:border-primary"
              >
                <impact.icon className="mb-4 h-8 w-8 text-accent" />
                <h3 className="mb-3 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {impact.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {impact.summary}
                </p>
                <p className="mt-4 font-body text-sm font-semibold text-primary">
                  Read more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;

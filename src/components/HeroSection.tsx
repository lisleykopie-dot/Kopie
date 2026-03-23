import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-mining.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-end">
      <img
        src={heroImage}
        alt="Aerial view of an open-pit gold and copper mine surrounded by Papua New Guinea rainforest"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-overlay-dark absolute inset-0" />
      <div className="relative z-10 container mx-auto px-6 pb-20 pt-40">
        <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Papua New Guinea
        </p>
        <h1 className="mb-6 font-display text-5xl font-900 leading-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient-gold">Mining Sites</span>
          <br />
          <span className="text-foreground">of PNG</span>
        </h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
          Papua New Guinea holds some of the world's largest gold and copper deposits.
          Explore the major mining operations that have shaped the nation's economy,
          communities, and environment.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            to="/sites/oktedi"
            className="inline-block rounded-sm bg-primary px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Sites
          </Link>
          <Link
            to="/environment/river-contamination"
            className="inline-block rounded-sm border border-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            Environmental Impact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

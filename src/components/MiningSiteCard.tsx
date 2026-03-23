interface MiningSiteCardProps {
  id?: string;
  name: string;
  location: string;
  mineral: string;
  status: string;
  description: string;
  image: string;
  imageAlt: string;
}

const MiningSiteCard = ({ id, name, location, mineral, status, description, image, imageAlt }: MiningSiteCardProps) => {
  return (
    <article id={id} className="group overflow-hidden rounded-sm border border-gold bg-card transition-all hover:border-primary scroll-mt-24">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 rounded-sm bg-primary px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-primary-foreground">
          {mineral}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-foreground">{name}</h3>
          <span className={`rounded-full px-3 py-0.5 font-body text-xs font-semibold uppercase tracking-wide ${
            status === "Active" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
          }`}>
            {status}
          </span>
        </div>
        <p className="mb-3 font-body text-sm font-medium text-primary">{location}</p>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
};

export default MiningSiteCard;

import Link from "next/link";

export function AppCard({
  href,
  icon,
  name,
  tagline,
}: {
  href: string;
  icon: string;
  name: string;
  tagline: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-5 rounded-3xl border border-line bg-card p-5 transition-colors hover:border-brand/40"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt={`${name} app icon`}
        width={72}
        height={72}
        className="h-18 w-18 shrink-0 rounded-2xl border border-line"
      />
      <div className="min-w-0">
        <h3 className="font-serif text-lg text-ink">{name}</h3>
        <p className="mt-1 text-sm text-ink-2">{tagline}</p>
        <span className="mt-2 inline-block text-sm font-medium text-brand transition-colors group-hover:text-brand-hover">
          View app →
        </span>
      </div>
    </Link>
  );
}

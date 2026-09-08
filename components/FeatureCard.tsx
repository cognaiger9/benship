export function FeatureCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <h3 className="font-serif text-lg text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">{body}</p>
    </div>
  );
}

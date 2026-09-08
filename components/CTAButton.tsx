import { ReactNode } from "react";

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand text-inverse hover:bg-brand-hover"
      : "border border-line text-ink hover:bg-sunken";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

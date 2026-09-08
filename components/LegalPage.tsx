import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./Container";

// Shared shell for every app's legal page. The back link is per-app and
// defaults to TalksyAI so existing pages keep working without changes.
export function LegalPage({
  title,
  effectiveDate,
  backHref = "/talksyai",
  backLabel = "Back to TalksyAI",
  children,
}: {
  title: string;
  effectiveDate: string;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
}) {
  return (
    <Container size="narrow" className="py-16">
      <Link
        href={backHref}
        className="text-sm text-brand hover:text-brand-hover transition-colors"
      >
        ← {backLabel}
      </Link>
      <h1 className="mt-6 font-serif text-4xl text-ink">{title}</h1>
      <p className="mt-2 text-sm text-ink-3">Effective date: {effectiveDate}</p>
      <div className="legal mt-8">{children}</div>
    </Container>
  );
}

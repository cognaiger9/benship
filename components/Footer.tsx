import Link from "next/link";
import { Container } from "./Container";

// Each app owns its own privacy and terms URLs, so the footer groups links per
// app instead of listing a single flat "Privacy / Terms" pair.
const apps = [
  { name: "TalksyAI", href: "/talksyai" },
  { name: "75 Challenge", href: "/75challenge" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/" className="text-ink-2 hover:text-brand transition-colors">
              Home
            </Link>
            <a
              href="mailto:benjamintr@benjamintr.com"
              className="text-ink-2 hover:text-brand transition-colors"
            >
              Contact
            </a>
          </div>

          {apps.map((app) => (
            <div key={app.href} className="flex flex-col gap-3 text-sm">
              <Link
                href={app.href}
                className="font-medium text-ink hover:text-brand transition-colors"
              >
                {app.name}
              </Link>
              <Link
                href={`${app.href}/privacy`}
                className="text-ink-2 hover:text-brand transition-colors"
              >
                Privacy
              </Link>
              <Link
                href={`${app.href}/terms`}
                className="text-ink-2 hover:text-brand transition-colors"
              >
                Terms
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-line pt-6 text-sm text-ink-3">
          © {2026} Ben. Built for the apps I make.
        </div>
      </Container>
    </footer>
  );
}

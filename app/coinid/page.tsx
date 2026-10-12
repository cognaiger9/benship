import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Coin ID: Coin Identifier",
  description: "Meet Coin ID, a coming-soon iPhone app for identifying coins from front and back photos, reviewing the likely match, and saving your collection",
  openGraph: {
    title: "Coin ID: Coin Identifier",
    description: "Identify your coins and keep your collection organised - coming soon to iPhone",
    images: ["/coinid-icon.png"],
    type: "website",
  },
};

const steps = [
  { n: "1", title: "Photograph both sides", body: "Start with clear photos of the front and back of your coin" },
  { n: "2", title: "Review the likely match", body: "Explore the suggested identity, including country, denomination, and year when readable. Review and correct the details before saving" },
  { n: "3", title: "Keep your finds together", body: "Save the coins you want to keep and revisit your collection as it grows" },
];

export default function CoinIDLanding() {
  return (
    <main>
      <div className="border-b border-line bg-cream">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="text-sm text-ink-3 hover:text-brand transition-colors">← Ben&apos;s apps</Link>
          <span className="font-serif text-ink">Coin ID</span>
        </Container>
      </div>
      <Container className="pt-20 pb-16 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coinid-icon.png" alt="Coin ID app icon" width={88} height={88} className="mx-auto h-22 w-22 rounded-3xl border border-line" />
        <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent">Coming soon to iPhone</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">Every coin has a story</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-2">Identify your coins and keep your collection organised</p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-2">We&apos;re building Coin ID to help you go from an unfamiliar coin to a likely match, then review the details and save your find</p>
        <div className="mt-8 flex justify-center"><CTAButton href="#how" variant="secondary">Explore the idea</CTAButton></div>
      </Container>
      <section id="how" className="bg-sunken py-20">
        <Container>
          <h2 className="text-center font-serif text-3xl text-ink">From a coin to your collection</h2>
          <p className="mt-4 text-center text-sm text-ink-3">The experience we&apos;re building</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-serif text-inverse">{step.n}</div>
                <h3 className="mt-4 font-serif text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Container size="narrow" className="py-20 text-center">
        <h2 className="font-serif text-3xl text-ink">For the coins that catch your eye</h2>
        <p className="mt-6 text-ink-2 leading-relaxed">Whether you&apos;re sorting inherited coins or starting a collection, Coin ID is designed to help you learn what you have and keep a record</p>
        <p className="mt-4 text-sm text-ink-3 leading-relaxed">Photo identification provides a likely match. It does not authenticate a coin or provide professional grading or appraisal</p>
        <div className="mt-8 flex justify-center"><CTAButton href="mailto:ngoctruonggia@gmail.com" variant="secondary">Get in touch</CTAButton></div>
        <p className="mt-6 text-sm text-ink-3">
          <Link href="/coinid/privacy" className="text-brand hover:text-brand-hover">Privacy Policy</Link>
          {" · "}
          <Link href="/coinid/terms" className="text-brand hover:text-brand-hover">Terms of Service</Link>
        </p>
      </Container>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Room Planner: AI Home Design | Interior Design from a Photo",
  description:
    "See a new look for your real room from one photo. Choose a style, keep your layout with Structure Lock, and save the designs you love. Coming soon to iPhone.",
  openGraph: {
    title: "Room Planner: AI Home Design",
    description:
      "The room planner that needs one photo, not a floor plan, and keeps your room yours. Coming soon to iPhone.",
    images: ["/roomplanner-icon.png"],
    type: "website",
  },
};

const steps = [
  {
    n: "1",
    title: "Start with a photo",
    body: "Take a photo or choose one from your library. Pick a room or an exterior space to redesign.",
  },
  {
    n: "2",
    title: "Choose a style",
    body: "Explore a look that fits your space. Leave Keep my layout on to preserve the walls, windows, openings, and viewpoint.",
  },
  {
    n: "3",
    title: "See your room again",
    body: "Compare the original with the redesign, save a favorite, or try another style on the same photo.",
  },
];

const features = [
  {
    title: "One photo, no floor plan",
    body: "Start with the room you already have. There is no measuring or 3D model to build first.",
  },
  {
    title: "Structure Lock",
    body: "Keep my layout is on by default, so a new look still feels like your room. Turn it off when you want a freer remodel idea.",
  },
  {
    title: "Inside and out",
    body: "Try styles for living rooms, bedrooms, kitchens, bathrooms, home offices, and exterior spaces.",
  },
  {
    title: "A gallery of possibilities",
    body: "Save before-and-after designs together and revisit the ideas you want to keep.",
  },
];

export default function RoomPlannerLanding() {
  return (
    <main>
      <div className="border-b border-line bg-cream">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="text-sm text-ink-3 hover:text-brand transition-colors">
            ← Ben&apos;s apps
          </Link>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/roomplanner-icon.png"
              alt="Room Planner icon"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg border border-line"
            />
            <span className="font-serif text-ink">Room Planner</span>
          </div>
        </Container>
      </div>

      <Container className="pt-20 pb-16 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/roomplanner-icon.png"
          alt="Room Planner app icon"
          width={88}
          height={88}
          className="mx-auto h-22 w-22 rounded-3xl border border-line"
        />
        <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent">
          Interior design from a photo
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          A new look for the room you already have.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
          Room Planner turns one photo into a design idea for your own space.
          Explore new styles while keeping the layout that makes your room yours.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton href="#how" variant="secondary">
            See how it works
          </CTAButton>
        </div>
        <p className="mt-3 text-xs text-ink-3">Coming soon to iPhone.</p>
      </Container>

      <section id="how" className="bg-sunken py-20">
        <Container>
          <h2 className="text-center font-serif text-3xl text-ink">How it works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-serif text-inverse">
                  {step.n}
                </div>
                <h3 className="mt-4 font-serif text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-center font-serif text-3xl text-ink">
            Make room for a different idea
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} body={feature.body} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="narrow">
          <h2 className="text-center font-serif text-3xl text-ink">Planned access</h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-ink-2">
            A sample-room preview will let you see the idea first. The planned
            app offers a trial followed by a subscription for redesigning your
            own spaces, with weekly and annual options. Final prices and trial
            eligibility will be shown in the app before purchase.
          </p>
          <p className="mt-6 text-center text-sm text-ink-3">
            Read our{" "}
            <Link href="/roomplanner/terms" className="text-brand hover:text-brand-hover transition-colors">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/roomplanner/privacy" className="text-brand hover:text-brand-hover transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}

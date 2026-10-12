import { Container } from "@/components/Container";
import { AppCard } from "@/components/AppCard";

export default function Home() {
  return (
    <main>
      <Container className="pt-24 pb-16">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          Indie iOS developer
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight text-ink">
          Hi, I&apos;m Ben.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
          I design and build small, focused iOS apps — the kind I wish existed.
          This is the home base for everything I ship.
        </p>
      </Container>

      <Container className="pb-24">
        <h2 className="font-serif text-2xl text-ink">Apps</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <AppCard
            href="/talksyai"
            icon="/talksyai-icon.png"
            name="AI Mock Interview – TalksyAI"
            tagline="Job interview prep & practice, out loud with an AI interviewer."
          />
          <AppCard
            href="/75challenge"
            icon="/75challenge-icon.png"
            name="75 Hard Challenge Day Tracker"
            tagline="Run a 75-day challenge on Hard, Soft, or your own rules."
          />
          <AppCard
            href="/roomplanner"
            icon="/roomplanner-icon.png"
            name="Room Planner: AI Home Design"
            tagline="Redesign a real room from one photo while keeping its layout. Coming soon."
          />
          <AppCard
            href="/coinid"
            icon="/coinid-icon.png"
            name="Coin ID: Coin Identifier"
            tagline="Identify coins from front and back photos, then confirm and save your finds - coming soon"
          />
        </div>
        <p className="mt-8 text-sm text-ink-3">
          More apps on the way. Reach me at{" "}
          <a
            href="mailto:ngoctruonggia@gmail.com"
            className="text-brand hover:text-brand-hover transition-colors"
          >
            ngoctruonggia@gmail.com
          </a>
          .
        </p>
      </Container>
    </main>
  );
}

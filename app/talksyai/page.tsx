import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "AI Mock Interview – TalksyAI | Job Interview Prep & Practice",
  description:
    "Practice job interviews out loud with an AI interviewer, then get a STAR scorecard on every answer. Walk into your next interview having already done it 10 times.",
  openGraph: {
    title: "AI Mock Interview – TalksyAI",
    description:
      "Voice-first AI mock interviews with STAR feedback. A rehearsal room, not a teleprompter.",
    images: ["/talksyai-icon.png"],
    type: "website",
  },
};

const features = [
  {
    title: "Realtime voice interviews",
    body: "Speak your answers out loud to an AI interviewer that listens, reacts, and asks natural follow-up questions — just like the real thing.",
  },
  {
    title: "Tailored to your role",
    body: "Add your resume and the job description. Questions are built around your actual experience and the role you're targeting.",
  },
  {
    title: "Difficulty ladder",
    body: "Warm up with a friendly HR screen, then climb to a neutral hiring manager and a tough, skeptical interviewer as you get sharper.",
  },
  {
    title: "STAR scorecards",
    body: "Every session ends with a score, filler-word count, answer-length checks, per-question strengths and fixes, model answers, and the full transcript.",
  },
  {
    title: "Progress, streaks & XP",
    body: "Track your score trend over time, keep a practice streak alive, and earn XP so showing up regularly actually feels good.",
  },
  {
    title: "Bite-size interview course",
    body: "A short set of lessons on structuring answers, handling curveballs, and talking about money — read them between practice runs.",
  },
];

const steps = [
  {
    n: "1",
    title: "Set up your interview",
    body: "Pick a scenario pack — behavioral, HR screen, a role pack, salary negotiation — and drop in your resume or job description.",
  },
  {
    n: "2",
    title: "Talk it through",
    body: "Have a real spoken conversation with an AI interviewer persona: five questions plus follow-ups, about 10–18 minutes.",
  },
  {
    n: "3",
    title: "Get your scorecard",
    body: "See exactly where you rambled, what landed, and how to say it better next time — then run it again, harder.",
  },
];

export default function TalksyAILanding() {
  return (
    <main>
      {/* Sub-nav */}
      <div className="border-b border-line bg-cream">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="text-sm text-ink-3 hover:text-brand transition-colors">
            ← Ben&apos;s apps
          </Link>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/talksyai-icon.png"
              alt="TalksyAI icon"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg border border-line"
            />
            <span className="font-serif text-ink">TalksyAI</span>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Container className="pt-20 pb-16 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/talksyai-icon.png"
          alt="TalksyAI app icon"
          width={88}
          height={88}
          className="mx-auto h-22 w-22 rounded-3xl border border-line"
        />
        <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent">
          Job Interview Prep &amp; Practice
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Walk into your next interview having already done it 10 times.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
          TalksyAI is a voice-first mock-interview app. You rehearse out loud
          with an AI interviewer and get honest feedback on every answer — so the
          real interview feels like reps you&apos;ve already put in.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="#">Download on the App Store</CTAButton>
          <CTAButton href="#how" variant="secondary">
            See how it works
          </CTAButton>
        </div>
        <p className="mt-3 text-xs text-ink-3">Coming soon to the App Store.</p>
      </Container>

      {/* How it works */}
      <section id="how" className="bg-sunken py-20">
        <Container>
          <h2 className="text-center font-serif text-3xl text-ink">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-serif text-inverse">
                  {s.n}
                </div>
                <h3 className="mt-4 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20">
        <Container>
          <h2 className="text-center font-serif text-3xl text-ink">
            Everything you need to practice for real
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} />
            ))}
          </div>
        </Container>
      </section>

      {/* Positioning callout */}
      <section className="py-8">
        <Container size="narrow">
          <div className="rounded-3xl border border-accent-tint bg-accent-tint/50 p-8 text-center">
            <h2 className="font-serif text-2xl text-ink">
              A rehearsal room, not a teleprompter
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-2">
              TalksyAI is built for practice before the interview — not for
              feeding you answers during a live one. The whole point is that you
              get better, so you don&apos;t need a crutch when it counts.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <Container size="narrow">
          <h2 className="text-center font-serif text-3xl text-ink">
            Simple pricing
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-line bg-card p-8">
              <h3 className="font-serif text-xl text-ink">Weekly</h3>
              <p className="mt-3">
                <span className="font-serif text-4xl text-ink">$5.99</span>
                <span className="text-ink-3"> / week</span>
              </p>
              <p className="mt-3 text-sm text-ink-2">
                Full access, cancel anytime. Great for prepping around a specific
                interview.
              </p>
            </div>
            <div className="relative rounded-3xl border-2 border-brand bg-card p-8">
              <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-medium text-inverse">
                Best value
              </span>
              <h3 className="font-serif text-xl text-ink">Yearly</h3>
              <p className="mt-3">
                <span className="font-serif text-4xl text-ink">$29.99</span>
                <span className="text-ink-3"> / year</span>
              </p>
              <p className="mt-3 text-sm text-ink-2">
                Starts with a 3-day free trial. Best if you&apos;re job hunting
                or want to keep your skills sharp.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-ink-3">
            Subscriptions are billed through your Apple ID and renew automatically
            unless cancelled at least 24 hours before the end of the period.
            Manage or cancel anytime in your App Store settings. See our{" "}
            <Link
              href="/talksyai/terms"
              className="text-brand hover:text-brand-hover transition-colors"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/talksyai/privacy"
              className="text-brand hover:text-brand-hover transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}

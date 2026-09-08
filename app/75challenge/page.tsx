import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";

const APP_STORE_URL = "https://apps.apple.com/app/id6788652357";

export const metadata: Metadata = {
  title: "75 Hard Challenge Day Tracker | Hard, Soft & Custom Presets",
  description:
    "Track your 75-day challenge with Hard, Soft, or Custom rules. Check off daily tasks, build a photo timeline, and keep going after a slip with the grace day.",
  openGraph: {
    title: "75 Hard Challenge Day Tracker",
    description:
      "A 75-day challenge you can actually finish. Hard, Soft, or your own rules, with a grace day so one slip does not send you back to Day 0.",
    images: ["/75challenge-icon.png"],
    type: "website",
  },
};

const features = [
  {
    title: "Hard, Soft, or your rules",
    body: "Run the original 75 Hard with all six tasks, the lighter 75 Soft, or build a Custom challenge from 1 to 7 tasks over any number of days.",
  },
  {
    title: "The grace day",
    body: "Miss a day on Soft or Custom and the app adds a day instead of wiping your progress. Your challenge survives, so you keep going instead of quitting.",
  },
  {
    title: "A 75-cell calendar",
    body: "Every day of the challenge on one screen: done, saved by a grace day, missed, or still ahead of you. Tap any day to see exactly what you did.",
  },
  {
    title: "Photo timeline",
    body: "Snap a progress photo each day and scroll the whole run back. Put Day 1 next to today and see the change you cannot feel day to day.",
  },
  {
    title: "Home-screen widget",
    body: "Your current day and today's remaining tasks on the home screen, so the challenge is the first thing you see instead of something you forget.",
  },
  {
    title: "Daily reminders",
    body: "One nudge at the time you choose, so tasks get checked off before the day runs out rather than at 11:58pm.",
  },
];

const steps = [
  {
    n: "1",
    title: "Pick your preset",
    body: "Hard for the original rules, Soft for a version you can hold down alongside a job, or Custom to write your own task list and length.",
  },
  {
    n: "2",
    title: "Check off the day",
    body: "Tick each task as you finish it and add your progress photo. The day only closes when the list is done.",
  },
  {
    n: "3",
    title: "Watch it fill up",
    body: "The calendar and the photo timeline stack up behind you. By Day 75 you have proof of every single day.",
  },
];

export default function Challenge75Landing() {
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
              src="/75challenge-icon.png"
              alt="75 Challenge icon"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg border border-line"
            />
            <span className="font-serif text-ink">75 Challenge</span>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Container className="pt-20 pb-16 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/75challenge-icon.png"
          alt="75 Hard Challenge Day Tracker app icon"
          width={88}
          height={88}
          className="mx-auto h-22 w-22 rounded-3xl border border-line"
        />
        <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent">
          75-Day Challenge Tracker
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Change yourself in 75 days.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
          Pick Hard, Soft, or your own rules. Check off each day, build a photo
          timeline, and keep the challenge alive when life gets in the way. One
          slip costs you a day, not everything.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href={APP_STORE_URL}>Download on the App Store</CTAButton>
          <CTAButton href="#how" variant="secondary">
            See how it works
          </CTAButton>
        </div>
        <p className="mt-3 text-xs text-ink-3">
          Free to download on iPhone. Requires iOS 17.6 or later.
        </p>
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
            Everything you need to reach Day 75
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-3">
            One honest note: a grace day saves your challenge, not your streak.
            Your streak counter still starts over, and the Hard preset keeps the
            original restart rule.
          </p>
        </Container>
      </section>

      {/* Positioning callout */}
      <section className="py-8">
        <Container size="narrow">
          <div className="rounded-3xl border border-accent-tint bg-accent-tint/50 p-8 text-center">
            <h2 className="font-serif text-2xl text-ink">
              A slip costs a day, not everything
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-2">
              Most people do not quit a 75-day challenge because it is too hard.
              They quit because one bad Tuesday sends them back to Day 0. The
              grace day is there so the run you have already put in still counts.
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
              <h3 className="font-serif text-xl text-ink">Monthly</h3>
              <p className="mt-3">
                <span className="font-serif text-4xl text-ink">$9.99</span>
                <span className="text-ink-3"> / month</span>
              </p>
              <p className="mt-3 text-sm text-ink-2">
                Starts with a 3-day free trial. Month to month if you would
                rather not commit to the full run yet.
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
                Starts with a 3-day free trial and works out cheaper than three
                months. The one to pick if you are seeing the 75 days through.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-ink-3">
            Free for 3 days, then $29.99/year. Auto-renews until canceled.
            Subscriptions are billed through your Apple ID and renew
            automatically unless cancelled at least 24 hours before the end of
            the period. Manage or cancel anytime in your App Store settings. See
            our{" "}
            <Link
              href="/75challenge/terms"
              className="text-brand hover:text-brand-hover transition-colors"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/75challenge/privacy"
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

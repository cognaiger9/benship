import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service - Room Planner: AI Home Design",
  description: "Terms for using Room Planner: AI Home Design.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="October 12, 2026"
      backHref="/roomplanner"
      backLabel="Back to Room Planner"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Room
        Planner: AI Home Design mobile app (the &quot;App&quot;). By downloading
        or using the App, you agree to these Terms and to our{" "}
        <Link href="/roomplanner/privacy">Privacy Policy</Link>. If you do not
        agree, do not use the App.
      </p>

      <h2>The service</h2>
      <p>
        The App lets you submit a photo of a room or exterior space, choose a
        style or tap an area to change, generate a redesign with artificial
        intelligence, and save, compare, and share the results.
      </p>
      <p>
        Generated images are design ideas only. They may be inaccurate,
        inconsistent, or impractical, and they are not architectural,
        structural, electrical, or safety advice. Keep my layout aims to
        preserve your room&apos;s structure but does not guarantee it. Consult
        a qualified professional before any renovation or construction work.
      </p>

      <h2>Accounts</h2>
      <p>
        The App creates an anonymous account when you first open it. You can
        link Sign in with Apple or Google Sign-In to keep your projects if you
        reinstall or change devices. If you do not link an account, deleting
        the App may permanently remove access to your projects. You are
        responsible for activity under your account and for keeping access to
        it secure.
      </p>
      <p>
        You can delete your account at any time in the App under Settings. This
        permanently deletes your projects and cannot be undone.
      </p>

      <h2>Your photos and designs</h2>
      <p>
        You keep your rights in the photos you submit. You confirm that you own
        them or have permission to use them, and that they do not show people
        who have not agreed to it. You give us a limited license to store and
        process your photos and generated designs, including through our
        image-generation provider, only as needed to provide the App.
      </p>
      <p>
        Subject to these Terms and the law, you may use the designs you
        generate for personal or commercial purposes. Because AI output is not
        unique, others may generate similar images, and we do not guarantee that
        any design is free of third-party rights.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Submit photos you have no right to use, or images of other people without their consent</li>
        <li>Submit sexual, violent, hateful, or otherwise harmful content</li>
        <li>Try to access another person&apos;s account or projects</li>
        <li>Use automated systems to access the App, or try to get around usage limits</li>
        <li>Reverse engineer the App or interfere with its operation</li>
      </ul>
      <p>
        Requests may also be declined under our image-generation
        provider&apos;s safety policies.
      </p>

      <h2>Subscriptions and payments</h2>
      <p>
        Generating redesigns requires a Room Planner Pro subscription. These
        auto-renewing plans are available, with the same features on each:
      </p>
      <ul>
        <li>Weekly, at USD 6.99 per week</li>
        <li>Monthly, at USD 14.99 per month</li>
        <li>Annual, at USD 49.99 per year, with a 3-day free trial for eligible Apple Accounts</li>
      </ul>
      <p>
        Prices may differ by country or region. The App shows the price in
        your local currency before you buy. We may change prices in the future,
        and Apple will notify you as required.
      </p>

      <h3>Fair use</h3>
      <p>
        Each account can generate up to 20 renders per day, resetting at
        midnight UTC. Failed renders do not count toward this limit. We may
        adjust the limit to keep the service reliable, and the App always shows
        the current limit.
      </p>

      <h3>Auto-renewal</h3>
      <p>
        Payment is charged to your Apple Account when you confirm the purchase.
        Your subscription renews automatically unless you turn off auto-renew at
        least 24 hours before the end of the current period. Your account is
        charged for renewal within 24 hours before the current period ends.
      </p>

      <h3>Free trial</h3>
      <p>
        If you start the annual plan with a free trial, you are not charged
        during the trial. Unless you cancel at least 24 hours before the trial
        ends, the annual price is charged when it ends.
      </p>

      <h3>Managing and canceling</h3>
      <p>
        You can manage or cancel your subscription in the Settings app: tap
        your name, then Subscriptions. Cancellation takes effect at the end of
        the current period, and you keep access until then. Deleting the App or
        your account does not cancel your subscription.
      </p>

      <h3>Refunds</h3>
      <p>
        Apple processes all payments and refunds. To request a refund, visit{" "}
        <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        We cannot issue refunds directly.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The App, including its design, text, graphics, sample content, and
        software, belongs to us and is protected by intellectual property laws.
        Apart from your own photos and designs, you may not copy, modify, or
        distribute any part of the App.
      </p>

      <h2>Availability and termination</h2>
      <p>
        We may change, suspend, or discontinue features at any time. The
        service may sometimes be unavailable or fail to produce a result. We may
        suspend or end your access if you break these Terms or misuse the App.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, express or implied. To the maximum
        extent permitted by law, we are not liable for any indirect, incidental,
        special, or consequential damages, or for any loss of data, profits, or
        goodwill, arising from your use of the App or of any generated design.
        Nothing in these Terms limits rights that cannot be limited under the
        law that applies to you.
      </p>

      <h2>Apple terms</h2>
      <p>
        These Terms are between you and us, not Apple. Apple is not responsible
        for the App or its content, has no obligation to provide maintenance or
        support, and is not responsible for any product claims about the App.
        Apple and its subsidiaries are third-party beneficiaries of these Terms
        and may enforce them. Your use of the App must also follow Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
          Standard End User License Agreement
        </a>
        .
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which the
        App provider is established, without regard to conflict-of-laws
        principles, unless the law of your country of residence requires
        otherwise.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will revise the
        effective date above and give additional notice where required. If you
        keep using the App after a change, you accept the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:ngoctruonggia@gmail.com">ngoctruonggia@gmail.com</a>.
      </p>
    </LegalPage>
  );
}

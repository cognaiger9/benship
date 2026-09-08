import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - 75 Hard Challenge Day Tracker",
  description:
    "How 75 Hard Challenge Day Tracker collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="July 25, 2026"
      backHref="/75challenge"
      backLabel="Back to 75 Challenge"
    >
      <p>
        75 Hard Challenge Day Tracker (&quot;we,&quot; &quot;our,&quot; or
        &quot;us&quot;) respects your privacy and is committed to protecting your
        personal data. This Privacy Policy explains how we collect, use, and
        safeguard your information when you use the 75 Hard Challenge Day Tracker
        mobile application (the &quot;App&quot;).
      </p>

      <h2>Information we collect</h2>

      <h3>Account information</h3>
      <p>
        You can use the App anonymously without creating an account. If you
        choose to sign in with Apple or Google, we collect:
      </p>
      <ul>
        <li>Email address</li>
        <li>Name, as provided by your sign-in provider</li>
      </ul>

      <h3>Profile and survey information</h3>
      <p>
        During onboarding, you may voluntarily share information to personalize
        your challenge, including:
      </p>
      <ul>
        <li>Name and age</li>
        <li>
          Self-reported goals, focus areas, habits you want to change, and
          readiness level
        </li>
      </ul>

      <h3>Content you create</h3>
      <p>We collect content you create within the App:</p>
      <ul>
        <li>Progress photos you capture or select for your daily timeline</li>
        <li>Your challenge type, task list, and daily task completions</li>
        <li>Missed-day and grace-day records</li>
      </ul>

      <h3>Automatically collected information</h3>
      <p>We automatically collect a limited set of technical information:</p>
      <ul>
        <li>
          Your device&apos;s timezone, used to determine which day of the
          challenge you are on
        </li>
        <li>
          First-party in-app usage information, such as which onboarding screens
          you view and how long you spend on them
        </li>
      </ul>
      <p>
        We do not use third-party analytics, advertising, or tracking SDKs, and
        we do not collect advertising identifiers.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>
          To provide and maintain the App&apos;s core features, including your
          challenge, calendar, and photo timeline
        </li>
        <li>To sync your data across devices when you sign in</li>
        <li>To authenticate your account</li>
        <li>To personalize onboarding and challenge recommendations</li>
        <li>To improve and troubleshoot the App</li>
        <li>To respond to your inquiries and support requests</li>
      </ul>

      <h2>Photos</h2>
      <p>
        Progress photos you capture are stored on your device and, when you are
        signed in, are also uploaded to a private cloud storage bucket so they
        sync across your devices. Photos are never made public and are only
        accessible to you, via time-limited, authenticated links. We do not use
        your photos for advertising or to train machine learning models.
      </p>

      <h2>Data storage and security</h2>
      <p>
        Your data is stored securely using industry-standard encryption in
        transit and at rest. We use Supabase as our backend service provider,
        which employs robust security measures to protect your information. We
        implement appropriate technical and organizational measures to protect
        your personal data against unauthorized access, alteration, disclosure,
        or destruction.
      </p>

      <h2>Third-party services</h2>
      <p>We use the following third-party services:</p>
      <ul>
        <li>
          <strong>Sign in with Apple and Google Sign-In</strong> - for
          authentication, if you choose to use them.
        </li>
        <li>
          <strong>Supabase</strong> - for data storage, file storage, and backend
          services.
        </li>
      </ul>
      <p>
        These services have their own privacy policies governing their use of
        your data.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information only in the following
        circumstances:
      </p>
      <ul>
        <li>With your consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and safety</li>
        <li>
          With service providers who assist in operating the App, under strict
          confidentiality agreements
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your account and data</li>
        <li>Export your data in a portable format</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>
        To exercise these rights, please contact us at the email address below.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain your personal data for as long as your account is active or as
        needed to provide you services. If you delete your account, we will
        delete your personal data within 30 days, except where we are required to
        retain it for legal purposes.
      </p>

      <h2>Children</h2>
      <p>
        The App is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under 13. If we
        become aware that we have collected personal data from a child under 13,
        we will take steps to delete that information.
      </p>

      <h2>International users</h2>
      <p>
        Your data may be processed and stored in countries other than your own
        through our backend provider, Supabase. By using the App, you consent to
        this transfer, storage, and processing of your information.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the effective date above and, where appropriate, notify you within
        the App.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a href="mailto:benjamintr@benjamintr.com">benjamintr@benjamintr.com</a>.
      </p>
    </LegalPage>
  );
}

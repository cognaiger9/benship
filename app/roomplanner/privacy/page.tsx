import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - Room Planner: AI Home Design",
  description: "How Room Planner handles photos, designs, account data, and subscriptions.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="October 12, 2026"
      backHref="/roomplanner"
      backLabel="Back to Room Planner"
    >
      <p>
        This Privacy Policy explains how Room Planner: AI Home Design (the
        &quot;App&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and
        shares information when you use the App. By using the App, you agree to
        the practices described here.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Room photos and designs.</strong> Photos you take or choose
          from your library, the redesigns generated from them, and the choices
          you make, such as space type, style, the Keep my layout setting, and
          the areas you tap to edit. Saved projects form your gallery.
        </li>
        <li>
          <strong>Onboarding answers.</strong> The answers you give in the
          welcome questions: age range (which you can skip), who you live with,
          home type, your living situation, what you want to do, and your
          preferred space and style. We use them to personalize the App.
        </li>
        <li>
          <strong>Account information.</strong> The App creates an anonymous
          account when you first open it. If you link Sign in with Apple or
          Google Sign-In, we receive the information that provider shares, such
          as your name, email address, and, for Google, your profile photo. If
          you use Hide My Email, we receive Apple&apos;s relay address.
        </li>
        <li>
          <strong>Subscription information.</strong> Your subscription, trial,
          and purchase status, linked to your account identifier. Apple
          processes payments. We never receive your payment card details.
        </li>
        <li>
          <strong>Apple Ads attribution.</strong> If you installed the App from
          an Apple Ads campaign, Apple&apos;s AdServices framework provides an
          attribution token that tells us which campaign led to the install.
          This does not involve tracking you across other companies&apos; apps
          or websites.
        </li>
        <li>
          <strong>Notifications.</strong> If you allow notifications, we store a
          device push token and your time zone so we can deliver them.
        </li>
        <li>
          <strong>Technical information.</strong> App version, device type, and
          server logs needed to operate, secure, and troubleshoot the service.
        </li>
      </ul>
      <p>
        We do not use third-party advertising SDKs, and we do not track you
        across apps or websites owned by other companies.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To generate redesigns and keep your projects available</li>
        <li>To personalize the App, such as suggesting a starting space and style</li>
        <li>To manage your account, subscription, and daily render allowance</li>
        <li>To measure which Apple Ads campaigns bring new users</li>
        <li>To send notifications you have allowed</li>
        <li>To respond to support requests and keep the App secure and working</li>
      </ul>

      <h2>Photos and AI processing</h2>
      <p>
        When you request a redesign, the photo you selected and your design
        choices are sent to Google&apos;s Gemini API, which generates the new
        image. We send each request without asking Google to store it for later
        use, and the result is returned to our servers. Google processes this
        data under its own API terms.
      </p>
      <p>
        Your original photos and generated designs are stored in private cloud
        storage that only your account can access. We do not use your photos
        to train our own models, and we do not sell them. Sharing or saving a
        design outside the App is your choice. Once shared, that copy is outside
        our control.
      </p>

      <h2>Service providers</h2>
      <p>We use these services to operate the App:</p>
      <ul>
        <li>
          <strong>Supabase</strong> for authentication, database records, and
          private photo storage.
        </li>
        <li>
          <strong>Google Gemini API</strong> for generating room redesigns.
        </li>
        <li>
          <strong>RevenueCat</strong> for subscription status, entitlements, and
          Apple Ads attribution.
        </li>
        <li>
          <strong>Firebase Cloud Messaging</strong> for push notifications you
          have allowed.
        </li>
        <li>
          <strong>Railway</strong> for hosting our servers.
        </li>
        <li>
          <strong>Apple and Google</strong> for optional account linking. Apple
          also processes App Store purchases.
        </li>
      </ul>
      <p>
        These providers receive only the information needed to deliver their
        part of the service and handle it under their own privacy policies.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell or rent your personal information. Besides the service
        providers above, we share information only with your consent, to comply
        with the law, or to protect the rights and safety of our users and the
        App.
      </p>

      <h2>Storage, retention, and deletion</h2>
      <p>
        We keep your account information, onboarding answers, and projects
        while your account is active. You can delete a project at any time from
        your gallery, which removes its photos and designs.
      </p>
      <p>
        You can delete your account in the App under Settings. This permanently
        deletes your projects, photos, designs, onboarding answers, and
        notification settings, and then your account itself. Deletion does not
        cancel an App Store subscription, so cancel it in your Apple account
        settings as well. Limited records may remain in backups or service
        provider logs for a short period, or longer where the law requires.
      </p>

      <h2>Security</h2>
      <p>
        Data is encrypted in transit, photo storage is private, and every
        request is checked so that you can only access your own projects. No
        system is perfectly secure, but we work to protect your information.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>You choose which photos to submit and whether to link an account</li>
        <li>You can skip the age question during onboarding</li>
        <li>You can turn notifications on or off in iOS Settings</li>
        <li>You can manage or cancel your subscription in your Apple account settings</li>
        <li>You can delete projects or your whole account in the App</li>
      </ul>
      <p>
        Depending on where you live, you may also have the right to access,
        correct, export, or delete your personal information, or to object to
        certain processing. To make a request, contact us at the address below.
      </p>

      <h2>Children</h2>
      <p>
        The App is not directed to children under 13, and we do not knowingly
        collect personal information from them. If you believe a child has
        provided personal information, contact us and we will delete it.
      </p>

      <h2>International users</h2>
      <p>
        Our service providers may process and store your information in
        countries other than your own, including the United States. We rely on
        their safeguards for these transfers.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will revise the
        effective date above and give additional notice where required.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests, email{" "}
        <a href="mailto:ngoctruonggia@gmail.com">ngoctruonggia@gmail.com</a>.
      </p>
    </LegalPage>
  );
}

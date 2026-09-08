import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service - 75 Hard Challenge Day Tracker",
  description:
    "The terms that govern your use of the 75 Hard Challenge Day Tracker app.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="July 25, 2026"
      backHref="/75challenge"
      backLabel="Back to 75 Challenge"
    >
      <p>
        By accessing or using the 75 Hard Challenge Day Tracker mobile
        application (the &quot;App&quot;), you agree to be bound by these Terms
        of Service. If you do not agree to these terms, please do not use the
        App.
      </p>

      <h2>The service</h2>
      <p>
        75 Hard Challenge Day Tracker is a 75-day challenge tracking
        application. You pick a preset (Hard, Soft, or Custom), check off daily
        tasks, and build a photo timeline of your progress. On the Soft and
        Custom presets, missing a day adds an extra day to your challenge instead
        of resetting your progress to Day 0 (the &quot;grace day&quot;). The Hard
        preset requires a restart to Day 0 if a day is missed, consistent with
        the original 75 Hard rules.
      </p>

      <h2>Accounts</h2>
      <p>
        You can use the App anonymously without creating an account. If you
        choose to sign in with Apple or Google to sync your data across devices,
        you agree to:
      </p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the security of your account credentials</li>
        <li>Notify us immediately of any unauthorized access</li>
        <li>Accept responsibility for all activities under your account</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to gain unauthorized access to the App or its systems</li>
        <li>Interfere with or disrupt the App&apos;s functionality</li>
        <li>Reverse engineer or attempt to extract the source code</li>
        <li>Use automated systems to access the App without permission</li>
      </ul>

      <h2>Subscriptions and payments</h2>
      <p>
        75 Hard Challenge Day Tracker offers the following auto-renewable
        subscription plans:
      </p>
      <ul>
        <li>Yearly subscription at $29.99, with a 3-day free trial</li>
        <li>Monthly subscription at $9.99, with a 3-day free trial</li>
      </ul>
      <p>
        The free trial is offered to eligible Apple IDs. If your Apple ID is not
        eligible for an introductory offer, the same plans are available without
        a trial. Pricing for all subscription plans is displayed in the App and
        at the point of purchase. Prices may vary by region and are subject to
        change with notice.
      </p>

      <h3>Auto-renewal</h3>
      <p>
        All subscriptions automatically renew unless auto-renew is turned off at
        least 24 hours before the end of the current period. Your account will be
        charged for renewal within 24 hours prior to the end of the current
        period.
      </p>

      <h3>Free trial</h3>
      <p>
        For subscriptions with a free trial, you will not be charged during the
        trial period. If you do not cancel before the trial ends, you will
        automatically be charged the subscription price and your subscription
        will begin. You can cancel anytime during the trial period without being
        charged.
      </p>

      <h3>Managing and canceling subscriptions</h3>
      <p>
        You can manage and cancel your subscriptions through your Apple ID
        account settings. To cancel:
      </p>
      <ul>
        <li>Go to Settings on your iOS device</li>
        <li>Tap your name, then tap Subscriptions</li>
        <li>Select the subscription you want to manage</li>
        <li>Tap Cancel Subscription</li>
      </ul>
      <p>
        Cancellation takes effect at the end of the current billing period. You
        will continue to have access to subscription features until the end of
        the period you have paid for.
      </p>

      <h3>Payment and refunds</h3>
      <p>
        Payment will be charged to your Apple ID account at confirmation of
        purchase. All payments are processed by Apple. Refund requests must be
        submitted through Apple. We do not have access to process refunds
        directly, and Apple&apos;s standard refund policies apply.
      </p>

      <h2>Your content</h2>
      <p>
        You retain ownership of any content you create within the App, including
        your progress photos, challenge tasks, and daily records. By using the
        App, you grant us a limited license to store and process this content
        solely to provide you with our services, such as syncing your data across
        your devices.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The App and its original content, features, and functionality are owned
        by us and are protected by international copyright, trademark, and other
        intellectual property laws. You may not copy, modify, distribute, or
        create derivative works based on the App.
      </p>

      <h2>Termination</h2>
      <p>
        We may terminate or suspend your account and access to the App
        immediately, without prior notice, for conduct that we believe violates
        these Terms or is harmful to other users, us, or third parties, or for
        any other reason at our sole discretion.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, either express or implied. We do not
        warrant that the App will be uninterrupted, error-free, or free of
        harmful components.
      </p>
      <p>
        The App is a general wellness and habit-tracking tool. It is not a
        medical device and does not provide medical advice. Consult a physician
        before starting any new fitness, diet, or wellness challenge, especially
        a physically demanding one such as the Hard preset.
      </p>
      <p>
        To the maximum extent permitted by law, we shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or any
        loss of profits or revenues, whether incurred directly or indirectly, or
        any loss of data, use, goodwill, or other intangible losses.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which the App
        provider is established, without regard to conflict-of-laws principles.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify
        users of any material changes by updating the effective date above. Your
        continued use of the App after changes constitutes acceptance of the new
        terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href="mailto:benjamintr@benjamintr.com">benjamintr@benjamintr.com</a>.
      </p>
    </LegalPage>
  );
}

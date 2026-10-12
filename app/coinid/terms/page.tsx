import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service - Coin ID: Coin Identifier",
  description: "Terms for Coin ID photo identification, saved collections, accounts, and paid access",
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="October 4, 2026" backHref="/coinid" backLabel="Back to Coin ID">
      <p>Coin ID: Coin Identifier is developed and operated by Benjamin Truong, the independent developer behind Benships. These terms describe the Coin ID service</p>
      <h2>Agreement and eligibility</h2>
      <p>These Terms describe the Coin ID service. By using the App, you agree to these Terms. You must be at least 18 years old to use the Gemini-powered service and use it only where the service is available and permitted</p>

      <h2>The service</h2>
      <p>Coin ID suggests a likely coin identity from front and back photos, lets you review or correct the details, and saves confirmed coins and photos to your collection. An active subscription is required for identification and saving. Each account can start up to 20 scans per UTC day, subject to a service-wide daily limit and temporary capacity limits. Limits apply to accepted scans, including unsuccessful identifications; retrying the same request does not consume another scan</p>

      <h2>Identification limits</h2>
      <p>AI identification can be incomplete or incorrect, including the country, year, denomination, mint mark, or coin type. Review results before saving or relying on them. Confirming a result records your acceptance or correction; it does not verify authenticity. Coin ID does not certify coins, provide professional grading or appraisal, or guarantee market value. Consult a qualified expert before making a purchase or sale based on a coin&apos;s identity or condition</p>

      <h2>Accounts</h2>
      <p>You may use a guest account or a supported sign-in provider. Keep access to your account secure and contact us if you suspect unauthorized use. A guest account may become inaccessible after sign-out, device loss, or removal of local account access. Linking a supported sign-in provider is intended to help preserve access</p>

      <h2>Your content</h2>
      <p>You retain your rights in photos and corrections you submit. You must have permission to submit them. You give us permission to store and process that content, including through our hosting, storage, and AI providers, only as needed to provide and maintain the service. You remain responsible for the content you submit and how you use identification results</p>

      <h2>App ownership and license</h2>
      <p>The App and its original design, code, and branding belong to their respective owners. Your photos and other submitted content remain yours. You may use the App for its intended purpose, but may not copy or distribute its protected materials except where permitted by law or with the owner&apos;s permission</p>

      <h2>Acceptable use</h2>
      <p>Do not submit unlawful content or content you have no right to use, access another person&apos;s account or records, bypass access or usage limits, disrupt the service, or attempt to extract credentials. We may suspend access as reasonably necessary to address misuse or protect users and the service</p>

      <h2>Subscriptions and payments</h2>
      <p>The approved launch plans are auto-renewing subscriptions at US prices of $5.99 per week, $12.99 per month, or $29.99 per year, with no free trial. Prices vary by country or region; the App displays the local price and billing period before purchase. These products are being prepared for launch and are not yet approved for sale</p>
      <p>Payment is charged to your Apple account at confirmation of purchase. Subscriptions renew automatically unless canceled under Apple&apos;s applicable rules. Manage or cancel your subscription in your Apple account settings. Deleting Coin ID or its account does not cancel a subscription. See <a href="https://support.apple.com/en-us/118428">Apple&apos;s cancellation guidance</a>. Refund requests are subject to Apple&apos;s policies and applicable consumer rights</p>

      <h2>Privacy and account deletion</h2>
      <p>Our <a href="/coinid/privacy">Privacy Policy</a> explains the processing of your information. Account deletion is designed to remove your account, cloud coin photos, identification records, and saved collection. Deletion is permanent once completed; contact support if a deletion request cannot be completed</p>

      <h2>Availability and changes</h2>
      <p>The service may be unavailable, delayed, or unable to identify a coin. We may update features and these Terms as the App develops. We will provide notice of material changes where required and update the effective date. Nothing in these Terms guarantees uninterrupted availability or error-free results</p>

      <h2>Consumer rights</h2>
      <p>To the extent permitted by applicable law, the service is provided as available without a guarantee of identification accuracy or fitness for a particular purpose. Nothing in these Terms excludes mandatory consumer rights or liability that cannot lawfully be excluded</p>

      <h2>Contact</h2>
      <p>For questions about these Terms, email <a href="mailto:ngoctruonggia@gmail.com">ngoctruonggia@gmail.com</a></p>
      <p>Read our <Link href="/coinid/privacy">Privacy Policy</Link></p>
    </LegalPage>
  );
}

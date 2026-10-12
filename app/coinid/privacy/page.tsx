import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - Coin ID: Coin Identifier",
  description: "How Coin ID handles coin photos, identification results, accounts, and your privacy choices",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="October 4, 2026" backHref="/coinid" backLabel="Back to Coin ID">
      <p>Coin ID: Coin Identifier is developed and operated by Benjamin Truong, the independent developer behind Benships. This policy describes how the Coin ID service handles information</p>
      <h2>Information we handle</h2>
      <p>When you use the identification service, we handle the front and back coin photos you submit, suggested coin details, your corrections, and collection records you save. Guest accounts have an account identifier. If you choose Apple or Google sign-in, we receive the account information that provider makes available, such as an identifier, name, or email address. Onboarding preferences are stored on your device, and completed answers, app version, and completion information are also stored with your account for personalization and onboarding analysis. If you contact support, we receive the information you include</p>

      <h2>How we use information</h2>
      <p>We use submitted photos to identify coins, display likely matches, and keep saved collection records available. We use account information to manage access and account recovery, and technical information to operate, secure, and troubleshoot the service. Hosting services may process IP addresses, request times, and error information. Please avoid including people, documents, or other personal information in coin photos</p>

      <h2>Photos and AI processing</h2>
      <p>When you request identification, your selected photos are uploaded to our backend and sent to Google Gemini with instructions for identifying the coin. Gemini returns a suggested identity, which may contain errors. Photos and identification records are stored in private Supabase storage and database records associated with your account. Submitting a photo does not publish it to other users</p>

      <h2>Service providers</h2>
      <p>Supabase provides authentication, database records, and photo storage. Railway hosts the backend. Google Gemini processes submitted photos for identification. Apple and Google provide optional sign-in. These providers process information needed to deliver their parts of the service, under their applicable terms and privacy practices. We may also disclose information when legally required or necessary to address fraud, security incidents, or misuse</p>

      <h2>Google Gemini data handling</h2>
      <p>Coin ID uses the Gemini API through a Google Cloud project with billing enabled. Under Google&apos;s paid-service terms, submitted coin photos, prompts, and responses are not used to improve Google&apos;s products. Google logs prompts and responses for a limited period to detect and prevent misuse and meet legal obligations. See <a href="https://ai.google.dev/gemini-api/terms">Google&apos;s Gemini API terms</a></p>

      <h2>Storage and retention</h2>
      <p>We retain saved coins and their photos until you delete your account. Unsaved and failed scans, including any uploaded photos, are not automatically deleted and remain associated with your account until account deletion. Deleting an account is designed to remove its cloud coin photos and associated identification and collection records, and reset local preferences. Provider logs or backups may persist under their own retention schedules; some information may also need to be retained to meet legal obligations or resolve security issues</p>

      <h2>Data sharing</h2>
      <p>We do not sell, trade, or rent your personal information. We share it with service providers as needed to operate Coin ID, when you authorize sharing, or when necessary to comply with law or protect users and the service</p>

      <h2>Your privacy rights</h2>
      <p>Depending on applicable law, you may request access to your personal information, correction, deletion, or a portable copy, and withdraw consent where processing relies on consent. Contact us using the email below. We may need to verify that the request concerns your account before providing or changing information</p>

      <h2>Your choices and requests</h2>
      <p>You choose which photos to submit and whether to use a guest account or supported sign-in provider. You can manage camera access in iOS Settings. Account controls include account deletion; you can also contact us for access, correction, or deletion assistance. Guest-account recovery may be limited if you sign out or lose access to the device before linking a sign-in provider</p>

      <h2>International processing and security</h2>
      <p>Our providers may process information in countries other than where you live. We use authenticated access and private storage to protect account records and photos. No storage or transmission method guarantees complete security</p>

      <h2>Analytics and advertising</h2>
      <p>Coin ID does not use advertising or cross-app tracking SDKs or collect advertising identifiers. RevenueCat provides subscription analytics, and we analyze completed onboarding records to improve the app</p>

      <h2>Paid features</h2>
      <p>Apple processes App Store payments; we do not receive your payment card details. RevenueCat handles subscription status and access using your Coin ID account identifier and purchase information, such as the purchased product, transaction information, and subscription status. We use this information to provide paid access, restore purchases, and apply subscription changes</p>

      <h2>Age eligibility</h2>
      <p>The Gemini-powered service is intended for adults aged 18 and over. If you believe a person under 18 has submitted personal information, contact us so we can investigate and address it</p>

      <h2>Changes to this policy</h2>
      <p>We will revise the effective date when this policy changes and provide additional notice where required. We review this policy when service features or data practices change</p>

      <h2>Contact</h2>
      <p>For privacy questions, access, correction, or deletion requests, email <a href="mailto:ngoctruonggia@gmail.com">ngoctruonggia@gmail.com</a></p>
      <p>Read our <Link href="/coinid/terms">Terms of Service</Link></p>
    </LegalPage>
  );
}

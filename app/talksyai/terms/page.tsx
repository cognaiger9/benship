import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — TalksyAI",
  description: "The terms that govern your use of TalksyAI.",
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="July 22, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the AI Mock
        Interview – TalksyAI mobile app (the &quot;App&quot;). By downloading or
        using the App, you agree to these Terms. If you do not agree, please do
        not use the App.
      </p>

      <h2>The service</h2>
      <p>
        TalksyAI is an interview <strong>practice</strong> tool. It lets you
        rehearse job interviews out loud with an AI interviewer and receive
        automated feedback and scorecards. It is designed for preparation before
        an interview and is not intended to be used to obtain answers during a
        live interview, assessment, or examination.
      </p>

      <h2>Subscriptions and payments</h2>
      <ul>
        <li>
          TalksyAI is offered on a subscription basis: a{" "}
          <strong>weekly plan at $5.99/week</strong> and a{" "}
          <strong>yearly plan at $29.99/year that begins with a 3-day free
          trial</strong>. Prices may vary by region and are shown in the App
          before purchase.
        </li>
        <li>
          Payment is charged to your Apple ID account at confirmation of purchase.
        </li>
        <li>
          Subscriptions <strong>renew automatically</strong> unless auto-renew is
          turned off at least 24 hours before the end of the current period. Your
          account is charged for renewal within 24 hours before the period ends.
        </li>
        <li>
          You can manage or cancel your subscription, and turn off auto-renew, in
          your App Store account settings at any time.
        </li>
        <li>
          If you start a free trial, any unused portion is forfeited when you
          purchase a subscription. Refunds are handled by Apple in accordance with
          Apple&apos;s policies; we do not process payments directly.
        </li>
      </ul>

      <h2>Acceptable use</h2>
      <ul>
        <li>Use the App only for lawful, personal interview preparation.</li>
        <li>
          Do not use the App during an actual live interview, test, or assessment
          where doing so is prohibited or would be dishonest.
        </li>
        <li>
          Do not misuse, overload, reverse engineer, or attempt to disrupt the
          App or its AI systems, and do not submit unlawful, infringing, or
          harmful content.
        </li>
      </ul>

      <h2>AI-generated feedback</h2>
      <p>
        Questions, scores, and feedback in the App are generated automatically by
        AI models. They may contain errors or omissions and are provided for
        practice purposes only. They are <strong>not career, legal, financial, or
        professional advice</strong>, and we make no guarantee about interview
        outcomes, job offers, or any other results.
      </p>

      <h2>Your content</h2>
      <p>
        You retain ownership of the resumes, job descriptions, and other materials
        you upload. You grant us a limited license to process this content solely
        to provide the App&apos;s features to you — for example, to tailor
        interview questions and generate feedback. You are responsible for
        ensuring you have the right to share any content you upload.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The App, including its software, design, and content we provide, is owned
        by us and protected by applicable laws. We grant you a personal,
        non-exclusive, non-transferable license to use the App under these Terms.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the App at any time. We may suspend or terminate your
        access if you violate these Terms or misuse the service. Sections that by
        their nature should survive termination will continue to apply.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot; without
        warranties of any kind, to the fullest extent permitted by law. To the
        maximum extent permitted by law, we are not liable for any indirect,
        incidental, or consequential damages arising from your use of the App.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which the App
        provider is established, without regard to conflict-of-laws principles.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the effective date above and, where appropriate, notify you within the
        App. Continued use of the App after changes take effect constitutes
        acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href="mailto:benjamintr@benjamintr.com">benjamintr@benjamintr.com</a>.
      </p>
    </LegalPage>
  );
}

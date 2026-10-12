import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — TalksyAI",
  description: "How TalksyAI collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="July 22, 2026">
      <p>
        This Privacy Policy explains how TalksyAI (&quot;TalksyAI,&quot;
        &quot;we,&quot; &quot;us&quot;) collects, uses, and shares information
        when you use the AI Mock Interview – TalksyAI mobile app (the
        &quot;App&quot;). By using the App, you agree to the practices described
        here.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Account information.</strong> When you sign in with Sign in
          with Apple or Google Sign-In, we receive your name and email address to
          create and secure your account.
        </li>
        <li>
          <strong>Interview content.</strong> Transcripts of your practice
          interviews, the scorecards and feedback generated from them, and any
          resume or job-description files you choose to upload so we can tailor
          questions to you.
        </li>
        <li>
          <strong>Progress data.</strong> Usage information such as your scores,
          score trends, practice streaks, and XP.
        </li>
        <li>
          <strong>Subscription status.</strong> Whether you have an active
          subscription or trial (see &quot;Payments&quot; below).
        </li>
        <li>
          <strong>Device information.</strong> Basic technical data such as
          device type and app version, and a push notification token if you
          enable notifications.
        </li>
      </ul>

      <h2>Device permissions</h2>
      <p>
        Practice interviews are voice-based, so the App requests access to your{" "}
        <strong>microphone</strong> and <strong>speech recognition</strong>.
        During a session, your voice is streamed in real time so the AI
        interviewer can respond. We do not need these permissions except during
        an active interview, and you can revoke them at any time in your device
        settings.
      </p>

      <h2>Third-party services</h2>
      <p>
        We rely on a small number of trusted service providers to run the App.
        Data is shared with them only as needed to provide the service:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — hosts our authentication, database, and
          file storage. Your account data, transcripts, progress, and uploads are
          stored here.
        </li>
        <li>
          <strong>OpenAI</strong> — powers the realtime voice interview. Your
          voice is streamed directly between your device and OpenAI over a secure
          connection (WebRTC); the raw voice audio is <strong>not stored</strong>.
          OpenAI&apos;s language models also analyze the resulting transcript to
          generate your feedback and scorecard.
        </li>
        <li>
          <strong>Google Gemini</strong> — provides additional AI processing for
          generating interview questions and feedback.
        </li>
        <li>
          <strong>RevenueCat</strong> — manages subscriptions and entitlements.
          We do not receive or store your payment card details; payments are
          handled by Apple.
        </li>
        <li>
          <strong>Firebase Cloud Messaging</strong> — delivers push
          notifications if you enable them.
        </li>
        <li>
          <strong>Apple and Google</strong> — provide the sign-in services used
          to authenticate your account.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To run practice interviews and generate feedback and scorecards.</li>
        <li>To tailor questions to your resume, role, and job description.</li>
        <li>To track your progress, streaks, and score history over time.</li>
        <li>To manage your account, subscription, and notifications.</li>
        <li>To maintain, secure, and improve the App.</li>
      </ul>

      <h2>Data retention and deletion</h2>
      <p>
        We keep your account data and interview history for as long as your
        account is active so your progress is available to you. You can delete
        your account at any time from within the App or by contacting us, after
        which we delete your associated personal data, except where we are
        required to retain limited records by law.
      </p>

      <h2>Children</h2>
      <p>
        The App is not directed to children under 13, and we do not knowingly
        collect personal information from them. If you believe a child has
        provided us with personal information, please contact us and we will
        delete it.
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
        <a href="mailto:ngoctruonggia@gmail.com">ngoctruonggia@gmail.com</a>.
      </p>
    </LegalPage>
  );
}

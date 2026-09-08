'use client';

import { useEffect, useState } from 'react';

/** Read fragment-only credentials locally so tokens never reach the web server or logs. */
export default function InviteClient() {
  const [code, setCode] = useState('');
  const [notice, setNotice] = useState('');
  useEffect(() => {
    // Reopening a second invitation in the same tab must replace the displayed code.
    const readCode = () => {
      const values = new URLSearchParams(window.location.hash.slice(1));
      const candidate = (values.get('code') || '').replace(/\s/g, '').toUpperCase();
      setCode(/^[A-HJ-NP-Z2-9]{8}$/.test(candidate) ? candidate : '');
      setNotice('');
    };
    readCode();
    window.addEventListener('hashchange', readCode);
    return () => window.removeEventListener('hashchange', readCode);
  }, []);

  /** Clipboard failure leaves a selectable code and a useful manual fallback. */
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setNotice('Code copied');
    } catch {
      setNotice('Select the code above to copy it');
    }
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-16 text-ink sm:py-24">
      <article className="mx-auto flex max-w-md flex-col gap-8">
        <p className="text-sm font-semibold">75 Challenge</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Show up together</h1>
          <p className="text-lg text-ink-2">Follow each other’s progress while you each take on your own challenge</p>
        </div>
        {code ? (
          <section className="space-y-4 rounded-2xl border border-line bg-card p-6" aria-label="Invitation code">
            <p>Your invite code</p>
            <p className="select-all break-all font-mono text-3xl tracking-widest">{code.slice(0, 4)} {code.slice(4)}</p>
            <button onClick={copyCode} className="min-h-12 w-full rounded-xl border border-line px-4 py-3 font-semibold transition-colors hover:bg-sunken">Copy code</button>
            <p className="min-h-6 text-sm" role="status">{notice}</p>
          </section>
        ) : <p role="status">Open the complete invitation your friend shared to get your code</p>}
        <a href="https://apps.apple.com/app/id6788652357" className="min-h-12 rounded-2xl bg-brand px-6 py-4 text-center font-semibold text-inverse transition-colors hover:bg-brand-hover">Get 75 Challenge</a>
        <div className="space-y-4 text-sm text-ink-2">
          <p>After installing or updating, reopen your friend’s original link or enter this code in Friends</p>
          <p>You both approve sharing before progress is visible. Photos and task details stay private</p>
          <p>Invitations expire after seven days. Each person follows the app’s subscription requirements</p>
        </div>
      </article>
    </main>
  );
}

import type { Metadata } from 'next';
import InviteClient from './InviteClient';

export const metadata: Metadata = {
  title: 'Show up together | 75 Challenge',
  description: 'Follow each other’s challenge progress, one day at a time',
  robots: { index: false, follow: false },
  referrer: 'no-referrer',
};

/** Keep the invitation generic; names and progress require authenticated app access. */
export default function InvitePage() {
  return <InviteClient />;
}

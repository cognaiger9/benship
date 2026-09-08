/** Advertise only the invite path once the release team has configured the signed app ID. */
export const dynamic = 'force-static';

export function GET() {
  const appID = process.env.APPLE_APPLICATION_IDENTIFIER;
  const details = appID && /^[A-Z0-9]+\.[A-Za-z0-9.-]+$/.test(appID)
    ? [{ appIDs: [appID], components: [{ '/': '/invite', comment: '75 Challenge invitations' }] }]
    : [];
  return Response.json({ applinks: { details } }, {
    headers: { 'Cache-Control': 'public, max-age=300' },
  });
}

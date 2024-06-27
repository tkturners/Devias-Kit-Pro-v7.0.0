import * as React from 'react';

import { config } from '@/config';
import { ThreadView } from '@/components/dashboard/mail/thread-view';

export const metadata = { title: `Thread | Mail | Dashboard | ${config.site.name}` };

export default function Page({ params }) {
  const { threadId } = params;

  return <ThreadView threadId={threadId} />;
}

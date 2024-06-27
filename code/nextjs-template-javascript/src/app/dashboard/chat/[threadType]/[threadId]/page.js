import * as React from 'react';

import { config } from '@/config';
import { ThreadView } from '@/components/dashboard/chat/thread-view';

export const metadata = { title: `Thread | Chat | Dashboard | ${config.site.name}` };

export default function Page({ params }) {
  const { threadId, threadType } = params;

  return <ThreadView threadId={threadId} threadType={threadType} />;
}

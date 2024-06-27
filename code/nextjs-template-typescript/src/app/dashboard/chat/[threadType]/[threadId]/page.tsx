import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { ThreadView } from '@/components/dashboard/chat/thread-view';
import type { ThreadType } from '@/components/dashboard/chat/types';

export const metadata = { title: `Thread | Chat | Dashboard | ${config.site.name}` } satisfies Metadata;

interface PageProps {
  params: { threadId: string; threadType: ThreadType };
}

export default function Page({ params }: PageProps): React.JSX.Element {
  const { threadId, threadType } = params;

  return <ThreadView threadId={threadId} threadType={threadType} />;
}

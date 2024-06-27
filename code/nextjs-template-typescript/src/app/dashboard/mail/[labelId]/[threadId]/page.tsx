import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { ThreadView } from '@/components/dashboard/mail/thread-view';

export const metadata = { title: `Thread | Mail | Dashboard | ${config.site.name}` } satisfies Metadata;

interface PageProps {
  params: { threadId: string };
}

export default function Page({ params }: PageProps): React.JSX.Element {
  const { threadId } = params;

  return <ThreadView threadId={threadId} />;
}

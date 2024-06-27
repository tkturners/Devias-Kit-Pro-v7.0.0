import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { ThreadsView } from '@/components/dashboard/mail/threads-view';

export const metadata = { title: `Mail | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <ThreadsView />;
}

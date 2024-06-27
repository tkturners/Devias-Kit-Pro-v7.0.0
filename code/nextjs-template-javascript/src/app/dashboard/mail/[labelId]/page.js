import * as React from 'react';

import { config } from '@/config';
import { ThreadsView } from '@/components/dashboard/mail/threads-view';

export const metadata = { title: `Mail | Dashboard | ${config.site.name}` };

export default function Page() {
  return <ThreadsView />;
}

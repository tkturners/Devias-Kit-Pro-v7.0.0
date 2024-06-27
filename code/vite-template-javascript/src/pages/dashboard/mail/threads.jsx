import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { ThreadsView } from '@/components/dashboard/mail/threads-view';

const metadata = { title: `Mail | Dashboard | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <ThreadsView />
    </React.Fragment>
  );
}

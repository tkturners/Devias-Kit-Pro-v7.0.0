import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { ComposeView } from '@/components/dashboard/chat/compose-view';

const metadata = { title: `Compose | Chat | Dashboard | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <ComposeView />
    </React.Fragment>
  );
}

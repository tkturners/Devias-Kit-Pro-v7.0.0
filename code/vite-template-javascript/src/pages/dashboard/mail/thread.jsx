import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { config } from '@/config';
import { ThreadView } from '@/components/dashboard/mail/thread-view';

const metadata = { title: `Thread | Mail | Dashboard | ${config.site.name}` };

export function Page() {
  const { threadId } = useParams();

  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <ThreadView threadId={threadId} />
    </React.Fragment>
  );
}

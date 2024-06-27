import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { config } from '@/config';
import { ThreadView } from '@/components/dashboard/chat/thread-view';

const metadata = { title: `Thread | Chat | Dashboard | ${config.site.name}` };

export function Page() {
  const { threadId, threadType } = useParams();

  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <ThreadView threadId={threadId} threadType={threadType} />
    </React.Fragment>
  );
}

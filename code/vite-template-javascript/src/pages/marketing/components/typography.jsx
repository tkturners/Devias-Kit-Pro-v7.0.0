import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { Layout } from '@/components/widgets/layout';
import { Typography1 } from '@/components/widgets/typography/typography-1';

const metadata = { title: `Typography | Components | ${config.site.name}` };

const components = [{ title: 'Typography 1', element: <Typography1 /> }];

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <Layout components={components} title="Typography" />
    </React.Fragment>
  );
}

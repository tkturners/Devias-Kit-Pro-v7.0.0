import * as React from 'react';
import type { Metadata } from 'next';
import Divider from '@mui/material/Divider';

import { config } from '@/config';
import { Faqs } from '@/components/marketing/pricing/faqs';
import { PlansTable } from '@/components/marketing/pricing/plans-table';

export const metadata = { title: `Pricing | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <main>
      <PlansTable />
      <Divider />
      <Faqs />
    </main>
  );
}

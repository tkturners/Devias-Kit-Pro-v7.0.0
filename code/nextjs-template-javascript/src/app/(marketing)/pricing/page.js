import * as React from 'react';
import Divider from '@mui/material/Divider';

import { config } from '@/config';
import { Faqs } from '@/components/marketing/pricing/faqs';
import { PlansTable } from '@/components/marketing/pricing/plans-table';

export const metadata = { title: `Pricing | ${config.site.name}` };

export default function Page() {
  return (
    <main>
      <PlansTable />
      <Divider />
      <Faqs />
    </main>
  );
}

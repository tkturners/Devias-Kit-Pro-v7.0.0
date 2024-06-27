import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { dayjs } from '@/lib/dayjs';
import { Invoices } from '@/components/dashboard/settings/invoices';
import { Plans } from '@/components/dashboard/settings/plans';

export const metadata = { title: `Billing | Settings | Dashboard | ${config.site.name}` };

export default function Page() {
  return (
    <Stack spacing={4}>
      <div>
        <Typography variant="h4">Billing & plans</Typography>
      </div>
      <Stack spacing={4}>
        <Plans />
        <Invoices
          invoices={[
            { id: 'INV-003', currency: 'USD', totalAmount: 14.99, issueDate: dayjs().subtract(1, 'month').toDate() },
            { id: 'INV-002', currency: 'USD', totalAmount: 14.99, issueDate: dayjs().subtract(2, 'months').toDate() },
            { id: 'INV-001', currency: 'USD', totalAmount: 14.99, issueDate: dayjs().subtract(3, 'months').toDate() },
          ]}
        />
      </Stack>
    </Stack>
  );
}

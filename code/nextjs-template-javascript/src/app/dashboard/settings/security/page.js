import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { dayjs } from '@/lib/dayjs';
import { LoginHistory } from '@/components/dashboard/settings/login-history';
import { MultiFactor } from '@/components/dashboard/settings/multi-factor';
import { PasswordForm } from '@/components/dashboard/settings/password-form';

export const metadata = { title: `Security | Settings | Dashboard | ${config.site.name}` };

export default function Page() {
  return (
    <Stack spacing={4}>
      <div>
        <Typography variant="h4">Security</Typography>
      </div>
      <Stack spacing={4}>
        <PasswordForm />
        <MultiFactor />
        <LoginHistory
          events={[
            {
              id: 'EV-002',
              type: 'Credential login',
              ip: '95.130.17.84',
              userAgent: 'Chrome, Mac OS 10.15.7',
              createdAt: dayjs().subtract(1, 'day').subtract(1, 'hour').subtract(5, 'minute').toDate(),
            },
            {
              id: 'EV-001',
              type: 'Credential login',
              ip: '95.130.17.84',
              userAgent: 'Chrome, Mac OS 10.15.7',
              createdAt: dayjs().subtract(1, 'day').subtract(1, 'hour').subtract(25, 'minute').toDate(),
            },
          ]}
        />
      </Stack>
    </Stack>
  );
}

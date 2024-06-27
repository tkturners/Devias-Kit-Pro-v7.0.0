import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { Members } from '@/components/dashboard/settings/members';

export const metadata = { title: `Team | Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={4}>
      <div>
        <Typography variant="h4">Team</Typography>
      </div>
      <Members
        members={[
          {
            id: 'USR-000',
            name: 'Sofia Rivers',
            avatar: '/assets/avatar.png',
            email: 'sofia@devias.io',
            role: 'Owner',
          },
          {
            id: 'USR-002',
            name: 'Siegbert Gottfried',
            avatar: '/assets/avatar-2.png',
            email: 'siegbert.gottfried@domain.com',
            role: 'Standard',
          },
        ]}
      />
    </Stack>
  );
}

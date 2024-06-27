import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { Members } from '@/components/dashboard/settings/members';

const metadata = { title: `Team | Settings | Dashboard | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
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
    </React.Fragment>
  );
}

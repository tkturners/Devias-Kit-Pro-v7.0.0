import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { AccountDetails } from '@/components/dashboard/settings/account-details';
import { DeleteAccount } from '@/components/dashboard/settings/delete-account';
import { Privacy } from '@/components/dashboard/settings/privacy';
import { ThemeSwitch } from '@/components/dashboard/settings/theme-switch';

const metadata = { title: `Account | Settings | Dashboard | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <Stack spacing={4}>
        <div>
          <Typography variant="h4">Account</Typography>
        </div>
        <Stack spacing={4}>
          <AccountDetails />
          <ThemeSwitch />
          <Privacy />
          <DeleteAccount />
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

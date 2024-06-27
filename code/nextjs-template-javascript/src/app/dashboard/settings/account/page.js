import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { AccountDetails } from '@/components/dashboard/settings/account-details';
import { DeleteAccount } from '@/components/dashboard/settings/delete-account';
import { Privacy } from '@/components/dashboard/settings/privacy';
import { ThemeSwitch } from '@/components/dashboard/settings/theme-switch';

export const metadata = { title: `Account | Settings | Dashboard | ${config.site.name}` };

export default function Page() {
  return (
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
  );
}

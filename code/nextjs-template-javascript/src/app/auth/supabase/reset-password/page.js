import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { paths } from '@/paths';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';
import { ResetPasswordForm } from '@/components/auth/supabase/reset-password-form';
import { DynamicLogo } from '@/components/core/logo';

export const metadata = { title: `Reset password | Supabase | Auth | ${config.site.name}` };

export default function Page() {
  return (
    <GuestGuard>
      <SplitLayout>
        <Stack spacing={4}>
          <div>
            <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
              <DynamicLogo colorDark="light" colorLight="dark" height={32} width={122} />
            </Box>
          </div>
          <Typography variant="h5">Reset password</Typography>
          <ResetPasswordForm />
        </Stack>
      </SplitLayout>
    </GuestGuard>
  );
}

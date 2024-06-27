import * as React from 'react';
import RouterLink from 'next/link';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { paths } from '@/paths';
import { ResetPasswordButton } from '@/components/auth/firebase/reset-password-button';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';
import { DynamicLogo } from '@/components/core/logo';

export const metadata = { title: `Recovery link sent | Firebase | Auth | ${config.site.name}` };

export default function Page({ searchParams }) {
  const { email } = searchParams;

  if (!email) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert color="error">Email is required</Alert>
      </Box>
    );
  }

  return (
    <GuestGuard>
      <SplitLayout>
        <Stack spacing={4}>
          <div>
            <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
              <DynamicLogo colorDark="light" colorLight="dark" height={32} width={122} />
            </Box>
          </div>
          <Typography variant="h5">Recovery link sent</Typography>
          <Stack spacing={1}>
            <Typography>
              If an account exists with email{' '}
              <Typography component="span" variant="subtitle1">
                &quot;{email}&quot;
              </Typography>
              , you will receive a recovery email.
            </Typography>
            <div>
              <Link component={RouterLink} href={paths.auth.firebase.resetPassword} variant="subtitle2">
                Use another email
              </Link>
            </div>
          </Stack>
          <ResetPasswordButton email={email}>Resend</ResetPasswordButton>
        </Stack>
      </SplitLayout>
    </GuestGuard>
  );
}

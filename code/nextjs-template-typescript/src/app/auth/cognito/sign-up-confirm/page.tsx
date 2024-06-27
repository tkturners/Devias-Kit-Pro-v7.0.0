import * as React from 'react';
import type { Metadata } from 'next';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import { config } from '@/config';
import { SignUpConfirmForm } from '@/components/auth/cognito/sign-up-confirm-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

export const metadata: Metadata = { title: `Sign up confirm | Cognito | Auth | ${config.site.name}` };

interface PageProps {
  searchParams: { email?: string };
}

export default function Page({ searchParams }: PageProps): React.JSX.Element {
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
        <SignUpConfirmForm email={email} />
      </SplitLayout>
    </GuestGuard>
  );
}

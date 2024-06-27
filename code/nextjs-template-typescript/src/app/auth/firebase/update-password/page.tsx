import * as React from 'react';
import type { Metadata } from 'next';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import { config } from '@/config';
import { UpdatePasswordForm } from '@/components/auth/firebase/update-password-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

export const metadata: Metadata = { title: `Update password | Firebase | Auth | ${config.site.name}` };

interface PageProps {
  searchParams: { oobCode?: string };
}

export default function Page({ searchParams }: PageProps): React.JSX.Element {
  const { oobCode } = searchParams;

  if (!oobCode) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert color="error">Code is required</Alert>
      </Box>
    );
  }

  return (
    <GuestGuard>
      <SplitLayout>
        <UpdatePasswordForm oobCode={oobCode} />
      </SplitLayout>
    </GuestGuard>
  );
}

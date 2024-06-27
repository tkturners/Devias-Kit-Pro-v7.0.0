import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { NewPasswordRequiredForm } from '@/components/auth/cognito/new-password-required-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

export const metadata: Metadata = { title: `New password required | Cognito | Auth | ${config.site.name}` };

export default function Page(): React.JSX.Element {
  return (
    <GuestGuard>
      <SplitLayout>
        <NewPasswordRequiredForm />
      </SplitLayout>
    </GuestGuard>
  );
}

import * as React from 'react';

import { config } from '@/config';
import { NewPasswordRequiredForm } from '@/components/auth/cognito/new-password-required-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

export const metadata = { title: `New password required | Cognito | Auth | ${config.site.name}` };

export default function Page() {
  return (
    <GuestGuard>
      <SplitLayout>
        <NewPasswordRequiredForm />
      </SplitLayout>
    </GuestGuard>
  );
}

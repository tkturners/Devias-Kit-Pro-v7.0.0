import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { NewPasswordRequiredForm } from '@/components/auth/cognito/new-password-required-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

const metadata = { title: `New password required | Cognito | Auth | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <GuestGuard>
        <SplitLayout>
          <NewPasswordRequiredForm />
        </SplitLayout>
      </GuestGuard>
    </React.Fragment>
  );
}

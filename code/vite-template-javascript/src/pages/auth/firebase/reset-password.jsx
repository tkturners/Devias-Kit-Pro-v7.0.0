import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { ResetPasswordForm } from '@/components/auth/firebase/reset-password-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

const metadata = { title: `Reset password | Firebase | Auth | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <GuestGuard>
        <SplitLayout>
          <ResetPasswordForm />
        </SplitLayout>
      </GuestGuard>
    </React.Fragment>
  );
}

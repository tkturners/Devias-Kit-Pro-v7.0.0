import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { SignInForm } from '@/components/auth/firebase/sign-in-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

const metadata = { title: `Sign in | Firebase | Auth | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <GuestGuard>
        <SplitLayout>
          <SignInForm />
        </SplitLayout>
      </GuestGuard>
    </React.Fragment>
  );
}

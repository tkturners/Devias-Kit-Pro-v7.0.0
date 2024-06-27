import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { SignUpForm } from '@/components/auth/firebase/sign-up-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

const metadata = { title: `Sign up | Firebase | Auth | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <GuestGuard>
        <SplitLayout>
          <SignUpForm />
        </SplitLayout>
      </GuestGuard>
    </React.Fragment>
  );
}

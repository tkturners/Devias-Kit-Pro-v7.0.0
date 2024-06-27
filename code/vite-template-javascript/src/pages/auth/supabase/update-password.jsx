import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';
import { AuthGuard } from '@/components/auth/auth-guard';
import { SplitLayout } from '@/components/auth/split-layout';
import { UpdatePasswordForm } from '@/components/auth/supabase/update-password-form';

const metadata = { title: `Update password | Supabase | Auth | ${config.site.name}` };

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <AuthGuard>
        <SplitLayout>
          <UpdatePasswordForm />
        </SplitLayout>
      </AuthGuard>
    </React.Fragment>
  );
}

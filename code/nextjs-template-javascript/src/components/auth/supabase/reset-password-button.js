'use client';

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@/paths';
import { createClient as createSupabaseClient } from '@/lib/supabase/client';
import { toast } from '@/components/core/toaster';

export function ResetPasswordButton({ children, email }) {
  const [supabaseClient] = React.useState(createSupabaseClient());

  const [isPending, setIsPending] = React.useState(false);
  const [submitError, setSubmitError] = React.useState();

  const handle = React.useCallback(async () => {
    if (!email) {
      return;
    }

    setIsPending(true);
    setSubmitError(undefined);

    const redirectToUrl = new URL(paths.auth.supabase.callback.pkce, window.location.origin);
    redirectToUrl.searchParams.set('next', paths.auth.supabase.updatePassword);

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: redirectToUrl.href });

    if (error) {
      setSubmitError(error.message);
      setIsPending(false);
      return;
    }

    setIsPending(false);
    toast.success('Recovery link sent');
  }, [supabaseClient, email]);

  return (
    <Stack spacing={1}>
      {submitError ? <Alert color="error">{submitError}</Alert> : null}
      <Button disabled={!email || isPending} onClick={handle} variant="contained">
        {children}
      </Button>
      <Typography sx={{ textAlign: 'center' }} variant="body2">
        Wait a few minutes then try again
      </Typography>
    </Stack>
  );
}

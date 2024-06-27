'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';

import { paths } from '@/paths';
import { logger } from '@/lib/default-logger';
import { createClient as createSupabaseClient } from '@/lib/supabase/client';
import { toast } from '@/components/core/toaster';

// NOTE: This is a `Page` and not a `GET` route because
//  Supabase has endpoints that still use
//  Implicit Flow instead of PKCE Flow, such as `resend sign-up email` process.

export default function Page() {
  const [supabaseClient] = React.useState(createSupabaseClient());
  const router = useRouter();
  const executedRef = React.useRef(false);
  const [displayError, setDisplayError] = React.useState(null);

  const handle = React.useCallback(async () => {
    // Prevent rerun on DEV mode
    if (executedRef.current) {
      return;
    }

    executedRef.current = true;

    // Callback `error` is received as a URL hash `#error=value`
    // Callback `access_token` is received as a URL hash `#access_token=value`

    const hash = window.location.hash || '#';
    const hashParams = new URLSearchParams(hash.split('#')[1]);
    const searchParams = new URLSearchParams(window.location.search);

    if (hashParams.get('error')) {
      logger.debug(hashParams.get('error_description'));
      setDisplayError('Something went wrong');
      return;
    }

    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');

    if (!accessToken || !refreshToken) {
      setDisplayError('Access token or refresh token is missing');
      return;
    }

    const { error } = await supabaseClient.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });

    if (error) {
      logger.debug(error.message);
      toast.error('Something went wrong');
      router.push(paths.auth.supabase.signIn);
      return;
    }

    const next = searchParams.get('next') || paths.dashboard.overview;

    router.push(next);
  }, [supabaseClient, router]);

  React.useEffect(() => {
    handle().catch(logger.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, []);

  if (displayError) {
    return <Alert color="error">{displayError}</Alert>;
  }

  return null;
}

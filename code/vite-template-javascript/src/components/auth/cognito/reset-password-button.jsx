'use client';

import * as React from 'react';
import { resetPassword } from '@aws-amplify/auth';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { toast } from '@/components/core/toaster';

export function ResetPasswordButton({ children, email }) {
  const [isPending, setIsPending] = React.useState(false);
  const [submitError, setSubmitError] = React.useState();

  const handle = React.useCallback(async () => {
    setIsPending(true);
    setSubmitError(undefined);

    try {
      await resetPassword({ username: email });

      setIsPending(false);
      toast.success('Recovery code sent');
    } catch (err) {
      setSubmitError(err.message);
      setIsPending(false);
    }
  }, [email]);

  return (
    <Stack spacing={1} sx={{ alignItems: 'center' }}>
      <Button disabled={isPending} onClick={handle}>
        {children}
      </Button>
      {submitError ? <Alert color="error">{submitError}</Alert> : null}
      <Typography sx={{ textAlign: 'center' }} variant="body2">
        Wait a few minutes then try again
      </Typography>
    </Stack>
  );
}

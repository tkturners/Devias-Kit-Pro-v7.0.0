'use client';

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { sendPasswordResetEmail } from 'firebase/auth';

import { getFirebaseAuth } from '@/lib/auth/firebase/client';

export function ResetPasswordButton({ children, email }) {
  const [firebaseAuth] = React.useState(getFirebaseAuth());

  const [isPending, setIsPending] = React.useState(false);
  const [submitError, setSubmitError] = React.useState();

  const handle = React.useCallback(async () => {
    if (!email) {
      return;
    }

    try {
      await sendPasswordResetEmail(firebaseAuth, email);
    } catch (err) {
      setSubmitError(err.message);
      setIsPending(false);
    }
  }, [firebaseAuth, email]);

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

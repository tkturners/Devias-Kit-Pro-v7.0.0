'use client';

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from 'firebase/auth';

import { getFirebaseAuth } from '@/lib/auth/firebase/client';
import { logger } from '@/lib/default-logger';
import { toast } from '@/components/core/toaster';

export function FirebaseSignOut() {
  const [firebaseAuth] = React.useState(getFirebaseAuth());

  const handleSignOut = React.useCallback(async () => {
    try {
      await signOut(firebaseAuth);
      // UserProvider will handle Router refresh
      // After refresh, GuestGuard will handle the redirect
    } catch (err) {
      logger.error('Sign out error', err);
      toast.error('Something went wrong, unable to sign out');
    }
  }, [firebaseAuth]);

  return (
    <MenuItem component="div" onClick={handleSignOut} sx={{ justifyContent: 'center' }}>
      Sign out
    </MenuItem>
  );
}

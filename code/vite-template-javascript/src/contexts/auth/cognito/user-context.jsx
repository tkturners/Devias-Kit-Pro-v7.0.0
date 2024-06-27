'use client';

import * as React from 'react';
import { Hub } from 'aws-amplify/utils';

import '@/lib/auth/cognito/client';

import { getCurrentUser } from '@aws-amplify/auth';

import { logger } from '@/lib/default-logger';

export const UserContext = React.createContext(undefined);

export function UserProvider({ children }) {
  const [state, setState] = React.useState({
    user: null,
    error: null,
    isLoading: true,
  });

  React.useEffect(() => {
    // Only run on initial mount.
    getCurrentUser()
      .then((user) => {
        setState({ user: { id: user.userId, email: user.username }, error: null, isLoading: false });
      })
      .catch(() => {
        setState({ user: null, error: null, isLoading: false });
      });
  }, []);

  React.useEffect(() => {
    function handleSignedIn(data) {
      setState({ user: { id: data.userId, email: data.username }, error: null, isLoading: false });
    }

    function handleSignedOut() {
      setState({ user: null, error: null, isLoading: false });
    }

    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      logger.debug('[Auth] Hub event:', payload);

      if (payload.event === 'signedIn') {
        handleSignedIn(payload.data);
      }

      if (payload.event === 'signedOut') {
        handleSignedOut();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>;
}

export const UserConsumer = UserContext.Consumer;

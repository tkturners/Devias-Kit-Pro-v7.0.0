'use client';

import * as React from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { getFirebaseAuth } from '@/lib/auth/firebase/client';
import { logger } from '@/lib/default-logger';

export const UserContext = React.createContext(undefined);

export function UserProvider({ children }) {
  const [firebaseAuth] = React.useState(getFirebaseAuth());

  const [state, setState] = React.useState({
    user: null,
    error: null,
    isLoading: true,
  });

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      logger.debug('[Auth] onAuthStateChanged:', user);

      setState((prev) => ({
        ...prev,
        user: user
          ? {
              id: user.uid,
              email: user.email ?? undefined,
              name: user.displayName ?? undefined,
              avatar: user.photoURL ?? undefined,
            }
          : null,
        error: null,
        isLoading: false,
      }));
    });

    return () => {
      unsubscribe();
    };
  }, [firebaseAuth]);

  return <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>;
}

export const UserConsumer = UserContext.Consumer;

'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { logger } from '@/lib/default-logger';
import { createClient as createSupabaseClient } from '@/lib/supabase/client';

export const UserContext = React.createContext(undefined);

export function UserProvider({ children }) {
  const router = useRouter();

  const [supabaseClient] = React.useState(createSupabaseClient());

  const [state, setState] = React.useState({
    user: null,
    error: null,
    isLoading: true,
  });

  React.useEffect(() => {
    function handleInitialSession(session) {
      const user = session?.user;

      setState((prev) => ({
        ...prev,
        user: user
          ? {
              id: user.id ?? undefined,
              email: user.email ?? undefined,
              name: user.user_metadata?.full_name ?? undefined,
              avatar: user.user_metadata?.avatar_url ?? undefined,
            }
          : null,
        error: null,
        isLoading: false,
      }));
    }

    function handleSignedIn(session) {
      const user = session?.user;

      setState((prev) => ({
        ...prev,
        user: user
          ? {
              id: user.id ?? undefined,
              email: user.email ?? undefined,
              name: user.user_metadata?.full_name ?? undefined,
              avatar: user.user_metadata?.avatar_url ?? undefined,
            }
          : null,
        error: null,
        isLoading: false,
      }));

      router.refresh();
    }

    function handleSignedOut() {
      setState((prev) => ({ ...prev, user: null, error: null, isLoading: false }));

      router.refresh();
    }

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event, session) => {
      logger.debug('[Auth] onAuthStateChange:', event, session);

      if (event === 'INITIAL_SESSION') {
        handleInitialSession(session);
      }

      if (event === 'SIGNED_IN') {
        handleSignedIn(session);
      }

      if (event === 'SIGNED_OUT') {
        handleSignedOut();
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [router, supabaseClient]);

  return <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>;
}

export const UserConsumer = UserContext.Consumer;

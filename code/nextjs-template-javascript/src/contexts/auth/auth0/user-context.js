'use client';

import * as React from 'react';
import { UserProvider as Auth0UserProvider, useUser } from '@auth0/nextjs-auth0/client';

import { paths } from '@/paths';

export const UserContext = React.createContext(undefined);

function UserProviderImpl({ children }) {
  const { user, error, isLoading, checkSession } = useUser();

  return (
    <UserContext.Provider
      value={{ user: user ? user : null, error: error ? error.message : null, isLoading, checkSession }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function UserProvider({ children }) {
  return (
    <Auth0UserProvider loginUrl={paths.auth.auth0.signIn} profileUrl={paths.auth.auth0.profile}>
      <UserProviderImpl>{children}</UserProviderImpl>
    </Auth0UserProvider>
  );
}

export const UserConsumer = UserContext.Consumer;

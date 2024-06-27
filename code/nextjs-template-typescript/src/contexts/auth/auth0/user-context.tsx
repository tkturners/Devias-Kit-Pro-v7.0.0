'use client';

import * as React from 'react';
import { UserProvider as Auth0UserProvider, useUser } from '@auth0/nextjs-auth0/client';

import type { User } from '@/types/user';
import { paths } from '@/paths';

import type { UserContextValue } from '../types';

export const UserContext = React.createContext<UserContextValue | undefined>(undefined);

export interface UserProviderProps {
  children: React.ReactNode;
}

function UserProviderImpl({ children }: UserProviderProps): React.JSX.Element {
  const { user, error, isLoading, checkSession } = useUser();

  return (
    <UserContext.Provider
      value={{ user: user ? (user as User) : null, error: error ? error.message : null, isLoading, checkSession }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function UserProvider({ children }: UserProviderProps): React.JSX.Element {
  return (
    <Auth0UserProvider loginUrl={paths.auth.auth0.signIn} profileUrl={paths.auth.auth0.profile}>
      <UserProviderImpl>{children}</UserProviderImpl>
    </Auth0UserProvider>
  );
}

export const UserConsumer = UserContext.Consumer;

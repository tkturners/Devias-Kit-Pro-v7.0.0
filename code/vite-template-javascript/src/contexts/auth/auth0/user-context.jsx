'use client';

import * as React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

import { config } from '@/config';
import { paths } from '@/paths';

export const UserContext = React.createContext(undefined);

function UserProviderImpl({ children }) {
  const { user, error, isLoading } = useAuth0();

  return (
    <UserContext.Provider value={{ user: user ? user : null, error: error ? error.message : null, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function UserProvider({ children }) {
  return (
    <Auth0Provider
      authorizationParams={{ redirect_uri: `${window.location.origin}${paths.auth.auth0.callback}` }}
      cacheLocation="localstorage"
      clientId={config.auth0.clientId}
      domain={config.auth0.domain}
      skipRedirectCallback
    >
      <UserProviderImpl>{children}</UserProviderImpl>
    </Auth0Provider>
  );
}

export const UserConsumer = UserContext.Consumer;

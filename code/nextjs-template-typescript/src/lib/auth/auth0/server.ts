import { initAuth0 } from '@auth0/nextjs-auth0';

import { config } from '@/config';

// Read the notes from https://auth0.github.io/nextjs-auth0/types/config.ConfigParameters.html

export const auth0 = initAuth0({
  secret: config.auth0.secret!,
  baseURL: config.auth0.baseUrl!,
  issuerBaseURL: config.auth0.issuerBaseUrl!,
  clientID: config.auth0.clientId!,
  clientSecret: config.auth0.clientSecret!,
});

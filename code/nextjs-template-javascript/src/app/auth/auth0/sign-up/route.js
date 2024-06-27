import { config } from '@/config';
import { auth0 } from '@/lib/auth/auth0/server';

export const dynamic = 'force-dynamic';

export async function GET(req, ctx) {
  return auth0.handleLogin(req, ctx, {
    authorizationParams: { redirect_uri: `${config.auth0.baseUrl}/auth/auth0/callback`, login_hint: 'signup' },
  });
}

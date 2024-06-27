import type { NextRequest } from 'next/server';
import type { AppRouteHandlerFnContext } from '@auth0/nextjs-auth0';

import { auth0 } from '@/lib/auth/auth0/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, ctx: AppRouteHandlerFnContext): Promise<Response> {
  return auth0.handleLogout(req, ctx);
}

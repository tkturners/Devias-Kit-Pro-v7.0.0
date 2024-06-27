import type { NextRequest, NextResponse } from 'next/server';

import { logger } from '@/lib/default-logger';
import { createClient } from '@/lib/supabase/middleware';

export async function supabaseMiddleware(req: NextRequest): Promise<NextResponse> {
  const { supabaseClient, res } = createClient(req);

  try {
    const { error } = await supabaseClient.auth.getSession();

    if (error) {
      logger.debug('Something went wrong, deleted auth token cookie');
      removeAuthToken(res);
    }
  } catch (err) {
    logger.debug('Something went wrong, deleted auth token cookie');
    removeAuthToken(res);
    throw err;
  }

  return res;
}

// Supabase does not automatically remove the auth token in
// case of token expiration, invalidity, etc.
// If an error is thrown, we assume that the token is no longer valid
// and we remove it. Thus the user will have to reauthenticate.
function removeAuthToken(res: NextResponse): void {
  res.cookies.delete(`sb-${process.env.NEXT_PUBLIC_SUPABASE_REF_ID}-auth-token`);
}

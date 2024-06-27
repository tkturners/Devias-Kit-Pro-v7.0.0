import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { CookieOptions } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

import { config } from '@/config';

type ResponseCookie = Pick<CookieOptions, 'httpOnly' | 'maxAge' | 'priority'>;

export function createClient(req: NextRequest): { supabaseClient: SupabaseClient; res: NextResponse } {
  // Create an unmodified response
  let res = NextResponse.next({ request: { headers: req.headers } });

  const supabaseClient = createServerClient(config.supabase.url!, config.supabase.anonKey!, {
    cookies: {
      get(name: string) {
        return req.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        // If the cookie is updated, update the cookies for the request and response
        req.cookies.set({ name, value, ...(options as Partial<ResponseCookie>) });
        res = NextResponse.next({ request: { headers: req.headers } });
        res.cookies.set({ name, value, ...(options as Partial<ResponseCookie>) });
      },
      remove(name: string, options: CookieOptions) {
        // If the cookie is removed, update the cookies for the request and response
        req.cookies.set({ name, value: '', ...(options as Partial<ResponseCookie>) });
        res = NextResponse.next({ request: { headers: req.headers } });
        res.cookies.set({ name, value: '', ...(options as Partial<ResponseCookie>) });
      },
    },
  });

  return { supabaseClient, res };
}

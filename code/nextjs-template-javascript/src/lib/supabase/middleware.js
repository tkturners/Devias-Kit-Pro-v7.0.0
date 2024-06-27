import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

import { config } from '@/config';

export function createClient(req) {
  // Create an unmodified response
  let res = NextResponse.next({ request: { headers: req.headers } });

  const supabaseClient = createServerClient(config.supabase.url, config.supabase.anonKey, {
    cookies: {
      get(name) {
        return req.cookies.get(name)?.value;
      },
      set(name, value, options) {
        // If the cookie is updated, update the cookies for the request and response
        req.cookies.set({ name, value, ...options });
        res = NextResponse.next({ request: { headers: req.headers } });
        res.cookies.set({ name, value, ...options });
      },
      remove(name, options) {
        // If the cookie is removed, update the cookies for the request and response
        req.cookies.set({ name, value: '', ...options });
        res = NextResponse.next({ request: { headers: req.headers } });
        res.cookies.set({ name, value: '', ...options });
      },
    },
  });

  return { supabaseClient, res };
}

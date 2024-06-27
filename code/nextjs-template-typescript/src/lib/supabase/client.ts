import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

import { config } from '@/config';

export function createClient(): SupabaseClient {
  return createBrowserClient(config.supabase.url!, config.supabase.anonKey!);
}

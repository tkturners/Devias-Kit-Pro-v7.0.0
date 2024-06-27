'use server';

import { cookies } from 'next/headers';

import type { Settings } from '@/types/settings';
import { logger } from '@/lib/default-logger';

/**
 * Retrieve the settings from client's cookies.
 * This should be used in Server Components.
 */
export async function getSettings(): Promise<Partial<Settings>> {
  const cookieStore = cookies();

  const settingsStr = cookieStore.get('app.settings')?.value;
  let settings: Partial<Settings>;

  if (settingsStr) {
    try {
      settings = JSON.parse(settingsStr) as Partial<Settings>;
    } catch {
      logger.error('Unable to parse the settings');
    }
  }

  settings ||= {};

  return settings;
}

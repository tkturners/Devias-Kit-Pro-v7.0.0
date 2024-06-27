'use server';

import { cookies } from 'next/headers';

import { logger } from '@/lib/default-logger';

/**
 * Retrieve the settings from client's cookies.
 * This should be used in Server Components.
 */
export async function getSettings() {
  const cookieStore = cookies();

  const settingsStr = cookieStore.get('app.settings')?.value;
  let settings;

  if (settingsStr) {
    try {
      settings = JSON.parse(settingsStr);
    } catch {
      logger.error('Unable to parse the settings');
    }
  }

  settings ||= {};

  return settings;
}

'use server';

import { cookies } from 'next/headers';

import type { Settings } from '@/types/settings';

/**
 * Store settings (partial patch) in client's cookies.
 * This should be used as Server Action.
 *
 * To remove a specific key, set its value to `null`.
 */
export async function setSettings(settings: Partial<Settings>): Promise<void> {
  const cookieStore = cookies();
  cookieStore.set('app.settings', JSON.stringify(settings));
}

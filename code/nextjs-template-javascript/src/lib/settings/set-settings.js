'use server';

import { cookies } from 'next/headers';

/**
 * Store settings (partial patch) in client's cookies.
 * This should be used as Server Action.
 *
 * To remove a specific key, set its value to `null`.
 */
export async function setSettings(settings) {
  const cookieStore = cookies();
  cookieStore.set('app.settings', JSON.stringify(settings));
}

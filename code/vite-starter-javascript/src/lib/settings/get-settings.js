import { logger } from '@/lib/default-logger';

/*
 * Retrieve the settings from client's localStorage.
 * This should be used in Client Components.
 */
export function getSettings() {
  const settingsStr = window.localStorage.getItem('app.settings');
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

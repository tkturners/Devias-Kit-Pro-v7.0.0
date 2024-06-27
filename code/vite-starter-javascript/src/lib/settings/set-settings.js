/**
 * Store settings in client's localStorage.
 * This should be used in Client Components.
 *
 * To remove a specific key, set its value to `null`.
 */
export function setSettings(settings) {
  window.localStorage.setItem('app.settings', JSON.stringify(settings));
}

import { config } from '@/config';

export function applyDefaultSettings(settings) {
  return {
    colorScheme: config.site.colorScheme,
    primaryColor: config.site.primaryColor,
    direction: 'ltr',
    navColor: 'evident',
    layout: 'vertical',
    ...settings,
  };
}

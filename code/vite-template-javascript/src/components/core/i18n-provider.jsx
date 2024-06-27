'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { logger } from '@/lib/default-logger';

import '@/lib/i18n';

export function I18nProvider({ children, language = 'en' }) {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage(language).catch(() => {
      logger.error(`Failed to change language to ${language}`);
    });
  }, [i18n, language]);

  return <React.Fragment>{children}</React.Fragment>;
}

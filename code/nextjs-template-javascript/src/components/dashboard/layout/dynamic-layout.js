'use client';

import * as React from 'react';

import { useSettings } from '@/hooks/use-settings';

import { HorizontalLayout } from './horizontal/horizontal-layout';
import { VerticalLayout } from './vertical/vertical-layout';

export function DynamicLayout({ children }) {
  const { settings } = useSettings();

  return settings.layout === 'horizontal' ? (
    <HorizontalLayout>{children}</HorizontalLayout>
  ) : (
    <VerticalLayout>{children}</VerticalLayout>
  );
}

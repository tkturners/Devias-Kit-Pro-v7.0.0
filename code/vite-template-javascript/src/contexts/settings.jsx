'use client';

import * as React from 'react';

import { applyDefaultSettings } from '@/lib/settings/apply-default-settings';

export const SettingsContext = React.createContext({
  settings: applyDefaultSettings({}),
  setSettings: () => {
    // noop
  },
});

export function SettingsProvider({ children, settings: initialSettings }) {
  const [state, setState] = React.useState(initialSettings);

  React.useEffect(() => {
    setState(initialSettings);
  }, [initialSettings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: state,
        setSettings: (newSettings) => {
          setState(newSettings);
        },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;

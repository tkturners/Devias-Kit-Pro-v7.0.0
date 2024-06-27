'use client';

import * as React from 'react';

function noop() {
  return undefined;
}

export const MailContext = React.createContext({
  labels: [],
  threads: [],
  currentLabelId: 'inbox',
  openDesktopSidebar: true,
  setOpenDesktopSidebar: noop,
  openMobileSidebar: true,
  setOpenMobileSidebar: noop,
  openCompose: false,
  setOpenCompose: noop,
});

export function MailProvider({ children, labels: initialLabels = [], threads: initialThreads = [], currentLabelId }) {
  const [labels, setLabels] = React.useState([]);
  const [threads, setThreads] = React.useState([]);
  const [openDesktopSidebar, setOpenDesktopSidebar] = React.useState(true);
  const [openMobileSidebar, setOpenMobileSidebar] = React.useState(false);
  const [openCompose, setOpenCompose] = React.useState(false);

  React.useEffect(() => {
    setLabels(initialLabels);
  }, [initialLabels]);

  React.useEffect(() => {
    setThreads(initialThreads);
  }, [initialThreads]);

  return (
    <MailContext.Provider
      value={{
        labels,
        threads,
        currentLabelId,
        openDesktopSidebar,
        setOpenDesktopSidebar,
        openMobileSidebar,
        setOpenMobileSidebar,
        openCompose,
        setOpenCompose,
      }}
    >
      {children}
    </MailContext.Provider>
  );
}

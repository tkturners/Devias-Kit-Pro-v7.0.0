'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from '@/paths';

function useSegment(): string {
  const pathname = usePathname();

  return pathname.split('/dashboard/social/profile/')[1] ?? 'timeline';
}

export function ProfileTabs(): React.JSX.Element {
  const segment = useSegment();

  return (
    <Tabs sx={{ borderBottom: '1px solid var(--mui-palette-divider)' }} value={segment}>
      <Tab
        component={RouterLink}
        href={paths.dashboard.social.profile.timeline}
        label="Timeline"
        tabIndex={0}
        value="timeline"
      />
      <Tab
        component={RouterLink}
        href={paths.dashboard.social.profile.connections}
        label="Connections"
        tabIndex={0}
        value="connections"
      />
    </Tabs>
  );
}

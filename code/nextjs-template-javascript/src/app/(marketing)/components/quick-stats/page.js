import * as React from 'react';

import { config } from '@/config';
import { Layout } from '@/components/widgets/layout';
import { QuickStats1 } from '@/components/widgets/quick-stats/quick-stats-1';
import { QuickStats2 } from '@/components/widgets/quick-stats/quick-stats-2';
import { QuickStats3 } from '@/components/widgets/quick-stats/quick-stats-3';
import { QuickStats4 } from '@/components/widgets/quick-stats/quick-stats-4';
import { QuickStats5 } from '@/components/widgets/quick-stats/quick-stats-5';
import { QuickStats6 } from '@/components/widgets/quick-stats/quick-stats-6';
import { QuickStats7 } from '@/components/widgets/quick-stats/quick-stats-7';
import { QuickStats8 } from '@/components/widgets/quick-stats/quick-stats-8';
import { QuickStats9 } from '@/components/widgets/quick-stats/quick-stats-9';
import { QuickStats10 } from '@/components/widgets/quick-stats/quick-stats-10';
import { QuickStats11 } from '@/components/widgets/quick-stats/quick-stats-11';

export const metadata = { title: `Quick stats | Components | ${config.site.name}` };

const components = [
  { title: 'Quick stats 1', element: <QuickStats1 /> },
  { title: 'Quick stats 2', element: <QuickStats2 /> },
  { title: 'Quick stats 3', element: <QuickStats3 /> },
  { title: 'Quick stats 4', element: <QuickStats4 /> },
  { title: 'Quick stats 5', element: <QuickStats5 /> },
  { title: 'Quick stats 6', element: <QuickStats6 /> },
  { title: 'Quick stats 7', element: <QuickStats7 /> },
  { title: 'Quick stats 8', element: <QuickStats8 /> },
  { title: 'Quick stats 9', element: <QuickStats9 /> },
  { title: 'Quick stats 10', element: <QuickStats10 /> },
  { title: 'Quick stats 11', element: <QuickStats11 /> },
];

export default function Page() {
  return <Layout components={components} title="Quick stats" />;
}

import * as React from 'react';

import { config } from '@/config';
import { Buttons1 } from '@/components/widgets/buttons/buttons-1';
import { Buttons2 } from '@/components/widgets/buttons/buttons-2';
import { Buttons3 } from '@/components/widgets/buttons/buttons-3';
import { Buttons4 } from '@/components/widgets/buttons/buttons-4';
import { Layout } from '@/components/widgets/layout';

export const metadata = { title: `Buttons | Components | ${config.site.name}` };

const components = [
  { title: 'Simple buttons', element: <Buttons1 /> },
  { title: 'Buttons with text and icon', element: <Buttons2 /> },
  { title: 'Button groups', element: <Buttons3 /> },
  { title: 'Icon buttons', element: <Buttons4 /> },
];

export default function Page() {
  return <Layout components={components} title="Buttons" />;
}

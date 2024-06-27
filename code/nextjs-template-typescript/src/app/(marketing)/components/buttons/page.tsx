import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { Buttons1 } from '@/components/widgets/buttons/buttons-1';
import { Buttons2 } from '@/components/widgets/buttons/buttons-2';
import { Buttons3 } from '@/components/widgets/buttons/buttons-3';
import { Buttons4 } from '@/components/widgets/buttons/buttons-4';
import { Layout } from '@/components/widgets/layout';
import type { Component } from '@/components/widgets/layout';

export const metadata = { title: `Buttons | Components | ${config.site.name}` } satisfies Metadata;

const components = [
  { title: 'Simple buttons', element: <Buttons1 /> },
  { title: 'Buttons with text and icon', element: <Buttons2 /> },
  { title: 'Button groups', element: <Buttons3 /> },
  { title: 'Icon buttons', element: <Buttons4 /> },
] satisfies Component[];

export default function Page(): React.JSX.Element {
  return <Layout components={components} title="Buttons" />;
}

import * as React from 'react';

import { config } from '@/config';
import { Layout } from '@/components/widgets/layout';
import { Table1 } from '@/components/widgets/tables/table-1';
import { Table2 } from '@/components/widgets/tables/table-2';
import { Table3 } from '@/components/widgets/tables/table-3';
import { Table4 } from '@/components/widgets/tables/table-4';
import { Table5 } from '@/components/widgets/tables/table-5';
import { Table6 } from '@/components/widgets/tables/table-6';
import { Table7 } from '@/components/widgets/tables/table-7';
import { Table8 } from '@/components/widgets/tables/table-8';
import { Table9 } from '@/components/widgets/tables/table-9';
import { Table10 } from '@/components/widgets/tables/table-10';

export const metadata = { title: `Tables | Components | ${config.site.name}` };

const components = [
  { title: 'Table 1', element: <Table1 /> },
  { title: 'Table 2', element: <Table2 /> },
  { title: 'Table 3', element: <Table3 /> },
  { title: 'Table 4', element: <Table4 /> },
  { title: 'Table 5', element: <Table5 /> },
  { title: 'Table 6', element: <Table6 /> },
  { title: 'Table 7', element: <Table7 /> },
  { title: 'Table 8', element: <Table8 /> },
  { title: 'Table 9', element: <Table9 /> },
  { title: 'Table 10', element: <Table10 /> },
];

export default function Page() {
  return <Layout components={components} title="Tables" />;
}

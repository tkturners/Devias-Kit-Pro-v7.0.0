'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DotsThree as DotsThreeIcon } from '@phosphor-icons/react/dist/ssr/DotsThree';
import { PencilSimple as PencilSimpleIcon } from '@phosphor-icons/react/dist/ssr/PencilSimple';

import { dayjs } from '@/lib/dayjs';
import { DataTable } from '@/components/core/data-table';

const orders = [
  {
    id: 'ORD-005',
    customer: { name: 'Carson Darrin', email: 'carson.darrin@domain.com' },
    paymentMethod: 'CreditCard',
    currency: 'USD',
    totalAmount: 78.1,
    status: 'pending',
    createdAt: dayjs().subtract(23, 'second').subtract(32, 'minute').toDate(),
  },
  {
    id: 'ORD-004',
    customer: { name: 'Fran Perez', email: 'fran.perez@domain.com' },
    paymentMethod: 'PayPal',
    currency: 'USD',
    totalAmount: 110.39,
    status: 'completed',
    createdAt: dayjs().subtract(51, 'second').subtract(36, 'minute').toDate(),
  },
  {
    id: 'ORD-003',
    customer: { name: 'Jie Yan', email: 'jie.yan@domain.com' },
    paymentMethod: 'CreditCard',
    currency: 'USD',
    totalAmount: 25.58,
    status: 'pending',
    createdAt: dayjs().subtract(55, 'second').subtract(38, 'minute').toDate(),
  },
  {
    id: 'ORD-002',
    customer: { name: 'Siegbert Gottfried', email: 'siegbert.gottfried@domain.com' },
    paymentMethod: 'PayPal',
    currency: 'USD',
    totalAmount: 89.41,
    status: 'completed',
    createdAt: dayjs().subtract(3, 'second').subtract(40, 'minute').toDate(),
  },
  {
    id: 'ORD-001',
    customer: { name: 'Miron Vitold', email: 'miron.vitold@domain.com' },
    paymentMethod: 'CreditCard',
    currency: 'USD',
    totalAmount: 19.99,
    status: 'completed',
    createdAt: dayjs().subtract(32, 'second').subtract(45, 'minute').toDate(),
  },
];

const columns = [
  {
    formatter: (row) => (
      <div>
        <Typography variant="subtitle2">{row.id}</Typography>
        <Typography color="text.secondary" suppressHydrationWarning sx={{ whiteSpace: 'nowrap' }} variant="body2">
          {dayjs(row.createdAt).format('MMM D, YYYY hh:mm A')}
        </Typography>
      </div>
    ),
    name: 'Number',
    width: '150px',
  },
  {
    formatter: (row) => (
      <div>
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="subtitle2">
          {row.customer.name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {row.customer.email}
        </Typography>
      </div>
    ),
    name: 'Customer',
    width: '250px',
  },
  { field: 'paymentMethod', name: 'Payment Method', width: '150px' },
  {
    formatter: (row) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: row.currency }).format(row.totalAmount);
    },
    name: 'Total Amount',
    width: '150px',
  },
  {
    formatter: (row) => {
      const mapping = {
        pending: { label: 'Pending', color: 'warning' },
        completed: { label: 'Completed', color: 'success' },
        canceled: { label: 'Canceled', color: 'error' },
      };
      const { label, color } = mapping[row.status] ?? { label: 'Unknown', color: 'secondary' };

      return <Chip color={color} label={label} size="small" variant="soft" />;
    },
    name: 'Status',
    width: '150px',
  },
  {
    formatter: () => {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton>
            <PencilSimpleIcon />
          </IconButton>
        </Box>
      );
    },
    name: 'Actions',
    hideName: true,
    width: '100px',
    align: 'right',
  },
];

export function Table4() {
  return (
    <Box sx={{ bgcolor: 'var(--mui-palette-background-level1)', p: 3 }}>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <DotsThreeIcon weight="bold" />
            </IconButton>
          }
          title="Orders"
        />
        <Divider />
        <Box sx={{ overflowX: 'auto' }}>
          <DataTable columns={columns} rows={orders} />
        </Box>
      </Card>
    </Box>
  );
}

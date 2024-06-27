'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { CheckCircle as CheckCircleIcon } from '@phosphor-icons/react/dist/ssr/CheckCircle';
import { Clock as ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { XCircle as XCircleIcon } from '@phosphor-icons/react/dist/ssr/XCircle';

import { paths } from '@/paths';
import { dayjs } from '@/lib/dayjs';
import { DataTable } from '@/components/core/data-table';

function groupRows(invoices) {
  return invoices.reduce(
    (acc, invoice) => {
      const { status } = invoice;

      return { ...acc, [status]: [...acc[status], invoice] };
    },
    { canceled: [], paid: [], pending: [] }
  );
}

const groupTitles = { canceled: 'Canceled', paid: 'Paid', pending: 'Pending' };

const columns = [
  {
    formatter: (row) => (
      <Stack
        component={RouterLink}
        direction="row"
        href={paths.dashboard.invoices.details('1')}
        spacing={2}
        sx={{ alignItems: 'center', display: 'inline-flex', textDecoration: 'none', whiteSpace: 'nowrap' }}
      >
        <Avatar src={row.customer.avatar} />
        <div>
          <Typography color="text.primary" variant="subtitle2">
            {row.id}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {row.customer.name}
          </Typography>
        </div>
      </Stack>
    ),
    name: 'Customer',
    width: '250px',
  },
  {
    formatter: (row) => (
      <Typography variant="subtitle2">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: row.currency }).format(row.totalAmount)}
      </Typography>
    ),
    name: 'Total amount',
    width: '150px',
  },
  {
    formatter: (row) => (
      <div>
        <Typography variant="subtitle2">Issued</Typography>
        <Typography color="text.secondary" variant="body2">
          {dayjs(row.issueDate).format('MMM D, YYYY')}
        </Typography>
      </div>
    ),
    name: 'Issue Date',
    width: '150px',
  },
  {
    formatter: (row) => (
      <div>
        <Typography variant="subtitle2">Due</Typography>
        <Typography color="text.secondary" variant="body2">
          {row.dueDate ? dayjs(row.dueDate).format('MMM D, YYYY') : undefined}
        </Typography>
      </div>
    ),
    name: 'Due Date',
    width: '150px',
  },
  {
    formatter: (row) => {
      const mapping = {
        pending: { label: 'Pending', icon: <ClockIcon color="var(--mui-palette-warning-main)" weight="fill" /> },
        paid: { label: 'Paid', icon: <CheckCircleIcon color="var(--mui-palette-success-main)" weight="fill" /> },
        canceled: { label: 'Canceled', icon: <XCircleIcon color="var(--mui-palette-error-main)" weight="fill" /> },
      };
      const { label, icon } = mapping[row.status] ?? { label: 'Unknown', icon: null };

      return <Chip icon={icon} label={label} size="small" variant="outlined" />;
    },
    name: 'Status',
    width: '150px',
  },
  {
    formatter: () => (
      <IconButton component={RouterLink} href={paths.dashboard.invoices.details('1')}>
        <ArrowRightIcon />
      </IconButton>
    ),
    name: 'Actions',
    width: '100px',
    align: 'right',
  },
];

export function InvoicesTable({ rows = [], view = 'group' }) {
  if (view === 'group') {
    const groups = groupRows(rows);

    return (
      <Stack spacing={6}>
        {['pending', 'paid', 'canceled'].map((key) => {
          const group = groups[key];

          return (
            <Stack key={groupTitles[key]} spacing={2}>
              <Typography color="text.secondary" variant="h6">
                {groupTitles[key]} ({group.length})
              </Typography>
              {group.length ? (
                <Card sx={{ overflowX: 'auto' }}>
                  <DataTable columns={columns} hideHead rows={group} />
                </Card>
              ) : (
                <div>
                  <Typography color="text.secondary" variant="body2">
                    No invoices found
                  </Typography>
                </div>
              )}
            </Stack>
          );
        })}
      </Stack>
    );
  }

  return (
    <Card sx={{ overflowX: 'auto' }}>
      <DataTable columns={columns} hideHead rows={rows} />
      {!rows.length ? (
        <Box sx={{ p: 3 }}>
          <Typography color="text.secondary" sx={{ textAlign: 'center' }} variant="body2">
            No invoices found
          </Typography>
        </Box>
      ) : null}
    </Card>
  );
}

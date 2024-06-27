'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { DataTable } from '@/components/core/data-table';

const columns = [
  {
    formatter: (row) => {
      return (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Box
            sx={{
              backgroundImage: `url(${row.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              bgcolor: 'var(--mui-palette-background-level2)',
              borderRadius: 1,
              flex: '0 0 auto',
              height: '40px',
              width: '40px',
            }}
          />
          <Link color="text.primary" variant="subtitle2">
            {row.product}
          </Link>
        </Stack>
      );
    },
    name: 'Product',
    width: '220px',
  },
  { field: 'quantity', name: 'Qty', width: '100px' },
  {
    formatter: (row) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: row.currency }).format(row.unitAmount);
    },
    name: 'Unit Price',
    width: '120px',
  },
  {
    formatter: (row) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: row.currency }).format(row.totalAmount);
    },
    name: 'Amount',
    width: '100px',
    align: 'right',
  },
];

export function LineItemsTable({ rows }) {
  return <DataTable columns={columns} rows={rows} />;
}

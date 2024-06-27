'use client';

import * as React from 'react';

import { DataTable } from '@/components/core/data-table';

const columns = [
  { field: 'name', name: 'Name', width: '250px' },
  {
    formatter: (row) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: row.currency }).format(row.unitAmount);
    },
    name: 'Unit Amount',
    width: '100px',
  },
  { field: 'quantity', name: 'Qty', width: '100px' },
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

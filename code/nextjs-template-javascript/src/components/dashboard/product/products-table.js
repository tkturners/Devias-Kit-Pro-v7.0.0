'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CheckCircle as CheckCircleIcon } from '@phosphor-icons/react/dist/ssr/CheckCircle';
import { Clock as ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { Eye as EyeIcon } from '@phosphor-icons/react/dist/ssr/Eye';
import { Image as ImageIcon } from '@phosphor-icons/react/dist/ssr/Image';

import { paths } from '@/paths';
import { DataTable } from '@/components/core/data-table';

const columns = [
  {
    formatter: (row) => (
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        {row.image ? (
          <Box
            sx={{
              alignItems: 'center',
              bgcolor: 'var(--mui-palette-background-level2)',
              backgroundImage: `url(${row.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: 1,
              display: 'flex',
              height: '80px',
              justifyContent: 'center',
              overflow: 'hidden',
              width: '80px',
            }}
          />
        ) : (
          <Box
            sx={{
              alignItems: 'center',
              bgcolor: 'var(--mui-palette-background-level2)',
              borderRadius: 1,
              display: 'flex',
              height: '80px',
              justifyContent: 'center',
              width: '80px',
            }}
          >
            <ImageIcon fontSize="var(--icon-fontSize-lg)" />
          </Box>
        )}
        <div>
          <Link
            color="text.primary"
            component={RouterLink}
            href={paths.dashboard.products.preview('1')}
            sx={{ whiteSpace: 'nowrap' }}
            variant="subtitle2"
          >
            {row.name}
          </Link>
          <Typography color="text.secondary" variant="body2">
            in {row.category}
          </Typography>
        </div>
      </Stack>
    ),
    name: 'Name',
    width: '300px',
  },
  { field: 'sku', name: 'SKU', width: '150px' },
  { field: 'quantity', name: 'Stock', width: '100px' },
  {
    formatter(row) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: row.currency }).format(row.price);
    },
    name: 'Price',
    width: '150px',
  },
  {
    formatter: (row) => {
      const mapping = {
        draft: { label: 'Draft', icon: <ClockIcon color="var(--mui-palette-secondary-main)" /> },
        published: {
          label: 'Published',
          icon: <CheckCircleIcon color="var(--mui-palette-success-main)" weight="fill" />,
        },
      };
      const { label, icon } = mapping[row.status] ?? { label: 'Unknown', icon: null };

      return <Chip icon={icon} label={label} size="small" variant="outlined" />;
    },
    name: 'Status',
    width: '150px',
  },
  {
    formatter: () => (
      <IconButton component={RouterLink} href={paths.dashboard.products.preview('1')}>
        <EyeIcon />
      </IconButton>
    ),
    name: 'Actions',
    hideName: true,
    width: '100px',
    align: 'right',
  },
];

export function ProductsTable({ rows = [] }) {
  return (
    <React.Fragment>
      <DataTable columns={columns} rows={rows} />
      {!rows.length ? (
        <Box sx={{ p: 3 }}>
          <Typography color="text.secondary" sx={{ textAlign: 'center' }} variant="body2">
            No products found
          </Typography>
        </Box>
      ) : null}
    </React.Fragment>
  );
}

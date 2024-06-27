'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { BagSimple as BagSimpleIcon } from '@phosphor-icons/react/dist/ssr/BagSimple';
import { Image as ImageIcon } from '@phosphor-icons/react/dist/ssr/Image';

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
              height: '60px',
              justifyContent: 'center',
              overflow: 'hidden',
              width: '60px',
            }}
          />
        ) : (
          <Box
            sx={{
              alignItems: 'center',
              bgcolor: 'var(--mui-palette-background-level2)',
              borderRadius: 1,
              display: 'flex',
              height: '60px',
              justifyContent: 'center',
              width: '60px',
            }}
          >
            <ImageIcon fontSize="var(--icon-fontSize-lg)" />
          </Box>
        )}
        <Box sx={{ whiteSpace: 'nowrap' }}>
          <Typography variant="subtitle2">{row.name}</Typography>
          <Typography color="text.secondary" variant="body2">
            in {row.category}
          </Typography>
        </Box>
      </Stack>
    ),
    name: 'Name',
  },
  {
    formatter: (row) => (
      <div>
        <Typography variant="subtitle2">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
            row.sales
          )}
        </Typography>
      </div>
    ),
    name: 'Sales',
  },
  {
    formatter: (_, index) => (
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-level2)',
          borderRadius: 1.5,
          px: 1,
          py: 0.5,
          display: 'inline-block',
        }}
      >
        <Typography variant="subtitle2">#{index + 1}</Typography>
      </Box>
    ),
    name: 'Rank',
    width: '60px',
    align: 'right',
  },
];

export function TopProducts({ products }) {
  return (
    <Card>
      <CardHeader
        action={
          <Button color="secondary" endIcon={<ArrowRightIcon />} size="small">
            See all
          </Button>
        }
        avatar={
          <Avatar>
            <BagSimpleIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Top selling products"
      />
      <Box sx={{ overflowX: 'auto', '--mui-palette-TableCell-border': 'transparent' }}>
        <DataTable columns={columns} hideHead rows={products} />
      </Box>
    </Card>
  );
}

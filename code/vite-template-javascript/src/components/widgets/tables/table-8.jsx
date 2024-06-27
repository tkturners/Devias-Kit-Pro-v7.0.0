'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Info as InfoIcon } from '@phosphor-icons/react/dist/ssr/Info';

import { DataTable } from '@/components/core/data-table';

const countryFlags = {
  ca: '/assets/flag-ca.svg',
  de: '/assets/flag-de.svg',
  es: '/assets/flag-es.svg',
  ru: '/assets/flag-ru.svg',
  uk: '/assets/flag-uk.svg',
  us: '/assets/flag-us.svg',
};

const visits = [
  { countryCode: 'us', countryName: 'United States', seoRate: 40, value: 31200 },
  { countryCode: 'uk', countryName: 'United Kingdom', seoRate: 47, value: 12700 },
  { countryCode: 'ru', countryName: 'Russia', seoRate: 65, value: 10360 },
  { countryCode: 'ca', countryName: 'Canada', seoRate: 23, value: 5749 },
  { countryCode: 'de', countryName: 'Germany', seoRate: 45, value: 2932 },
  { countryCode: 'es', countryName: 'Spain', seoRate: 56, value: 200 },
];

const columns = [
  {
    formatter: (row) => (
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Box sx={{ height: '24px', width: '24px' }}>
          <Box
            alt={row.countryName}
            component="img"
            src={countryFlags[row.countryCode]}
            sx={{ height: 'auto', width: '100%' }}
          />
        </Box>
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="subtitle2">
          {row.countryName}
        </Typography>
      </Stack>
    ),
    name: 'Country',
  },
  {
    formatter: (row) => {
      return new Intl.NumberFormat('en-US').format(row.value);
    },
    name: 'Value',
  },
  {
    formatter: (row) => {
      return new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 }).format(row.seoRate / 100);
    },
    name: 'SEO',
    align: 'right',
  },
];

export function Table8() {
  return (
    <Box sx={{ bgcolor: 'var(--mui-palette-background-level1)', p: 3 }}>
      <Card>
        <CardHeader
          action={
            <Tooltip title="Refresh rate is 24h">
              <InfoIcon />
            </Tooltip>
          }
          title="Visits by country"
        />
        <Divider />
        <Box sx={{ overflowX: 'auto' }}>
          <DataTable columns={columns} rows={visits} />
        </Box>
      </Card>
    </Box>
  );
}

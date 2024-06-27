'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { Funnel as FunnelIcon } from '@phosphor-icons/react/dist/ssr/Funnel';

import { useMediaQuery } from '@/hooks/use-media-query';

import { InvoicesFiltersModal } from './invoices-filters-modal';

export function InvoicesFiltersButton({ filters, sortDir, view }) {
  const lgDown = useMediaQuery('down', 'lg');

  const [open, setOpen] = React.useState(false);

  const hasFilters = filters?.status || filters?.id || filters?.customer || filters?.startDate || filters?.endDate;

  return (
    <React.Fragment>
      <Button
        color={hasFilters ? 'primary' : 'secondary'}
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
        startIcon={<FunnelIcon />}
        sx={{ display: { lg: 'none' } }}
      >
        Filters
      </Button>
      <InvoicesFiltersModal
        filters={filters}
        onClose={() => {
          setOpen(false);
        }}
        open={lgDown ? open : false}
        sortDir={sortDir}
        view={view}
      />
    </React.Fragment>
  );
}

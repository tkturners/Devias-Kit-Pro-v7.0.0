'use client';

import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

function noop() {
  return undefined;
}

export function ItemsPagination({ count, page }) {
  return (
    <TablePagination
      component="div"
      count={count}
      onPageChange={noop}
      onRowsPerPageChange={noop}
      page={page}
      rowsPerPage={10}
      rowsPerPageOptions={[5, 10, 25]}
    />
  );
}

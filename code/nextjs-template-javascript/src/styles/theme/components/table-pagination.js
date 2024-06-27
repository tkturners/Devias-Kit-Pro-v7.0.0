import * as React from 'react';
import { CaretLeft as CaretLeftIcon } from '@phosphor-icons/react/dist/ssr/CaretLeft';
import { CaretRight as CaretRightIcon } from '@phosphor-icons/react/dist/ssr/CaretRight';

function PreviousButtonIcon() {
  return <CaretLeftIcon fontSize="var(--fontSize-md)" />;
}

function NextButtonIcon() {
  return <CaretRightIcon fontSize="var(--fontSize-md)" />;
}

export const MuiTablePagination = {
  defaultProps: {
    slotProps: {
      actions: { nextButtonIcon: { component: NextButtonIcon }, previousButtonIcon: { component: PreviousButtonIcon } },
      select: { size: 'small', variant: 'outlined' },
    },
  },
  styleOverrides: { input: { marginRight: '16px', padding: 0 } },
};

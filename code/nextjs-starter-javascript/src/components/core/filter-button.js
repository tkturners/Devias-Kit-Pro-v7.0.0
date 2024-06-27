import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MinusCircle as MinusCircleIcon } from '@phosphor-icons/react/dist/ssr/MinusCircle';
import { PlusCircle as PlusCircleIcon } from '@phosphor-icons/react/dist/ssr/PlusCircle';

import { usePopover } from '@/hooks/use-popover';

function noop(..._) {
  // Do nothing
}

export const FilterContext = React.createContext({
  anchorEl: null,
  onApply: noop,
  onClose: noop,
  open: false,
  value: undefined,
});

export function useFilterContext() {
  const context = React.useContext(FilterContext);

  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }

  return context;
}

// Currently, the `value` prop can be string | number | boolean | undefined
export function FilterButton({ displayValue, label, onFilterApply, onFilterDelete, popover, value }) {
  const { anchorRef, handleOpen, handleClose, open } = usePopover();

  const handleApply = React.useCallback(
    (newValue) => {
      handleClose();
      onFilterApply?.(newValue);
    },
    [handleClose, onFilterApply]
  );

  return (
    <FilterContext.Provider
      value={{ anchorEl: anchorRef.current, onApply: handleApply, onClose: handleClose, open, value }}
    >
      <Button
        color="secondary"
        onClick={handleOpen}
        ref={anchorRef}
        startIcon={
          value ? (
            <Box
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                onFilterDelete?.();
              }}
              onKeyUp={(event) => {
                event.stopPropagation();
                event.preventDefault();

                if (event.key === 'Enter' || event.key === ' ') {
                  onFilterDelete?.();
                }
              }}
              role="button"
              sx={{ display: 'flex' }}
              tabIndex={0}
            >
              <MinusCircleIcon />
            </Box>
          ) : (
            <PlusCircleIcon />
          )
        }
        variant="outlined"
      >
        <span>
          {label}
          {displayValue ? (
            <React.Fragment>
              :{' '}
              <Box component="span" sx={{ color: 'var(--mui-palette-primary-main)' }}>
                {displayValue}
              </Box>
            </React.Fragment>
          ) : null}
        </span>
      </Button>
      {popover}
    </FilterContext.Provider>
  );
}

export function FilterPopover({ children, title, onClose, anchorEl, open }) {
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      onClose={onClose}
      open={Boolean(anchorEl && open)}
      sx={{ '& .MuiPopover-paper': { mt: '4px', width: '280px' } }}
    >
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography variant="subtitle2">{title}</Typography>
        {children}
      </Stack>
    </Popover>
  );
}

import * as React from 'react';
import Popover from '@mui/material/Popover';

import { DropdownContext } from './dropdown-context';

export function DropdownPopover({ children, PaperProps, ...props }) {
  const { anchorEl, onPopoverMouseEnter, onPopoverMouseLeave, onPopoverEscapePressed, open } =
    React.useContext(DropdownContext);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      onClose={(_, reason) => {
        if (reason === 'escapeKeyDown') {
          onPopoverEscapePressed?.();
        }
      }}
      open={open}
      slotProps={{
        paper: {
          ...PaperProps,
          onMouseEnter: onPopoverMouseEnter,
          onMouseLeave: onPopoverMouseLeave,
          sx: { ...PaperProps?.sx, pointerEvents: 'auto' },
        },
      }}
      sx={{ pointerEvents: 'none' }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      {...props}
    >
      {children}
    </Popover>
  );
}

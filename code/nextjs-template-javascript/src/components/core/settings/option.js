import * as React from 'react';
import Chip from '@mui/material/Chip';

export function Option({ selected, ...props }) {
  return (
    <Chip
      {...props}
      sx={{
        position: 'relative',
        '&::before': {
          borderRadius: 'inherit',
          bottom: 0,
          content: '" "',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          top: 0,
          ...(selected && { boxShadow: '0 0 0 2px var(--mui-palette-primary-main)' }),
        },
      }}
      variant="soft"
    />
  );
}

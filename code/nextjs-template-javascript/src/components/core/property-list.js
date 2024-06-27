import * as React from 'react';
import Stack from '@mui/material/Stack';

export function PropertyList({ children, divider, orientation = 'horizontal', stripe, sx }) {
  return (
    <Stack
      divider={divider}
      sx={{
        '--PropertyItem-columns': orientation === 'horizontal' ? '150px minmax(0, 1fr)' : '1fr',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--PropertyList-gap)',
        ...(stripe && { [`& > *:nth-child(${stripe})`]: { bgcolor: 'var(--mui-palette-background-level1)' } }),
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}

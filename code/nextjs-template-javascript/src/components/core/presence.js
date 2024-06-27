import * as React from 'react';
import Box from '@mui/material/Box';

const sizes = { small: 8, medium: 16, large: 24 };

export function Presence({ size = 'medium', status = 'offline' }) {
  const colors = {
    offline: 'var(--mui-palette-neutral-100)',
    away: 'var(--mui-palette-warning-main)',
    busy: 'var(--mui-palette-error-main)',
    online: 'var(--mui-palette-success-main)',
  };

  const color = colors[status];

  return (
    <Box
      sx={{
        bgcolor: color,
        borderRadius: '50%',
        display: 'inline-block',
        flex: '0 0 auto',
        height: sizes[size],
        width: sizes[size],
      }}
    />
  );
}

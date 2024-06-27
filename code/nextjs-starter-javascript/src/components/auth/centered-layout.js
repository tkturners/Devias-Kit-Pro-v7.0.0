import * as React from 'react';
import Box from '@mui/material/Box';

export function CenteredLayout({ children }) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        p: { xs: 2, md: 3 },
      }}
    >
      <Box sx={{ maxWidth: '560px', width: '100%' }}>{children}</Box>
    </Box>
  );
}

'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { useSettings } from '@/hooks/use-settings';

export function Thumbnail({ imageDark, imageLight }) {
  const {
    settings: { colorScheme = 'light' },
  } = useSettings();

  return (
    <Box sx={{ position: 'relative', pt: 'calc(300 / 500 * 100%)' }}>
      <Box
        alt="Thumbnail"
        component="img"
        src={colorScheme === 'dark' ? imageDark : imageLight}
        sx={{ height: 'auto', left: 0, position: 'absolute', top: 0, width: '100%' }}
      />
    </Box>
  );
}

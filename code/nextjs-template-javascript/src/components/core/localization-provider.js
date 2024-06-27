'use client';

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';

export function LocalizationProvider({ children }) {
  return <Provider dateAdapter={AdapterDayjs}>{children}</Provider>;
}

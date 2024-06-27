import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

export function Option({ children, ...props }) {
  return <MenuItem {...props}>{children}</MenuItem>;
}

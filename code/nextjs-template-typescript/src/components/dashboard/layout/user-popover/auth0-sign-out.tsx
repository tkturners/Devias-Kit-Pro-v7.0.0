import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

import { paths } from '@/paths';

export function Auth0SignOut(): React.JSX.Element {
  return (
    <MenuItem component="a" href={paths.auth.auth0.signOut} sx={{ justifyContent: 'center' }}>
      Sign out
    </MenuItem>
  );
}

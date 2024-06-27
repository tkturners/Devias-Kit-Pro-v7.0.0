import * as React from 'react';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';

export const MuiAvatar = {
  defaultProps: { children: <UserIcon fontSize="var(--Icon-fontSize)" /> },
  styleOverrides: {
    root: {
      '--Icon-fontSize': 'var(--icon-fontSize-md)',
      fontSize: '0.875rem',
      fontWeight: 500,
      height: 'var(--Avatar-size, 40px)',
      letterSpacing: 0,
      width: 'var(--Avatar-size, 40px)',
    },
  },
};

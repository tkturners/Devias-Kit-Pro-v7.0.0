import { listItemIconClasses } from '@mui/material/ListItemIcon';

export const MuiMenuItem = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: {
      borderRadius: '8px',
      gap: 'var(--ListItem-gap)',
      paddingBlock: 'var(--MenuItem-paddingBlock, 4px)',
      paddingInline: 'var(--MenuItem-paddingInline, 8px)',
      [`& .${listItemIconClasses.root}`]: { minWidth: 'auto' },
    },
  },
};

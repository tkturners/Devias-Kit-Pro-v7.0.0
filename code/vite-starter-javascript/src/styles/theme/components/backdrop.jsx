import { backdropClasses } from '@mui/material/Backdrop';

export const MuiBackdrop = {
  styleOverrides: {
    root: { [`&:not(.${backdropClasses.invisible})`]: { backgroundColor: 'var(--mui-palette-Backdrop-bg)' } },
  },
};

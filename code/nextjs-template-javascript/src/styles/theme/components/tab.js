export const MuiTab = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: {
      minWidth: 'auto',
      paddingInline: 0,
      textTransform: 'none',
      '&:hover': { color: 'var(--mui-palette-text-primary)' },
      '&:focus-visible': { outline: '2px solid var(--mui-palette-primary-main)' },
    },
  },
};

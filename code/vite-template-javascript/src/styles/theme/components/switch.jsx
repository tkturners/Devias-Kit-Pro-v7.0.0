export const MuiSwitch = {
  defaultProps: { color: 'primary', disableRipple: true },
  styleOverrides: {
    root: { marginLeft: '-12px', marginRight: '-12px' },
    switchBase: { color: 'var(--mui-palette-neutral-500)' },
    track: { backgroundColor: 'var(--mui-palette-neutral-400)', opacity: 1 },
  },
};

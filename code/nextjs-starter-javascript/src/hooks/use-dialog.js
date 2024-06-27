import * as React from 'react';

export function useDialog() {
  const [state, setState] = React.useState({ open: false, data: undefined });

  const handleOpen = React.useCallback((data) => {
    setState({ open: true, data });
  }, []);

  const handleClose = React.useCallback(() => {
    setState({ open: false });
  }, []);

  return { data: state.data, handleClose, handleOpen, open: state.open };
}

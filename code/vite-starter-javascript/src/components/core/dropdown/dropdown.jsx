import * as React from 'react';

import { DropdownContext } from './dropdown-context';

export function Dropdown({ children, delay = 50 }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const cleanupRef = React.useRef();

  const handleTriggerMouseEnter = React.useCallback((event) => {
    clearTimeout(cleanupRef.current);
    setAnchorEl(event.currentTarget);
  }, []);

  const handleTriggerMouseLeave = React.useCallback(
    (_) => {
      cleanupRef.current = setTimeout(() => {
        setAnchorEl(null);
      }, delay);
    },
    [delay]
  );

  const handleTriggerKeyUp = React.useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setAnchorEl(event.currentTarget);
    }
  }, []);

  const handlePopoverMouseEnter = React.useCallback((_) => {
    clearTimeout(cleanupRef.current);
  }, []);

  const handlePopoverMouseLeave = React.useCallback(
    (_) => {
      cleanupRef.current = setTimeout(() => {
        setAnchorEl(null);
      }, delay);
    },
    [delay]
  );

  const handlePopoverEscapePressed = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);

  return (
    <DropdownContext.Provider
      value={{
        anchorEl,
        onPopoverMouseEnter: handlePopoverMouseEnter,
        onPopoverMouseLeave: handlePopoverMouseLeave,
        onPopoverEscapePressed: handlePopoverEscapePressed,
        onTriggerMouseEnter: handleTriggerMouseEnter,
        onTriggerMouseLeave: handleTriggerMouseLeave,
        onTriggerKeyUp: handleTriggerKeyUp,
        open,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

import * as React from 'react';

function noop(..._) {
  // Do nothing
}

export const DropdownContext = React.createContext({
  anchorEl: null,
  onPopoverMouseEnter: noop,
  onPopoverMouseLeave: noop,
  onPopoverEscapePressed: noop,
  onTriggerMouseEnter: noop,
  onTriggerMouseLeave: noop,
  onTriggerKeyUp: noop,
  open: false,
});

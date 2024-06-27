'use client';

import * as React from 'react';

import { useSelection } from '@/hooks/use-selection';

function noop() {
  return undefined;
}

export const CustomersSelectionContext = React.createContext({
  deselectAll: noop,
  deselectOne: noop,
  selectAll: noop,
  selectOne: noop,
  selected: new Set(),
  selectedAny: false,
  selectedAll: false,
});

export function CustomersSelectionProvider({ children, customers = [] }) {
  const customerIds = React.useMemo(() => customers.map((customer) => customer.id), [customers]);
  const selection = useSelection(customerIds);

  return <CustomersSelectionContext.Provider value={{ ...selection }}>{children}</CustomersSelectionContext.Provider>;
}

export function useCustomersSelection() {
  return React.useContext(CustomersSelectionContext);
}

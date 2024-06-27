'use client';

import * as React from 'react';

import { useSelection } from '@/hooks/use-selection';

function noop() {
  return undefined;
}

export const OrdersSelectionContext = React.createContext({
  deselectAll: noop,
  deselectOne: noop,
  selectAll: noop,
  selectOne: noop,
  selected: new Set(),
  selectedAny: false,
  selectedAll: false,
});

export function OrdersSelectionProvider({ children, orders = [] }) {
  const orderIds = React.useMemo(() => orders.map((order) => order.id), [orders]);
  const selection = useSelection(orderIds);

  return <OrdersSelectionContext.Provider value={{ ...selection }}>{children}</OrdersSelectionContext.Provider>;
}

export function useOrdersSelection() {
  return React.useContext(OrdersSelectionContext);
}

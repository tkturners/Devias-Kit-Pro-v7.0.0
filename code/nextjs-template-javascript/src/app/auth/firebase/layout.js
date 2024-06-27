import * as React from 'react';

import { AuthStrategy } from '@/lib/auth/strategy';
import { StrategyGuard } from '@/components/auth/strategy-guard';

export default function Layout({ children }) {
  return <StrategyGuard expected={AuthStrategy.FIREBASE}>{children}</StrategyGuard>;
}

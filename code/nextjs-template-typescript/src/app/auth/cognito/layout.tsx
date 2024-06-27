import * as React from 'react';

import { AuthStrategy } from '@/lib/auth/strategy';
import { StrategyGuard } from '@/components/auth/strategy-guard';

// We are not adding the auth check because there might be individual pages that require the user to be authenticated.
// Another reason is that layouts get cached and loaded only once for all children.

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return <StrategyGuard expected={AuthStrategy.COGNITO}>{children}</StrategyGuard>;
}

import type { RouteObject } from 'react-router-dom';

import { route as customRoute } from './custom';

export const route: RouteObject = {
  path: 'auth',
  children: [customRoute],
};

import { route as customRoute } from './custom';

export const route = {
  path: 'auth',
  children: [customRoute],
};

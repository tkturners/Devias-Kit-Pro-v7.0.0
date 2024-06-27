import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Page as HomePage } from '@/pages/marketing/home';
import { Page as NotFoundPage } from '@/pages/not-found';
import { Layout as MarketingLayout } from '@/components/marketing/layout/layout';

import { route as authRoute } from './auth';
import { route as dashboardRoute } from './dashboard';

export const routes = [
  {
    element: (
      <MarketingLayout>
        <Outlet />
      </MarketingLayout>
    ),
    children: [{ index: true, element: <HomePage /> }],
  },
  authRoute,
  dashboardRoute,
  { path: '*', element: <NotFoundPage /> },
];

import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import { AppShell } from '@/components/layout/AppShell'
import { GameRoute } from '@/routes/GameRoute'
import { HomeRoute } from '@/routes/HomeRoute'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: 'game',
        element: <GameRoute />,
      },
    ],
  },
]

export const router = createBrowserRouter(appRoutes)

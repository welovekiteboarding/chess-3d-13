import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/routes'

export default function App() {
  return (
    <RouterProvider
      future={{ v7_startTransition: true }}
      router={router}
    />
  )
}

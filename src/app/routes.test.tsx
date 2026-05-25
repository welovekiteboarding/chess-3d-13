import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { appRoutes } from './routes'

function renderRoute(initialEntries: string[]) {
  return render(
    <RouterProvider
      future={{ v7_startTransition: true }}
      router={createMemoryRouter(appRoutes, { initialEntries })}
    />,
  )
}

describe('appRoutes', () => {
  it('renders the landing screen at the root route', () => {
    renderRoute(['/'])

    expect(
      screen.getByRole('heading', {
        name: /3d chess, staged for the browser/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the game shell route', () => {
    renderRoute(['/game'])

    expect(
      screen.getByRole('heading', {
        name: /game shell/i,
      }),
    ).toBeInTheDocument()
  })
})

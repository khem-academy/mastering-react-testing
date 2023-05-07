import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import UserProfileAxios from '../UserProfileAxios'

const server = setupServer(
  rest.get('https://api.example.com/users/:userId', (req, res, ctx) => {
    return res(ctx.json({ name: 'John Doe', email: 'john@example.com' }))
  })
)

describe('UserProfileAxios tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('fetches and displays user data using Axios', async () => {
    render(<UserProfileAxios userId={1} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('john@example.com')).toBeInTheDocument()
    })
  })

  test('fetches and displays different user data using Axios', async () => {
    server.use(
      rest.get('https://api.example.com/users/:userId', (req, res, ctx) => {
        return res(ctx.json({ name: 'Jane Smith', email: 'jane@example.com' }))
      })
    )

    render(<UserProfileAxios userId={2} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Jane Smith')).toBeInTheDocument()
      expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    })
  })
})

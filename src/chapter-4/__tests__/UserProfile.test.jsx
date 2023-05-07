import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import UserProfile from '../UserProfile'

// Mock the fetch function to return fake data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'John Doe', email: 'john@example.com' }),
  })
)

test('fetches and displays user data', async () => {
  render(<UserProfile userId={1} />)
  expect(screen.getByText('Loading...')).toBeInTheDocument()

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })
})

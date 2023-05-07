import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import DelayedMessage from '../DelayedMessage'

jest.useFakeTimers()

test('displays a message after the specified delay', async () => {
  render(<DelayedMessage message="Hello, World!" delay={3000} />)
  expect(screen.queryByText('Hello, World!')).toBeNull()

  await act(async () => {
    jest.advanceTimersByTime(3000)
  })

  await waitFor(() => {
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })
})

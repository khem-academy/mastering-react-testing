import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Counter from '../Counter'

test('counter increments and decrements the count', () => {
  render(<Counter />)
  const incrementButton = screen.getByRole('button', { name: 'Increment' })
  const decrementButton = screen.getByRole('button', { name: 'Decrement' })

  fireEvent.click(incrementButton)
  expect(screen.getByText('Count: 1')).toBeInTheDocument()

  fireEvent.click(decrementButton)
  expect(screen.getByText('Count: 0')).toBeInTheDocument()
})

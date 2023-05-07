import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import IncrementCounter from '../IncrementCounter'

test('increments the count on button click', () => {
  render(<IncrementCounter />)

  const incrementButton = screen.getByTestId('increment-button')
  fireEvent.click(incrementButton)

  expect(screen.getByTestId('counter-display')).toHaveTextContent('Count: 1')
})

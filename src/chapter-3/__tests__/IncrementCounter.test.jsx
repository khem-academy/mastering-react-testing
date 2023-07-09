import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IncrementCounter from '../IncrementCounter'

test('increments the count on button click', async () => {
  const user = userEvent.setup()

  render(<IncrementCounter />)

  const incrementButton = screen.getByTestId('increment-button')
  await user.click(incrementButton)

  expect(screen.getByTestId('counter-display')).toHaveTextContent('Count: 1')
})

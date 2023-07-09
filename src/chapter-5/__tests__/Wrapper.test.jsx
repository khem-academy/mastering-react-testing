import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Wrapper from '../Wrapper'

test('adding an item updates the list', async () => {
  const user = userEvent.setup()

  render(<Wrapper />)
  const input = screen.getByRole('textbox')
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  await user.type(input, 'New item')
  await user.click(submitButton)

  expect(screen.getByText('New item')).toBeInTheDocument()
})

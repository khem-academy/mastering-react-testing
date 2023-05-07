import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Wrapper from '../Wrapper'

test('adding an item updates the list', () => {
  render(<Wrapper />)
  const input = screen.getByRole('textbox')
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  fireEvent.change(input, { target: { value: 'New item' } })
  fireEvent.click(submitButton)

  expect(screen.getByText('New item')).toBeInTheDocument()
})

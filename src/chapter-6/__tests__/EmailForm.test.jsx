import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import EmailForm from '../EmailForm'

test('submits the email and clears the input', () => {
  const handleSubmit = jest.fn()
  render(<EmailForm onSubmit={handleSubmit} />)
  const input = screen.getByRole('textbox')
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  fireEvent.change(input, { target: { value: 'test@example.com' } })
  fireEvent.click(submitButton)

  expect(handleSubmit).toHaveBeenCalledWith('test@example.com')
  expect(input.value).toBe('')
})

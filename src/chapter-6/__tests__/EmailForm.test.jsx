import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EmailForm from '../EmailForm'

test('submits the email and clears the input', async () => {
  const user = userEvent.setup()

  const handleSubmit = jest.fn()
  render(<EmailForm onSubmit={handleSubmit} />)
  const input = screen.getByRole('textbox')
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  await user.type(input, 'test@example.com')
  await user.click(submitButton)

  expect(handleSubmit).toHaveBeenCalledWith('test@example.com')
  expect(input.value).toBe('')
})

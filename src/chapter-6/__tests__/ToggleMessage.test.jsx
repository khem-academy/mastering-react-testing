import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToggleMessage from '../ToggleMessage'

describe('ToggleMessage tests', () => {
  test('message is not visible by default', () => {
    render(<ToggleMessage />)
    expect(screen.queryByTestId('message')).toBeNull()
  })

  test('message becomes visible when button is clicked', async () => {
    const user = userEvent.setup()

    render(<ToggleMessage />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle Message' })

    await user.click(toggleButton)
    expect(screen.getByTestId('message')).toBeInTheDocument()
  })

  test('message becomes hidden again after clicking button twice', async () => {
    const user = userEvent.setup()

    render(<ToggleMessage />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle Message' })

    await user.click(toggleButton)
    await user.click(toggleButton)
    expect(screen.queryByTestId('message')).toBeNull()
  })
})

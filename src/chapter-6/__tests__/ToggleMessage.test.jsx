import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ToggleMessage from '../ToggleMessage'

describe('ToggleMessage tests', () => {
  test('message is not visible by default', () => {
    render(<ToggleMessage />)
    expect(screen.queryByTestId('message')).toBeNull()
  })

  test('message becomes visible when button is clicked', () => {
    render(<ToggleMessage />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle Message' })

    fireEvent.click(toggleButton)
    expect(screen.getByTestId('message')).toBeInTheDocument()
  })

  test('message becomes hidden again after clicking button twice', () => {
    render(<ToggleMessage />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle Message' })

    fireEvent.click(toggleButton)
    fireEvent.click(toggleButton)
    expect(screen.queryByTestId('message')).toBeNull()
  })
})

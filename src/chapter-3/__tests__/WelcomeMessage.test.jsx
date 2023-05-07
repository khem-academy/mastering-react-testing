import React from 'react'
import { render, screen } from '@testing-library/react'
import WelcomeMessage from '../WelcomeMessage'

describe('WelcomeMessage tests', () => {
  test('renders welcome message for logged-in users', () => {
    render(<WelcomeMessage isLoggedIn={true} />)
    expect(screen.getByTestId('welcome-message')).toBeInTheDocument()
  })

  test('renders guest message for non-logged-in users', () => {
    render(<WelcomeMessage isLoggedIn={false} />)
    expect(screen.getByTestId('guest-message')).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Greeting from '../Greeting'

test('renders a greeting with the provided name', () => {
  render(<Greeting name="John" />)
  expect(screen.getByText('Hello, John!')).toBeInTheDocument()
})

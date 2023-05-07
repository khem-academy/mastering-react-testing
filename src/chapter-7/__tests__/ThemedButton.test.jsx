import React from 'react'
import ThemedButton from '../ThemedButton'
import { screen, render } from '../../test-utils/customRender'

describe('ThemedButton tests', () => {
  test('renders button with light theme', () => {
    render(<ThemedButton />)
    expect(screen.getByText('Themed Button')).toHaveClass('button')
  })

  test('renders button with dark theme', () => {
    render(<ThemedButton />, { theme: 'dark' })
    expect(screen.getByText('Themed Button')).toHaveClass('button button-dark')
  })
})

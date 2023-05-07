import React from 'react'
import { render, screen } from '@testing-library/react'
import ThemeContext from '../ThemeContext'
import ThemedButton from '../ThemedButton'

describe('ThemedButton tests', () => {
  test('renders button with light theme', () => {
    render(
      <ThemeContext.Provider value="light">
        <ThemedButton />
      </ThemeContext.Provider>
    )
    expect(screen.getByText('Themed Button')).toHaveClass('button')
  })

  test('renderse buttonw ith dark theme', () => {
    render(
      <ThemeContext.Provider value="dark">
        <ThemedButton />
      </ThemeContext.Provider>
    )
    expect(screen.getByText('Themed Button')).toHaveClass('button button-dark')
  })
})

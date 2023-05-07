import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TabNavigation from '../TabNavigation'

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']

describe('TabNavigation tests', () => {
  test('switches tabs using keyboard navigation', () => {
    render(<TabNavigation tabs={tabs} />)

    const firstTab = screen.getByText('Tab 1')
    const secondTab = screen.getByText('Tab 2')

    expect(firstTab).toHaveAttribute('aria-selected', 'true')
    expect(secondTab).toHaveAttribute('aria-selected', 'false')

    fireEvent.focus(secondTab)
    fireEvent.keyDown(secondTab, { key: 'Enter' })

    expect(firstTab).toHaveAttribute('aria-selected', 'false')
    expect(secondTab).toHaveAttribute('aria-selected', 'true')
  })
})

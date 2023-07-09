import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TabNavigation from '../TabNavigation'

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']

describe('TabNavigation tests', () => {
  test('switches tabs using keyboard navigation', async () => {
    const user = userEvent.setup()
    render(<TabNavigation tabs={tabs} />)

    const firstTab = screen.getByText('Tab 1')
    const secondTab = screen.getByText('Tab 2')

    expect(firstTab).toHaveAttribute('aria-selected', 'true')
    expect(secondTab).toHaveAttribute('aria-selected', 'false')

    await user.tab() // Moves focus to 'Tab 2'
    await user.type(secondTab, '{enter}') // Activates 'Tab 2'

    expect(firstTab).toHaveAttribute('aria-selected', 'false')
    expect(secondTab).toHaveAttribute('aria-selected', 'true')
  })
})

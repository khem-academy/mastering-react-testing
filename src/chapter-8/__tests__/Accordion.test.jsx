import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Accordion from '../Accordion'

const items = [
  { title: 'Item 1', content: 'Content 1' },
  { title: 'Item 2', content: 'Content 2' },
  { title: 'Item 3', content: 'Content 3' },
]

describe('Accordion tests', () => {
  test('properly sets ARIA attributes', async () => {
    const user = userEvent.setup()

    render(<Accordion items={items} />)
    const firstItemButton = screen.getByText('Item 1')
    const secondItemButton = screen.getByText('Item 2')

    expect(firstItemButton).toHaveAttribute('aria-expanded', 'false')

    expect(secondItemButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(firstItemButton)

    expect(firstItemButton).toHaveAttribute('aria-expanded', 'true')
    expect(secondItemButton).toHaveAttribute('aria-expanded', 'false')
  })
})

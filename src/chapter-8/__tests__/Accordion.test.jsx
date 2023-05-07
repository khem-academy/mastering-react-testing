import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Accordion from '../Accordion'

const items = [
  { title: 'Item 1', content: 'Content 1' },
  { title: 'Item 2', content: 'Content 2' },
  { title: 'Item 3', content: 'Content 3' },
]

describe('Accordion tests', () => {
  test('properly sets ARIA attributes', () => {
    render(<Accordion items={items} />)

    const firstItemButton = screen.getByText('Item 1')
    const secondItemButton = screen.getByText('Item 2')

    expect(firstItemButton).toHaveAttribute('aria-expanded', 'false')
    expect(secondItemButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(firstItemButton)

    expect(firstItemButton).toHaveAttribute('aria-expanded', 'true')
    expect(secondItemButton).toHaveAttribute('aria-expanded', 'false')
  })
})

import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '../Modal'

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

describe('Modal tests', () => {
  test('focuses the close button when opened', () => {
    render(<TestComponent />)

    const openButton = screen.getByText('Open Modal')
    fireEvent.click(openButton)

    const closeButton = screen.getByText('Close')
    expect(closeButton).toHaveFocus()
  })
})

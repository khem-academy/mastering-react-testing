import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  test('focuses the close button when opened', async () => {
    const user = userEvent.setup()

    render(<TestComponent />)

    const openButton = screen.getByText('Open Modal')
    await user.click(openButton)

    const closeButton = screen.getByText('Close')
    expect(closeButton).toHaveFocus()
  })
})

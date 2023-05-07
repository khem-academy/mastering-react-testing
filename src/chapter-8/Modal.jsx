import React, { useEffect, useRef } from 'react'

const Modal = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div>
      <h2>Modal title</h2>
      <p>Modal content</p>
      <button ref={closeButtonRef} onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default Modal

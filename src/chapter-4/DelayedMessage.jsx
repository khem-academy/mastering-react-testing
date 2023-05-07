import React, { useState, useEffect } from 'react'

const DelayedMessage = ({ message, delay }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return <div>{isVisible && <span>{message}</span>}</div>
}

export default DelayedMessage

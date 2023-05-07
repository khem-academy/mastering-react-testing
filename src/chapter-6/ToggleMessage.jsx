import React, { useState } from 'react'

const ToggleMessage = () => {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>
      {showMessage && <p data-testid="message">Hello, World!</p>}
    </div>
  )
}

export default ToggleMessage

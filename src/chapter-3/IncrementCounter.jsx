import React, { useState } from 'react'

const IncrementCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p data-testid="counter-display">Count: {count}</p>
      <button onClick={increment} data-testid="increment-button">
        Increment
      </button>
    </div>
  )
}

export default IncrementCounter

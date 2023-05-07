import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const Wrapper = () => {
  const [items, setItems] = useState([])

  const handleSubmit = (value) => {
    setItems([...items, value])
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <List items={items} />
    </div>
  )
}

export default Wrapper

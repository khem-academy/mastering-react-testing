import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button aria-expanded={activeItem === index} onClick={() => setActiveItem(activeItem === index ? null : index)}>
            {item.title}
          </button>
          {activeItem === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  )
}

export default Accordion

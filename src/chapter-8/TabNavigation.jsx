import React, { useState } from 'react'

const TabNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <nav>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            tabIndex={0}
            role="button"
            onClick={() => setActiveTab(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setActiveTab(index)
              }
            }}
            aria-selected={activeTab === index}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TabNavigation

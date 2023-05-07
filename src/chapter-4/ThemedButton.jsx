import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const ThemedButton = () => {
  const theme = useContext(ThemeContext)

  return <button className={`button ${theme === 'dark' ? 'button-dark' : ''}`}>Themed Button</button>
}

export default ThemedButton

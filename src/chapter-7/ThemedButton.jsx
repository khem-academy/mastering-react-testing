import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={`button ${theme === 'dark' ? 'button-dark' : ''}`} onClick={toggleTheme}>
      Themed Button
    </button>
  )
}

export default ThemedButton

import React from 'react'
import { render } from '@testing-library/react'
import { ThemeContext } from '../chapter-7/ThemeContext'

const customRender = (ui, { theme = 'light', ...options } = {}) => {
  const Wrapper = ({ children }) => <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>

  return render(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { customRender as render }

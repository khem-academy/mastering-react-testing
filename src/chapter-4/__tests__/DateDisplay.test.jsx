import React from 'react'
import { render, screen } from '@testing-library/react'
import DateDisplay from '../DateDisplay'
import * as formatDateModule from '../formatDate'

jest.mock('../formatDate')

test('renders date using formatDate function', () => {
  formatDateModule.formatDate.mockImplementation(() => '1/1/2023')
  render(<DateDisplay date="2023-01-01" />)
  expect(screen.getByText('1/1/2023')).toBeInTheDocument()
  expect(formatDateModule.formatDate).toHaveBeenCalledWith('2023-01-01')
})

import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import axios from 'axios'
import FetchAndDisplay from '../FetchAndDisplay'

jest.mock('axios')

afterEach(() => {
  jest.resetAllMocks()
})

test('fetches and displays data', async () => {
  axios.get.mockResolvedValue({
    data: ['Item 1', 'Item 2'],
  })

  render(<FetchAndDisplay url="https://api.example.com/items" />)
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))

  expect(screen.getByText('Item 1')).toBeInTheDocument()
  expect(screen.getByText('Item 2')).toBeInTheDocument()
})

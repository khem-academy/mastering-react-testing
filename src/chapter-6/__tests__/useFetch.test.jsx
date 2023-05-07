import { renderHook, waitFor } from '@testing-library/react'
import useFetch from '../useFetch'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mock data' }),
  })
)

describe('useFetch tests', () => {
  test('useFetch fetches data and updates state', async () => {
    const { result } = renderHook(() => useFetch('https://api.example.com/data'))

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toEqual({ data: 'mock data' })
      expect(result.current.error).toBe(null)
    })
  })

  test('useFetch handles error when fetching data', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch error')))

    const { result } = renderHook(() => useFetch('https://api.example.com/data'))

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBe(null)
      expect(result.current.error).toEqual(new Error('Fetch error'))
    })
  })
})

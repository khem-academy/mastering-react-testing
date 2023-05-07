import { renderHook, act } from '@testing-library/react'
import useCounter from '../useCounter'

describe('useCounter', () => {
  test('initializes with a default value of 0', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  test('initializes with a provided initial value', () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  test('increments the count', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  test('decrements the count', () => {
    const { result } = renderHook(() => useCounter(5))
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(4)
  })
})

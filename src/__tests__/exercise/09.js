// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

const setup = ({initialCount, step} = {}) => {
  let result = {}

  const UseFakeComponent = () => {
    result.current = useCounter({initialCount, step})
    return null
  }

  render(<UseFakeComponent />)
  return result
}

test('exposes the count and increment/decrement functions', () => {
  const result = setup()

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('customize step', () => {
  const result = setup({step: 3})

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(3)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('customize initial state', () => {
  const result = setup({initialCount: 3})

  expect(result.current.count).toBe(3)
  act(() => result.current.increment())
  expect(result.current.count).toBe(4)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(3)
})

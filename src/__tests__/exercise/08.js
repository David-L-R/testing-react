// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {screen} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

function UseCounterHook({initialCount, step}) {
  const {count, decrement, increment} = useCounter({initialCount, step})

  return (
    <div>
      <div>Current count: {count} </div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

test('exposes the count and increment/decrement functions', async () => {
  // 🐨 render the component
  render(<UseCounterHook />)
  // 🐨 get the elements you need using screen
  const decrement = screen.getByRole('button', {
    name: /decrement/i,
  })
  const increment = screen.getByRole('button', {
    name: /increment/i,
  })

  const message = screen.getByText(/current count/i, {})
  // 🐨 assert on the initial state of the hook
  expect(message).toHaveTextContent('Current count: 0')

  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: -1')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 0')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
})

/* eslint no-unused-vars:0 */
test('Start with different initial state', async () => {
  // 🐨 render the component
  render(<UseCounterHook initialCount={3} step={2} />)
  // 🐨 get the elements you need using screen
  const decrement = screen.getByRole('button', {
    name: /decrement/i,
  })
  const increment = screen.getByRole('button', {
    name: /increment/i,
  })

  const message = screen.getByText(/current count/i, {})
  // 🐨 assert on the initial state of the hook
  expect(message).toHaveTextContent('Current count: 3')

  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 1')

  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: -1')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 3')
})

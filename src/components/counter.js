// http://localhost:3000/counter

import * as React from 'react'
import {useCounter} from '../hooks/useCounter'

function Counter() {
  const {count, increment, decrement} = useCounter()

  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter

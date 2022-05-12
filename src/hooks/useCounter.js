import React from 'react'

export const useCounter = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 2)
  const decrement = () => setCount(c => c - 1)

  return {count, increment, decrement}
}

import * as React from 'react'
import {render} from '@testing-library/react'
import Counter from '../../components/counter'
import {fireEvent, screen} from '@testing-library/dom'

test('expose count, and increment/decrement function', () => {
  render(<Counter />)

  const decrement = screen.getByRole('button', {name: /decrement/i})
  const increment = screen.getByRole('button', {name: /increment/i})

  console.log(decrement.innerHTML)
  console.log(increment.innerHTML)
})

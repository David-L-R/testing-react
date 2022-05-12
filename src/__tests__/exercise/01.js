// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
// import {act} from 'react-dom/test-utils'
import Counter from '../../components/counter'
import ReactDom from 'react-dom'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

// let container

// beforeEach(() => {
//   container = document.createElement('div')
//   document.body.appendChild(container)
// })

// afterEach(() => {
//   document.body.removeChild(container)
//   container = null
// })

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const container = document.createElement('div')

  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.appendChild(container) // const component = renderer.create(<Counter />)

  // 🐨 use createRoot to render the <Counter /> to the div

  act(() => {
    createRoot(container).render(<Counter />)
  })

  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  const [dec, inc] = container.querySelectorAll('button')

  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')

  const message = container.firstChild.querySelector('div')

  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: dec,
  })

  expect(message.textContent[message.textContent.length - 1]).toBe('0')

  act(() => {
    inc.click()
  })

  expect(message.textContent).toBe('Current count: 1')

  for (let i = 0; i < 10; i++) {
    act(() => {
      inc.click()
    })
  }

  console.log(document.body.innerHTML)
  expect(message.textContent).toBe('Current count: 11')

  act(() => {
    dec.click()
  })

  expect(message.textContent).toBe('Current count: 10')

  for (let i = 0; i < 10; i++) {
    act(() => {
      dec.click()
    })
  }

  expect(message.textContent).toBe('Current count: 0')

  for (let i = 0; i < 10; i++) {
    act(() => {
      dec.click()
    })
  }

  expect(message.textContent).toBe('Current count: -10')

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 act(() => increment.click()))
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */

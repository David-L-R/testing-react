<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="15%">
    <img src="https://testing-library.com/img/octopus-128x128.png" width="15%">
    <img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" width="15%">
</p>

# TEACHER'S NOTES - Testing Custom Hooks

## 🪝 Intro (15-20 minutes)

### What are hooks? (10 minutes)

Hooks allow you to use state and other React features without writing a class.

This part is less about checking if students know theoretically what are hooks, but to see if they can give a few examples. They should be able to explain shortly about `useState` and `useEffect`.

Then we start with an empty component:

https://github.com/David-L-R/testing-react/blob/lesson-testing-hooks/src/components/counter.js

We ask the students to help us add functions that will allow us to
1. increase
2. decrease
3. show the current count

For that we will have to use a `useState` and two functions.

### What are custom hooks? (5-10 minutes)

Ask the students first. Then explain that it is a way to re-use functionality, including hooks like `useState`, `useEffect` and others!

Now we will practice on the component we've created an remove the functionality we added to a new `useCounter` hook (we've created a new folder name "hooks").

We should start building the `useCounter` gradually:
- first show the `initialCount` is always 0 and step is always 1
- then show that we can pass variables to change those

Solution
- [The new component](https://github.com/David-L-R/testing-react/blob/lesson-testing-hooks-solution/src/components/counter.js)
- [The new hooks](https://github.com/David-L-R/testing-react/blob/lesson-testing-hooks-solution/src/hooks/useCounter.js)

## 🤔 Testing - Why 

### Why we should NOT test custom hooks

Following the advice given in the Testing Javascript course, usually we will want to avoid testing each hook and only test the components using it.

The 

### When should you test

## ⚙️ Testing - How
- Creating new component
- Testing hooks directly
- Using `{renderHook}` from `@testing-library`

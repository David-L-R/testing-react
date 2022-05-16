<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="15%">
    <img src="https://testing-library.com/img/octopus-128x128.png" width="15%">
    <img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" width="15%">
</p>

# TEACHER'S NOTES - Testing Custom Hooks

## 🪝 Intro (15-20 minutes)

### What are hooks? (10 minutes)

Hooks allow you to use state and other React features without writing a class.

This part is less about checking if students know theoretically what are hooks,
but to see if they can give a few examples. They should be able to explain
shortly about `useState` and `useEffect`.

Then we start with an empty component:

https://github.com/David-L-R/testing-react/blob/lesson-testing-hooks/src/components/counter.js

We ask the students to help us add functions that will allow us to

1. increase
2. decrease
3. show the current count

For that we will have to use a `useState` and two functions.

### What are custom hooks? (5-10 minutes)

Ask the students first. Then explain that it is a way to re-use functionality,
including hooks like `useState`, `useEffect` and others!

Now we will practice on the component we've created an remove the functionality
we added to a new `useCounter` hook (we've created a new folder name "hooks").

We should start building the `useCounter` gradually:

- first show the `initialCount` is always 0 and step is always 1
- then show that we can pass variables to change those

Solution

- [The new component](https://github.com/David-L-R/testing-react/blob/lesson-testing-hooks-solution/src/components/counter.js)
- [The new hooks](https://github.com/David-L-R/testing-react/blob/lesson-testing-hooks-solution/src/hooks/useCounter.js)

## 🤔 Testing - Why (5-10 minutes)

### Why we should NOT test custom hooks

Following the advice given in the Testing Javascript course, usually we will
want to avoid testing each hook and only test the components using it.

The reason: one should avoid testing implementation details. We should "not
care" how the component is increasing or decreasing the count, because this
might change (an external library, a different function, a reusable function...)
so we should just focus on the result - how the count changes within a specific
component (how the component implements something and not how the implementation
works internally).

### When should you test

But, when a hook is used across the application in many different ways, it might
make sense to check if it works properly internally.

Advanced: testing hooks is very relevant when creating an external library in
which hooks can be imported (and then we cannot be sure how they are being
implemented in a specific component).

Solution: testing the counter hook by testing the component:
https://github.com/David-L-R/testing-react/blob/lesson-testing-hooks-solution/src/__tests__/lesson/01-testing-hooks-with-component.js

## ⚙️ Testing - How (30-40 minutes)

This is the main part of the lecture!

Now we will explain how to test hooks. We have few ways to do it - we will start
with the least recommended and make our way to the best way (using the built in
functionality of the "testing-library").

Here you can see all testing preparations:
https://github.com/David-L-R/testing-react/tree/lesson-testing-hooks/src/__tests__/lesson

### 1. Creating new component (10-15 minutes)

The first solution is to create a "fake" component (one that does not have to
resemble any real component or implementation) and to test it by implementing
all different functionalities of the hook.

solution:
https://github.com/David-L-R/testing-react/blob/main/src/__tests__/exercise/08.js

---

### 2. Testing hooks directly (10-20 minutes)

This one is better. Maybe none of our available components actually test the
entire functionality of the hook, and maybe it is too difficult to create one
"fake" component to simulate all functionality.

Hence, we should test all functionality directly:
https://github.com/David-L-R/testing-react/blob/main/src/__tests__/exercise/09.js

This one is a bit more complex I have created a "setup" function to reuse a fake
component that will just return the hook.

Instead we could use the following code in each test (and then abstract it into
a setup function):

```
test('some test...', () => {

  const UseFakeComponent = () => {
    result.current = useCounter({initialCount, step})
    return null
  }

  render(<UseFakeComponent />)

})

```

[see more on the code example - 4 minutes video](https://epicreact.dev/modules/testing-react-apps/testing-custom-hooks-extra-credit-solution-1)

[see more on the setup function - 4 minutes video](https://epicreact.dev/modules/testing-react-apps/testing-custom-hooks-extra-credit-solution-2)

---

### 3. Using `{renderHook}` from `@testing-library` (5 minutes)

The last way is to use the built in functionality of `@testing-library`. The
library already implements a "setup" and a "result", and even allows us to
rerendering!

https://github.com/David-L-R/testing-react/blob/main/src/__tests__/exercise/10.js

[see more - 2.5 minutes video](https://epicreact.dev/modules/testing-react-apps/testing-custom-hooks-extra-credit-solution-3)

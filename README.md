# React - The Complete Guide

Repositório de projetos do curso [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) do instrutor [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).

## Section 02 - JavaScript Refresher

## Section 03 - React Basics and Working with Components

## Section 04 - React State and Working with Events

## Section 05 - Redering Lists and Conditional Content

## Section 06 - Styling React Components

## Section 07 - Debugging React Apps

## Section 08 - User Project

## Section 09 - Diving Deeper: Working with Fragments, Portals and Refs

## Section 10 Handling Side Effects, Using Reducers and Using Context Api

### What is an "Effect" (or a "Side Effect")?

Remember that the main job of React is Render UI and react to User Input:

- Evaluate and Render JSX
- Manage State and Props
- React to (User) Events and Input
- Re-evaluate Component upon State and Prop Changes

This all is "baked into" React via the "tools" and features covered in this course (useState() hook, Props, etc...)

#### Side Effects: Anything Else

- Store data in browser storage
- Send Http requests to backend servers
- Set and manage timers
- ...

There taks **must happen outside of the normal component evaluation** and render cycle - especially since they might block/delay rendering (e.g. http requests)

#### `useEffect()`

```javascript
useEffect(() => {...}, [dependencies]);
```

The **first argument** is a function that should be executed **AFTER** every component dependendies changed.

> **Your side effect code goes into this function**

The second are the dependencies of this effect - the function only runs if the dependecies changed.

> **Specify your dependencies of your function here**

#### What to add & Not to add as Dependencies

In the previous lecture, we explored `useEffect()` dependencies.

You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

That is correct, but there are a **few exceptions** you should be aware of:

- You **DON'T need to add state updating functions** (as we did in the last lecture with `setFormIsValid`): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

- You also **DON'T need to add "built-in" APIs or functions** like `fetch()`, `localStorage` etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

- You also **DON'T need to add variables or functions** you might've **defined OUTSIDE of your components** (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

So long story short: You must add all "things" you use in your effect function **if those "things" could change because your component (or some parent component) re-rendered**. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

Here's a made-up dummy example to further clarify the above-mentioned scenarios:

```javascript
import { useEffect, useState } from 'react';
 
let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
```

In this example:

- `timerIsActive` is **added as a dependency** because it's component state that may change when the component changes (e.g. because the state was updated)

- `timerDuration` is **added as a dependency** because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

- `setTimerIsActive` is **NOT added as a dependency** because it's that **exception**: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

- `myTimer` is **NOT added as a dependency** because it's **not a component-internal variable** (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) **wouldn't cause the component to be re-evaluated**

- `setTimeout` is **NOT added as a dependency** because it's **a built-in API** (built-into the browser) - it's independent from React and your components, it doesn't change.

#### DEBOUCING

Do something when the user stops typing.

### Introducing `useReducer()` for State Management

Sometimes, you have **more complex state** - for example if it got **multiple states**, **multiple ways of changing** it or **dependencies** to other states.

`useState()` then often **becomes hard or error-prone to use** - it's easy to write bad, inefficient or buggy code in such scenarios.

`useReducer()` can be used as a replacement for `useState()` if you need **"more powerful state management"**

### Understanding useReducer()

```javascript
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

The state snapshot used in the component re-render/re-evaluation cycle.

# React - The Complete Guide

Repositório de projetos do curso [React - The Complete Guide (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) do instrutor [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).

## Section 01: Getting Started

## Section 02: JavaScript Refresher

Project folder -> [00-js-refresher](https://github.com/gildoneto/react-complete-guide/tree/main/00-js-refresher)

## Section 03: React Essentials - Components, JSX, Props, State and More

Project folder -> [01-starting-project](https://github.com/gildoneto/react-complete-guide/tree/main/01-starting-project)

### Passing a Single Prop Object

If you got data that's already organized as a JavaScript object, you can pass that object as a single prop value instead of splitting it across multiple props.

I.e., instead of

```js
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
  // OR
  <CoreConcept
  {...CORE_CONCEPTS[0]} />
```

you could also pass a single `concept` (or any name of your choice) prop to the `CoreConcept` component:

```js
  <CoreConcept
  concept={CORE_CONCEPTS[0]} />
```

In the `CoreConcept` component, you would then get that one single prop:

```js
export default function CoreConcept({ concept }) {
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
```

### Grouping Received Props Into a Single Object

You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" syntax.

I.e., if a component is used like this:

```js
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
```

You could group the received props into a single object like this:

```js
export default function CoreConcept({ ...concept }) { 
  // ...concept groups multiple values into a single object
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
```

## Section 04: React Essentials - Deep Dive

### Beyond the Basics

- Behind the scenes of **JSX**
- Structuring **Components** and **State**
- **Advanced State** usage
- **Patterns & Best Practices**

## Section 05: React Essentials - Practice Project

## Section 06: Styling React Components

## Section 07: Debugging React Apps

## Section 08: Working with Refs & Portals

## Section 09: Project Management App

## Section 10: React's Context API & useReducer - Advanced State Management

## Section 11: Handling Side Effects & Working with the useEffect() Hook

### What is an "Effect" (or a "Side Effect") ?

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
import { useEffect, useState } from "react";

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

`state`: snapshot used in the component re-render/re-evaluation cycle.

`dispatchFn`: is a function that can be used to dispatch a new action (i.e trigger an update of the state).

`reducerFn`: `(prevState, action) => newState` A function that is **triggered automatically** once an action is **dispatched** (via `dispatchFn()`) - it **receives the lates state snapshot** and **should return the new, updated state**.

`initialState`: The initial state.

`initFn`: A function to set the initial state programatically.

### Adding Nested Properties As Dependencies To useEffect

In the previous lecture, we used object destructuring to add object properties as dependencies to `useEffect()`.

```javascript
const { someProperty } = someObject;
useEffect(() => {
  // code that only uses someProperty ...
}, [someProperty]);
```

This is a **very common pattern and approach**, which is why I typically use it and why I show it here (I will keep on using it throughout the course).

I just want to point out, that they **key thing is NOT that we use destructuring** but that we **pass specific properties instead of the entire object** as a dependency.

We could also write this code and it would **work in the same way**.

```javascript
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject.someProperty]);
```

This works just fine as well!

But you should **avoid** this code:

```javascript
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject]);
```

Why?

Because now the e**ffect function would re-run whenever ANY property** of `someObject` changes - not just the one property (`someProperty` in the above example) our effect might depend on.

### useState() vs useReducer()

Generally, you'll know when you need useReducer() (-> when useState() become cumbersome or you're getting a lot of bugs/ unintended behaviours)

| `useState()`                                                          | `useReducer()`                                                |
| --------------------------------------------------------------------- | ------------------------------------------------------------- |
| The main state management "tool"                                      | Great if you need "more power"                                |
| Great for independent pieces of state/data                            | Should be considered if you have related pieces of state/data |
| Great if state updates are easy and limited to a few kinds of updates | Can be helpful if you have more complex state updates         |

## Section 12: Practice Project: Building a Quiz App

## Section 13: A Look Behind The Scenes Of React & Optimization Techniques

## Section 14: An Alternative Way Of Building Components: Class-based Components

## Section 15: Sending Http Requests (Connecting on a Database)

## Section 16: Building Custom React Hooks

## Section 17: Working with Forms & User Input

[Formik Documentation](https://formik.org/docs/overview)

## Section 18: Handling Forms via Form Actions

## Section 19: Building a Food Order App

## Section 20: Diving into Redux (An Alternative To The Context API)

## Section 21: Advanced Redux

## Section 22: Building a Multi-Page SPA with React Router

## Section 23: Adding Authentication To React Apps

## Section 24: Deploying React Apps

## Section 25: React Query / Tanstack Query: Handling HTTP Requests with Ease

## Section 26: A (Pretty Deep Dive) Introduction to Next.js

## Section 27: React Server Components (RSC) & Server Actions - A Closer Look

## Section 28: Animating React Apps

## Section 29: React Patterns & Best Practices

## Section 30: Replacing Redux with React Hooks

## Section 31: Testing React Apps (Unit Tests)

## Section 32: React + TypeScript

## Section 33: React Summary & Core Feature Walkthrough

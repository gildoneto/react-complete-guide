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


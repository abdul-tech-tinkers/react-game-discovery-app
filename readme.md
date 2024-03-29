- [Certificates](#certificates)
- [Screenshots](#screenshots)
- [React - Installation](#react---installation)
  - [Getting Started](#getting-started)
  - [Building Components](#building-components)
  - [Popular UI Libraries](#popular-ui-libraries)
  - [Icons](#icons)
- [State Management](#state-management)
- [Forms](#forms)
- [Connecting to Backend](#connecting-to-backend)
    - [useEffect Hook](#useeffect-hook)
- [Game-Hub APP Development](#game-hub-app-development)
  - [Dark Theme support](#dark-theme-support)
- [React Query](#react-query)
    - [React Query Dev Tools](#react-query-dev-tools)
    - [React Query Configuration](#react-query-configuration)
    - [infinite scroll with scroll bar](#infinite-scroll-with-scroll-bar)
- [React Testing](#react-testing)
    - [Setup the Testing Library and Jest in React Project](#setup-the-testing-library-and-jest-in-react-project)
    - [What to test](#what-to-test)
    - [What not to test](#what-not-to-test)
    - [vitest](#vitest)
      - [Specify Timeout](#specify-timeout)
      - [Skipping Suites and Tests](#skipping-suites-and-tests)
      - [unimplemented test suite and tests.](#unimplemented-test-suite-and-tests)
    - [Mocking with jest](#mocking-with-jest)
- [Global State Management](#global-state-management)
- [Routing](#routing)

[![Deployment Status](https://github.com/abdul-tech-tinkers/react-game-discovery-app-/actions/workflows/azure-static-web-apps-ambitious-wave-0430f2910.yml/badge.svg)](https://github.com/abdul-tech-tinkers/react-game-discovery-app-/actions/workflows/azure-static-web-apps-ambitious-wave-0430f2910.yml)

Link: [Deployed App on Azure Static App](https://ambitious-wave-0430f2910.2.azurestaticapps.net/)

# Certificates
![Alt text](docs/cert.png)

![Alt text](docs/2023-09-09_20h56_10.png)

# Screenshots  

Home Page
![Alt text](docs/2023-09-09_20h42_36.png)

Game Details Page
![Alt text](docs/2023-09-09_20h42_44.png)




# React - Installation
use `vite@latest` to setup react native app with `TypeScript`

``` node.js
npm create vite@latest
```
- React is a javascript library for creating user interface
- `library` is a tool that provide specific functionality
- while a `framework` is a set of tools and guidelines for building application
- e.g. tool and tool set
- **react** is a tool for building user interface the only thing it does creating dynamic and interactive user interfaces

## Getting Started 
 - React is a JavaScript library for building dynamic and interactive user interfaces.
 - In React applications, we don’t query and update the DOM. Instead, we describe our application using small, reusable **components**. React will take care of efficiently creating and updating DOM elements.
    
 -  React components can be created using a function or a class. `Function-based components` are the preferred approach as they’re more concise and easier to work with.
 -  JSX stands for JavaScript XML. It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.•When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM. This virtual DOM is different from the actual DOM in the browser. It’s a lightweight, in-memory representation of our component tree.
- When the state or the data of a component changes, React updates the corresponding node in the virtual DOM to reflect the new state. Then, it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated. It’ll then update those nodes in the actual DOM. 
- In browser-based apps, updating the DOM is done by a companion library called ReactDOM. In mobile apps, React Native uses native components to render the user interface.
- Since React is just a library and not a framework like Angular or Vue, we often need other tools for concerns such as routing, state management, internationalization, form validation, etc

## Building Components

```js
npm i bootstrap@5.2.3
```
Navigate to Main.tsx and import bootstrap css
```js
import "bootstrap/dist/css/bootstrap.css";
```

`Props` - imput passed to a component - like args - immutable - causes a rerender

`State` - Data Managed by a component - mutable - causes a rerender

```ts
color?: "primary" | "secondary" | "danger"; //allowable values

```

- In React apps, a **component** can only return a single element. To return multiple elements, we wrap them in a `fragment`, which is represented by empty angle brackets.
  ```js
      <>
      <h1>{heading}</h1>
      <div></div>
      </>
  ```
  
- To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number. 
- To conditionally render content, we can use an ‘if’ statement or a ternary operator. 
  
```js
     {isShowAlert && (
        <Alerts onClose={() => showAlert(false)}>
          My <b>Alert</b>
        </Alerts>
      )}
```
- We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React. 
- Components can optionally have props (short for properties) to accept input. 
- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.
- We should treat props as immutable (read-only) and not modify them. 
- When the state or props of a component change, React will re-render the component and update the DOM accordingly. 
- In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.•To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number. 
- To conditionally render content, we can use an ‘if’ statement or a ternary operator. -We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React. 
- Components can optionally have props (short for properties) to accept input. 
- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.
- We should treat props as immutable (read-only) and not modify them. 
- When the state or props of a component change, React will re-render the component and update the DOM accordingly. 
- useState when ever you see the local variable changes over time by some data manipulation.


## Popular UI Libraries

There are several UI libraries available that can assist us in quickly building beautiful and modern applications. Some popular options include Bootstrap, Material UI, TailwindCSS, DaisyUI, ChakraUI, and more.

- Bootstrap
- Material UI
- Tailwind CSS
- daisy UI simillar to bootstrap
  - `Chakra UI` simillar to material ui but built on top of tailwind 
    - it has prebuilt components develop on top of components
    - react `component library` built on top of `tailwind`
  
## Icons
 - react icons

```js
npm i react-icons@4.7.1
```

```js
import { BsFillCalendarFill } from "react-icons/bs";

<BsFillCalendarFill color="red" size="100" />
```

# State Management
- react update state asynchronously - to avoid unnecassary renders
- state is stored outside of the component
- use the hooks at the top level of the component.
- keep ur component `pure`. Render same output for given input props.
- state objects to be treated as immutable and read only, create new object and then set it.
- **Rule of Thumb:** A Component that holds the state should be responsible for updating the state, not by child component.
- state object are immutable dont update them in the component, always use the hook paramter set[Name] e.g. `setIsLoading(true)`

Update state of array of object or object with draft
```js
npm i immer@9.0.19
```


- The state hook allows us to add state to function components. 
  
- Hooks can only be called at the top level of components. 
- State variables, unlike local variables in a function, stay in memory as long as the component is visible on the screen. This is because state is tied to the component instance, and React will destroy the component and its state when it is removed from the screen.
- React updates state in an asynchronous manner, so updates are not applied immediately. Instead, they’re batched and applied at once after all event handlers have finished execution. Once the state is updated, React re-renders our component. •Group related state variables into an object to keep them organized. 
- Avoid deeply nested state objects as they can be hard to update and maintain. 
- To keep state as minimal as possible, avoid redundant state variables that can be computed from existing variables. 
- A pure function is one that always returns the same result given the same input. Pure functions should not modify objects outside of the function.
- React expects our function components to be **pure**. A **pure** component should always return the same JSX given the same input. 
To keep our components pure, we should avoid making changes during the render phase. 
- Strict mode helps us catch potential problems such as impure components. Starting from React 18, it is enabled by default. It renders our components twice in development mode to detect any potential side effects. 
When updating objects or arrays, we should treat them as immutable objects. Instead of mutating them, we should create new objects or arrays to update the state.
- Immer is a library that can help us update objects and arrays in a more concise and mutable way. 
To share state between components, we should lift the state up to the closest parent component and pass it down as props to child components. 
- The component that holds some state should be the one that updates it. If a child component needs to update some state, it should notify the parent component using a callback function passed down as a prop

# Forms

- `React Hook Forms`
- `Zod` - Data Validation

```js
npm i react-hook-form@7.43
npm i zod@3.20.6
```

integrate react hook form with zod
```js
npm i @hookform/resolvers@2.9.11
```

e.g [Sample Form](src/components/Form.tsx)


To handle form submissions, we set the onSubmit attribute of the form element.•We can use the ref hook to access elements in the DOM. This technique is often used to read the value of input fields upon submitting a form. 

- We can also use the state hook to create state variables and update them as the user types into input fields. With this technique, every time the user types a character into an input field, the component containing the form gets re-rendered. While in theory this can cause a performance penalty, in practice this is often negligible. 
  
- React Hook Form is a popular library that helps us build forms quickly with less code. With React Hook Form, we no longer have to worry about using the ref or state hooks to manage the form state. •React Hook Form supports the standard HTML attributes for data validation such as required, minLength, etc.  
- We can validate our forms using schema-based validation libraries such as joi, yup, zod, etc. With these libraries, we can define all our validation rules in a single place called a schema.

[Building Form Reference Document](docs/5-%20Building%20Forms.pdf)

# Connecting to Backend

Multiple options to build backend
- ASP.NET Core
- Express.js
- Django
- Ruby on Rails
- Spring

### useEffect Hook
To execute a piece of code after a component is rendered.
```js
useEffect(()=>{})
```

[Sample Data - backend api JSONPlaceholder](https://jsonplaceholder.typicode.com)

- use `axios` for backend data fetching

```js
npm i axios@1.3.4
```

[Backend Summary doc](docs/6-%20Connecting%20to%20the%20Backend.pdf)


# Game-Hub APP Development

- install `chakra ui` 

```js
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

- Replicate UI from [RawG](https://rawg.io/)

## Dark Theme support 
`theme.ts`

```ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });
export default theme;
```
main.tsx

```tsx
 <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
  </ChakraProvider>
```
ColorModeSwitch.tsx

```ts
import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
   <HStack>
    <Switch isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
    <Text>Dark Mode</Text>
   </HStack>
  )
}

export default ColorModeSwitch
```

- deploy application to `vercel`

```js
npm i -g vercel
vercel
```

# React Query

- normal axios fetching has no of problems like 
  - not cancelling the request
  - no separation of concerns
  - no retries
  - no automatic refresh
  - no caching : caching=> the process of storing data in a place where it can be accessed more quickly and efficiently in the future
- **ReactQuery** - powerful library for managing data fetching and caching in react applications.
- Doesn't care how we fetch the data using fetchapi or axios. it is concerned about caching and managing data
- Use React Query initial data for optimization, provide a json with initial values.
- Also use staletime to avoid data refetching.
  
![](docs/2023-04-20_12h24_10.tif)
- Redux adds lot of complexity and biloperate code
- Do not use redux for caching in future projects
  
```js
 npm i @tanstack/react-query@4.28
 ```

main.tsx
 ```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
```

- automatic retires - RQ retires 
- caching 
- auto refresh - after period of time
- create hooks for data fetching

>Define custom hook Todos.ts
```js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
const useTodos = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};
export default useTodos;
```
>usage
```js
const { data: todos, error, isLoading } = useTodos();
```

### React Query Dev Tools

```js
npm i @tanstack/react-query-devtools@4.28
```
### React Query Configuration

```js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      cacheTime: 300_00, // 5 mins
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false, // refetch tab is navigated back
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
  },
});
```
### infinite scroll with scroll bar
- npm package `react-infinite-scroll-component`
-  yarn add react-infinite-scroll-component
# React Testing

- React testing library, you check the behavior of the DOM when the user clicks on a button or submits a form and so on.
The guiding principles of this library emphasize a focus on tests that closely resemble how users interact with your web pages.
You may want to avoid testing the following implementation details:
- Internal state of a component
- Internal methods of a component
- Lifecycle methods of a component
- Child components

 ### Setup the Testing Library and Jest in React Project

 ```js
 npm install @testing-library/jest-dom@5.16.5 @testing-library/react@13.4.0 @testing-library/user-event@14.4.3 jest@29.3.1 jest-environment-jsdom@29.3.1 vitest@0.25.3 --save-dev
 ```

 package.json
 ```json
 "test": "vitest"
 ```


### What to test
- Test component `renders`
- Test component renders with props
- Test component renders in different states e.g navbar login or logout
- Test component reacts to events.
### What not to test
- do not test implementation details -React Testing Library philosophy
- do not test third party code.
- do not test code that is not important from a user point of view - e.g utility function used in component. test the output of the function instead.


 ![](docs/ReactTestingQuery.png)

- To select a single DOM element, returns matching node for a query, and throw a descriptive error if no elements match or if more than one match is found. you can use the 
  - getBy
  - findBy, or 
  - queryBy query
- To select multiple DOM elements, you can use the 
  - getAllBy, 
  - findAllBy 
  - queryAllBy query
 - The suffix can be on of - Role, LabelText, PlaceHolderText, Text, Display Value, AltText, Title and finally TestId. 
 - getBy and findBy return an error if there is no match or more than one match
queryBy returns null if there is no match and returns an error if there is more than one match
- findBy works well with asynchronous code but not with getBy and queryBy
- getAllBy returns an error if there is no match and returns an array of matches for one or more than one match
- findAllBy returns an error if there is no match and returns an array of matches for one or more than one match
- queryAllBy returns an empty array for no match and returns an array of matches for one or more than one match
- ***getByRole:*** role="button" fro custom role, or use the default role, textbox, checkbox, button, combobox etc. 


### vitest

#### Specify Timeout
```ts
import { test } from 'vitest'

test('name', async () => { /* ... */ }, 1000)
```

```ts
import { beforeAll } from 'vitest'

beforeAll(async () => { /* ... */ }, 1000)
```

#### Skipping Suites and Tests

```ts
import { assert, describe, it } from 'vitest'

describe.skip('skipped suite', () => {
  it('test', () => {
    // Suite skipped, no error
    assert.equal(Math.sqrt(4), 3)
  })
})

describe('suite', () => {
  it.skip('skipped test', () => {
    // Test skipped, no error
    assert.equal(Math.sqrt(4), 3)
  })
})
```

#### unimplemented test suite and tests.

```ts
import { describe, it } from 'vitest'

// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')

// An entry will be shown in the report for this test
describe('suite', () => {
  it.todo('unimplemented test')
})
```

### Mocking with jest

https://www.youtube.com/watch?v=kCe1DDFy09I

**Mocking Math.Random() function**

```ts
let randomSpy = jest.spyOn(Math,"random").mockReturnValue(0.5);
randomSpy.mockClear().mockImplementation(()=>{})
```

```ts
jest.mock("@material-ui/data-grid",()=>({
  DataGrid: jest.fn(()=> <div>Table</div>)
}))
```
![](docs/2023-05-20_21h29_25.png)


# Global State Management
 - reducer
 - usecontext
 - state management using lib like zustand or redux

Reducer
 - A function that allows us to centralize state updates in a component.
  
Zustand store
 - npm i zustand@4.3.7

# Routing
npm i react-router-dom@6.10.0
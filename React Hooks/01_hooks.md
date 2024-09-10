React hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features without writing a class. They make it easier to manage state, handle side effects, and share logic across components. Here’s an overview of the most commonly used hooks:

### Basic Hooks

1. **`useState`**
   - Manages local state in a functional component.

   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>Click me</button>
       </div>
     );
   }
   ```

2. **`useEffect`**
   - Handles side effects like fetching data, subscriptions, or manually changing the DOM.

   ```jsx
   import React, { useEffect, useState } from 'react';

   function DataFetcher() {
     const [data, setData] = useState(null);

     useEffect(() => {
       fetch('https://api.example.com/data')
         .then(response => response.json())
         .then(data => setData(data));
     }, []); // Empty dependency array means this effect runs once, after the initial render.

     return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
   }
   ```

3. **`useContext`**
   - Allows you to access the context value without needing to use a Context Consumer.

   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   const ThemeContext = createContext('light');

   function ThemedComponent() {
     const theme = useContext(ThemeContext);

     return <div>Current theme is {theme}</div>;
   }

   function App() {
     const [theme, setTheme] = useState('light');

     return (
       <ThemeContext.Provider value={theme}>
         <ThemedComponent />
         <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
       </ThemeContext.Provider>
     );
   }
   ```

### Additional Hooks

4. **`useReducer`**
   - An alternative to `useState` for managing more complex state logic.

   ```jsx
   import React, { useReducer } from 'react';

   const initialState = { count: 0 };

   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
       <div>
         <p>Count: {state.count}</p>
         <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
       </div>
     );
   }
   ```

5. **`useMemo`**
   - Memoizes the result of a computation to optimize performance.

   ```jsx
   import React, { useMemo, useState } from 'react';

   function ExpensiveComponent({ number }) {
     const computeExpensiveValue = (num) => {
       console.log('Computing...');
       return num * 2; // Example of an expensive computation
     };

     const computedValue = useMemo(() => computeExpensiveValue(number), [number]);

     return <div>Computed Value: {computedValue}</div>;
   }

   function App() {
     const [number, setNumber] = useState(1);

     return (
       <div>
         <ExpensiveComponent number={number} />
         <button onClick={() => setNumber(number + 1)}>Increase Number</button>
       </div>
     );
   }
   ```

6. **`useCallback`**
   - Memoizes a callback function to prevent it from being recreated on every render.

   ```jsx
   import React, { useCallback, useState } from 'react';

   function Button({ onClick }) {
     console.log('Button re-rendered');
     return <button onClick={onClick}>Click me</button>;
   }

   function App() {
     const [count, setCount] = useState(0);

     const handleClick = useCallback(() => {
       setCount(count + 1);
     }, [count]);

     return (
       <div>
         <Button onClick={handleClick} />
         <p>Count: {count}</p>
       </div>
     );
   }
   ```

### Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. They’re JavaScript functions that can use other hooks.

**Example:**

```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Handle write errors
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Stored name: {name}</p>
    </div>
  );
}
```

### Summary

React hooks offer a cleaner and more functional approach to managing state, side effects, and context. By understanding and using these hooks effectively, you can write more modular, reusable, and maintainable code in your React applications.
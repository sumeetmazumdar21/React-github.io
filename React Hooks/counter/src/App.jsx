import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(5);
  // let count = 0;

  const addValue = () => {
    // count = count + 1;
    // setCount(count);
    setCount(count + 1);
        
  }

  const decValue = () => {
    if(count === 0) return;
    count = count - 1;
    setCount(count);   
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value: {count}</h3>
      <button onClick={addValue}>Increment</button>
      <br />
      <br />
      <button onClick={decValue}>Decrement</button>
    </>
  )
}

export default App

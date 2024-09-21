import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-2xl mb-6'>Tailwind Test</h1>

      <div className='grid grid-cols-4 gap-4' >
      <Card username="Alice" btnText="See more"/>
      <Card username="Michelle" />
      <Card username="Layla" />
      <Card username="Rose" />
      </div>
    </>
  )
}

export default App

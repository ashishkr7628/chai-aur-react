import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-2'>Tailwind Test</h1>
     <Card username="ashish"/>
     <Card username="anishay"/>
     </>

 
    
  )
}

export default App

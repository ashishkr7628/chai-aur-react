import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(15)

  const addValue= ()=>{
    // console.log("Value Added",Math.random());
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    
  }

  const removeValue= ()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter value:{counter} </h2>
    <button onClick={addValue}>Increase Count {counter}</button>
    <br />
    <button onClick={removeValue}>Decrease Count {counter}</button>
     <footer> footer: {counter}</footer>
    </>
  )
}

export default App

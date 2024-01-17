import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=10
  const [counter,setCounter]=useState(10)
  // const [count, setCount] = useState(0)
  const addValue=()=>{
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }
  const removeValue=()=>{
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
  }

  return (
    <>
      <h1>This is Basic React {counter} </h1>
      <h2>Counter Value: {counter} </h2>
      <button
        onClick={addValue}
      >Add Value</button>{"  "}
      <button
        onClick={removeValue}
      >Remove Value</button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App

import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { use } from 'express/lib/application'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"
    for(let i=0;i<length;i++){
      const char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  const copyPasswordtoClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const passwordRef=useRef(null)

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-grey-800 text-oramge-500'>
      <h1 className='text-white text-centre my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly 
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordtoClipboard} 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          name=''
          id=''
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} 
          name=''
          id=''
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} 
          name=''
          id=''
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrInfo from './hooks/useCurrInfo'
import { Inputbox } from './components/index.js'

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currInfo=useCurrInfo(from)
  const Options=Object.keys(currInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>{
    setConvertedAmount(amount*currInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <Inputbox 
              label="from"
              amount={amount}
              currencyOptions={Options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolut left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white
              rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}>
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <Inputbox
              label="to"
              currencyOptions={Options}
              amount={convertedAmount}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

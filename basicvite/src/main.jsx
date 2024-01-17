import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

const reactElement={
  type:'a',
  props:{
      href:"https://google.com",
      target:'_blank'
  },
  children:'click me to visit Google'
}
function myApp(){
  return(
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}
const AnotherElement=(
  <a href="http://google.com" target='_blank'> Visit Google</a>
)

const areact=React.createElement(
  'a',
  {href:'http://google.com',target:"_blank"},
  "Visit Google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
    // myApp()
    // AnotherElement
    // areact
  // </React.StrictMode>,
)

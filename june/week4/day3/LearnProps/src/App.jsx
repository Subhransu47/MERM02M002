import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)
let a=10
let str="xyz"
let obj={
  name : "xy",
  age : 20,
  email: "xy@gmail.com"

}
let arr=[1,2,3,4,5];
  return (
    <>
     <h1>Hello welcome to react</h1> 
     <Home a={a} str={str} obj={obj} />
    </>
  )
}

export default App

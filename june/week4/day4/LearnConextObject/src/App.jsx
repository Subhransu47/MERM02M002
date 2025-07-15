import { createContext, Provider,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ChildA from './Components/ChildA';

// let nameContext=createContext();


function App() {
let [Count,setCount]=useState(0)
function handleClick(){
  setCount(Count+1)
}
  // let obj={
  // name:"xyz",
  // age:20,
  // }
  // const [count, setCount] = useState(0)



  return (
    <>
    {/* <nameContext.Provider value={obj}>
     <ChildA/>
     </nameContext.Provider> */}

     <h1>Count :{Count} </h1>
     <br />
     <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default App

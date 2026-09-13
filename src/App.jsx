import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Ankit from './component/Ankit'
import Rijan from './practice'
import Parent from './component/parentchild/parent'
import CounterApp from './component/counter/CounterApp'
import CreateAssignment from './component/assignment/createassignment'
import NewCreateAssignment from './component/assignment/newcreateassignment'



function App() {

  return (
   <>
   {/* <Ankit/>
   <assignment/>
   <Rijan/>
   <Parent/>
   <CounterApp/> */}
   {/* <CreateAssignment/> */}
    <NewCreateAssignment/>

 </>
  )
}

export default App

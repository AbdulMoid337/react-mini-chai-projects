import './App.css'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'
import { useState } from 'react'

function App() {

  return (
    <div>
     
      <Addtodo />
      <Todos />
    </div>
  )
}

export default App

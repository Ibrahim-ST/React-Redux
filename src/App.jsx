 
import { useState } from 'react'
import './App.css'
import CaseTwo from './CaseTwo/CaseTwo'
import CounterContext from './Context/CounterContext'
import Home from './Pages/Home'

function App() {  
  return (
    <CounterContext>
     <Home />
    </CounterContext>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import UsedStates from './components/UsedStates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <UsedStates />
       
    </div>
  )
}

export default App

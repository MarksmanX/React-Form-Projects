import { useState } from 'react'
import BoxList from './components/BoxList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BoxList />
      </div>
    </>
  )
}

export default App

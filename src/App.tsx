import { useState } from 'react'
import Result from './Result'
import OperationButtons from './OperationButtons'
import ArithmeticButtons from './ArithmeticButtons'
import NumberButtons from './NumberButtons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Result />
        <div className="buttons">
          <OperationButtons />
          <ArithmeticButtons />
          <NumberButtons />
        </div>
      </div>
    </>
  )
}

export default App

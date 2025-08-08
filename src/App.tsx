import { useState } from 'react'
import Result from './Result'
import OperationButtons from './OperationButtons'
import ArithmeticButtons from './ArithmeticButtons'
import NumberButtons from './NumberButtons'
import './App.css'

function App() {
  // const [ calculation, setCalculation ] = useState<number|null>(null);
  const [ operation, setOperation ] = useState<number[]>([]);

  const updateOperation = (value: number) => {
    const operationCopy = [...operation];
    const currentValue = operationCopy.pop() || 0;


    setOperation([...operationCopy, Number(`${currentValue}${value}`)])
  }

  return (
    <>
      <div>
        {/* todo implement more than add */}
        <Result calculation={operation.join('+')} />
        <div className="buttons">
          <OperationButtons />
          <ArithmeticButtons />
          <NumberButtons updateOperation={updateOperation} />
        </div>
      </div>
    </>
  )
}

export default App;

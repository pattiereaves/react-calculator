import { useState } from 'react'
import Result from './Result'
import OperationButtons from './OperationButtons'
import ArithmeticButtons from './ArithmeticButtons'
import NumberButtons from './NumberButtons'
import './App.css'

function App() {
  // const [ calculation, setCalculation ] = useState<number|null>(null);
  const [ operation, setOperation ] = useState<(number|string)[]>([]);

  const updateLastValue = (value: number) => {
    const operationCopy = [...operation];
    const currentValue = operationCopy.pop() || 0;

    if (typeof currentValue === 'number') {
      setOperation([...operationCopy, Number(`${currentValue}${value}`)])
      return;
    }

    // Last value was an operator, so add the new value as the last value
    setOperation([...operation, value])
  }

  const addOperator = (operator: string) => {
    setOperation([...operation, operator])
  }

  return (
    <>
      <div>
        {/* todo implement more than add */}
        <Result calculation={operation.join(' ')} />
        <div className="buttons">
          <OperationButtons />
          <ArithmeticButtons addOperator={addOperator} />
          <NumberButtons updateLastValue={updateLastValue} />
        </div>
      </div>
    </>
  )
}

export default App;

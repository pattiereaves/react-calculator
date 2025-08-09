import { useState } from 'react'
import Result from './Result'
import OperationButtons from './OperationButtons'
import ArithmeticButtons from './ArithmeticButtons'
import NumberButtons from './NumberButtons'
import './App.css'

function App() {
  // const [ calculation, setCalculation ] = useState<number|null>(null);
  const [ operation, setOperation ] = useState<(number|string)[]>([]);
  const [ showEvaluation, setShowEvaluation ] = useState(false);
  // const [ stagedValue, setStagedValue ] = useState<string | null>(null);

  const updateLastValue = (value: number) => {
    const operationCopy = [...operation];
    const currentValue = operationCopy.pop() || '';

    if (typeof currentValue === 'number') {
      setOperation([...operationCopy, `${currentValue}${value}`])
      return;
    }

    // Last value was an operator, so add the new value as the last value
    setOperation([...operation, value]);
  }

  const addOperator = (operator: string) => {
    setOperation([...operation, operator]);
  }

  const allClear = () => {
    setOperation([]);
    setShowEvaluation(false);
  }

  const clearLastOperator = () => {
    const operationCopy = [...operation];
    operationCopy.pop();
    setOperation(operationCopy);
  }

  return (
    <>
      <div>
        {/* todo implement more than add */}
        <Result operation={operation} showEvaluation={showEvaluation} />
        <div className="buttons">
          <OperationButtons
            allClear={allClear}
            clearLastOperator={clearLastOperator}
          />
          <ArithmeticButtons addOperator={addOperator} setShowEvaluation={setShowEvaluation} />
          <NumberButtons updateLastValue={updateLastValue} />
        </div>
      </div>
    </>
  )
}

export default App;

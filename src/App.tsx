import { useState } from 'react'
import Result from './Result'
import OperationButtons from './OperationButtons'
import ArithmeticButtons from './ArithmeticButtons'
import NumberButtons from './NumberButtons'
import './App.css'

function App() {
  const [ operation, setOperation ] = useState<string[]>([]);
  const [ showEvaluation, setShowEvaluation ] = useState(false);

  return (
    <>
      <div>
        {/* todo implement more than add */}
        <Result operation={operation} showEvaluation={showEvaluation} />
        <div className="buttons">
          <div className="main-button-group">
            <OperationButtons
              operation={operation}
              setOperation={setOperation}
              setShowEvaluation={setShowEvaluation}
            />
            <NumberButtons operation={operation} setOperation={setOperation} />
          </div>
          <ArithmeticButtons operation={operation} setOperation={setOperation} setShowEvaluation={setShowEvaluation} />
        </div>
      </div>
    </>
  )
}

export default App;

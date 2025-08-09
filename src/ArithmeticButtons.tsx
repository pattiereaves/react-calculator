import './App.css'

function ArithmeticButtons({
  operation,
  setOperation,
  setShowEvaluation,
}: {
  operation: string[],
  setOperation: (operation: string[]) => void
  setShowEvaluation: (showEvaluation: boolean) => void
}) {

  const addOperator = (operator: string) => {
    setOperation([...operation, operator]);
  }

  return (
    <div className='arithmetic-buttons'>
      <button className="arithmetic-button" onClick={() => addOperator('/')}>÷</button>
      <button className="arithmetic-button" onClick={() => addOperator('*')}>×</button>
      <button className="arithmetic-button" onClick={() => addOperator('-')}>-</button>
      <button className="arithmetic-button" onClick={() => addOperator('+')}>+</button>

      {/* Todo: when this button pressed, should evaluate string. */}
      <button className="arithmetic-button" onClick={() => setShowEvaluation(true)}>=</button>
    </div>
  )
}

export default ArithmeticButtons

import './App.css'

function ArithmeticButtons({
  addOperator,
  setShowEvaluation,
}: {
  addOperator: (operator: string) => void;
  setShowEvaluation: (showEvaluation: boolean) => void
}) {

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

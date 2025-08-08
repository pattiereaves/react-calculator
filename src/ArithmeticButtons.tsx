import './App.css'

function ArithmeticButtons({
  addOperator,
  setShowEvaluation,
}: {
  addOperator: (operator: string) => void;
  setShowEvaluation: (showEvaluation: boolean) => void
}) {

  return (
    <>
      <button className="arithmetic-button" onClick={() => addOperator('/')}>÷</button>
      <button className="arithmetic-button" onClick={() => addOperator('*')}>×</button>
      <button className="arithmetic-button" onClick={() => addOperator('-')}>-</button>
      <button className="arithmetic-button" onClick={() => addOperator('+')}>+</button>

      {/* Todo: when this button pressed, should evaluate string. */}
      <button className="arithmetic-button" onClick={() => setShowEvaluation(true)}>=</button>
    </>
  )
}

export default ArithmeticButtons

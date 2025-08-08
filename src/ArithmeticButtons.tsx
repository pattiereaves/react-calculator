import './App.css'

function ArithmeticButtons({
  addOperator
}: {
  addOperator: (operator: string) => void
}) {

  return (
    <>
      <button className="arithmetic-button" onClick={() => addOperator('/')}>÷</button>
      <button className="arithmetic-button" onClick={() => addOperator('*')}>×</button>
      <button className="arithmetic-button" onClick={() => addOperator('-')}>-</button>
      <button className="arithmetic-button" onClick={() => addOperator('+')}>+</button>
      <button className="arithmetic-button">=</button>
    </>
  )
}

export default ArithmeticButtons

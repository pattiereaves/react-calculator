import './App.css'

function Result({ showEvaluation, operation }: { showEvaluation: boolean, operation: (number|string)[] }) {

  return (
    <>
      <div className="operation">
        {operation.map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </div>
      <div className="evaluation">
        {showEvaluation && <span>{eval(operation.join(''))}</span>}
      </div>
    </>
  )
}

export default Result

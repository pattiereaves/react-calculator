import './App.css'

function NumberButtons({
  updateOperation
}: {
  updateOperation: (value: number) => void }
) {

  const NumberButton = ({value, className = 'number-button' }: { value: number, className?: string }) => {
    return (
      <button className={className} onClick={() => updateOperation(value)}>
        {value}
      </button>
    )
  }

  return (
    <>
    <div className="row">
      {[7, 8, 9].map((value) => <NumberButton value={value} />)}
    </div>
    <div className="row">
      {[4, 5, 6].map((value) => <NumberButton value={value} />)}
    </div>
    <div className="row">
      {[1, 2, 3].map((value) => <NumberButton value={value} />)}
    </div>
    <div className="row">
      <NumberButton value={0} className="zero-button" />
      <button className="number-button">.</button>
    </div>
    </>
  )
}

export default NumberButtons

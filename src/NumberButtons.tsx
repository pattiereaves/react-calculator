import './App.css'

function NumberButtons({
  operation,
  setOperation,
}: {
  operation: string[],
  setOperation: (operation: string[]) => void
}) {

  const updateLastValue = (value: number|string) => {
    const operationCopy = [...operation];
    const currentValue = operationCopy.pop() || '';

    if (!isNaN(Number(currentValue))) {
      setOperation([...operationCopy, `${currentValue}${value}`])
      return;
    }

    if (currentValue === '.') {
      setOperation([...operationCopy, `${currentValue}${value}`])
      return;
    }

    // Last value was an operator, so add the new value as the last value
    setOperation([...operation, value.toString()]);
  }


  const NumberButton = ({value, className = 'number-button' }: { value: number, className?: string }) => {
    return (
      <button className={className} onClick={() => updateLastValue(value)}>
        {value}
      </button>
    )
  }

  return (
    <>
    <div className="row">
      {[7, 8, 9].map((value) => <NumberButton value={value} key={`number-button-${value}`} />)}
    </div>
    <div className="row">
      {[4, 5, 6].map((value) => <NumberButton value={value} key={`number-button-${value}`} />)}
    </div>
    <div className="row">
      {[1, 2, 3].map((value) => <NumberButton value={value} key={`number-button-${value}`} />)}
    </div>
    <div className="row">
      <NumberButton value={0} className="zero-button" />
      <button className="number-button" onClick={() => updateLastValue('.')}>.</button>
    </div>
    </>
  )
}

export default NumberButtons

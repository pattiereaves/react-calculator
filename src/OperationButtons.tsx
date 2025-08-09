import { useState } from 'react';
import './App.css'

function OperationButtons({
  operation,
  setOperation,
  setShowEvaluation,
}: {
  operation: string[];
  setOperation: (operation: string[]) => void;
  setShowEvaluation: (showEvaluation: boolean) => void;
}) {
  const [ showAllClear, setShowAllClear ] = useState(false);

  const allClear = () => {
    setOperation([]);
    setShowEvaluation(false);
  }

  const clearLastOperator = () => {
    const operationCopy = [...operation];
    operationCopy.pop();
    setOperation(operationCopy);
  }

  const changeSign = () => {
    const operationCopy = [...operation];
    const currentValue = operationCopy.pop() || '';

    if (!isNaN(Number(currentValue))) {
      const invertedValue = Number(`-${currentValue}`).toString();
      setOperation([...operationCopy, invertedValue]);
      return;
    }

    setOperation([...operationCopy, '-']);
  }

  const percent = () => {
    const operationCopy = [...operation];
    const currentValue = operationCopy.pop() || '';

    if (!isNaN(Number(currentValue))) {
      const percentValue = (Number(currentValue) / 100).toString();
      setOperation([...operationCopy, percentValue]);
      return;
    }

    setOperation([...operationCopy, '%']);
  }

  // @todo this should be updated to show all clear when operators are added back.
  const handleClear = () => {
    setShowAllClear(true);
    clearLastOperator();
  }

  return (
    <div className='operation-buttons'>
      {showAllClear && <button className='operation-button' onClick={allClear}>AC</button>}
      {!showAllClear && <button className='operation-button' onClick={handleClear}>C</button>}
      <button className='operation-button' onClick={changeSign}>+/-</button>
      <button className='operation-button' onClick={percent}>%</button>
    </div>
  )
}

export default OperationButtons

import { useState } from 'react';
import './App.css'

function OperationButtons({
  allClear,
  clearLastOperator,
  changeSign,
  percent,
}: {
  allClear: () => void;
  clearLastOperator: () => void;
  changeSign: () => void;
  percent: () => void;
}) {

  const [ showAllClear, setShowAllClear ] = useState(false);

  // @todo this should be updated to show all clear when operators are added back.
  const handleClear = () => {
    setShowAllClear(true);
    clearLastOperator();
  }

  return (
    <div className='operation-buttons'>
      {showAllClear && <button className='operation-button' onClick={allClear}>AC</button>}
      {!showAllClear && <button className='operation-button' onClick={handleClear}>AC</button>}
      <button className='operation-button' onClick={changeSign}>+/-</button>
      <button className='operation-button' onClick={percent}>%</button>
    </div>
  )
}

export default OperationButtons

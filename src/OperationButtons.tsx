import { useState } from 'react';
import './App.css'

function OperationButtons({
  allClear: clearAll,
  clearLastOperator
}: { allClear: () => void, clearLastOperator: () => void }) {

  const [ showClearAll, setShowClearAll ] = useState(false);

  const handleClear = () => {
    setShowClearAll(true);
    clearLastOperator();
  }

  return (
    <>
      {showClearAll && <button onClick={clearAll}>AC</button>}
      {!showClearAll && <button onClick={handleClear}>AC</button>}
      <button onClick={() => setShowClearAll(true)}>+/-</button>
      <button onClick={() => setShowClearAll(true)}>%</button>
    </>
  )
}

export default OperationButtons

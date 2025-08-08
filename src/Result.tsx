import { useMemo } from "react"

function Result({ showEvaluation, operation }: { showEvaluation: boolean, operation: (number|string)[] }) {

  const calculatedResult: string | null = useMemo(() => {
    if (!showEvaluation) {
      return null;
    }

    try {
      return eval(operation.join(''));
    } catch (error) {
      console.error(error);
      return "Error";
    }

  }, [operation, showEvaluation]);

  return (
    <>
      <div className="operation">
        {operation.map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </div>
      <div className="evaluation">
        {calculatedResult}
      </div>
    </>
  )
}

export default Result

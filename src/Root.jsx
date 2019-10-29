import React, { useState, useEffect, useMemo } from 'react';

let count = 0;
console.log('test');
// update travis.yml
function App() {
  const [num, setNum] = useState(0);
  const result = useCalculate(num);
  // const result = useCalculateWithMemo(num);

  const handleClick = () => {
    console.log('clicked');
    setNum(num + 1);
  };

  const faker = () => {
    console.log('faker');
    setNum(num);
  };

  return (
    <>
      <div>App함수 호출 횟수 : {++count}</div>
      <button onClick={handleClick}>클릭</button>
      <button onClick={faker}>faker</button>
      <h1>{result}</h1>
    </>
  );
}

const useCalculate = numberProp => {
  const [result, setResult] = useState(null);
  console.log('withoutMemo called');

  useEffect(() => {
    setResult(expensiveCalculation(numberProp));
  }, [numberProp]);

  return result;
};

const useCalculateWithMemo = numberProp => {
  console.log('withMemo called');
  return useMemo(() => {
    return expensiveCalculation(numberProp);
  }, [numberProp]);
};

function expensiveCalculation(x) {
  return x + 1;
}

export default App;

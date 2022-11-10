import { useState } from "react";

function useCounterHook(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const handleIncrement = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const handleDecrement = () => {
    setCount((prevValue) => prevValue - 1);
  };
  const handleReset = () => {
    setCount(initialCount);
  };
  const setValue = (parameter) => {
    setCount(parameter);
  };
  return [count, handleIncrement, handleDecrement, handleReset, setValue];
}
export default useCounterHook;

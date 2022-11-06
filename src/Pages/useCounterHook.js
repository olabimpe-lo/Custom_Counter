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
  const inputValue = () => {
    setCount((prevValue) => prevValue + 1);
  };
  return [count, handleIncrement, handleDecrement, handleReset, inputValue];
}
export default useCounterHook;

function useCounterReducer(initialState, action) {
  switch (action.type) {
    case "handleIncrement":
      return { ...initialState, count: initialState.count + 1 };
    case "handleReset":
      return { ...initialState, count: (initialState.count = 0) };
    case "handleDecrement":
      return { ...initialState, count: initialState.count - 1 };
    case "setValue":
      return { ...initialState, count: Number(action.payload.newCount) };
    default:
      return initialState;
  }
}

export default useCounterReducer;

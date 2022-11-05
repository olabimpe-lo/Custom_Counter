import React, { useReducer, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const initialState = 0;
//Custom Hook
function CountReducer(initialState, action) {
  switch (action.type) {
    case "handleIncrement":
      // console.log({ action });
      return initialState + 1;
    case "handleReset":
      return (initialState = 0);
    case "handleDecrement":
      return initialState - 1;
    case "setValue":
      return (initialState = action.payload);
    default:
      return initialState;
  }
}

//useReducer
function UseCounterReducer() {
  const [count, dispatch] = useReducer(CountReducer, initialState);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (count === -1) {
      throw new Error("Something went wrong");
    }
  }, [count]);
  return (
    <>
      <main className="card-main">
        <Helmet>
          <title>Counter App Home Page</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="A counter app with an iplementation of increase, decrease, reset and set value"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div className="card-center">
          <div className="card-body">
            <div className="card-action">
              <div className="card-btn"></div>
              <h2>Count - {count}</h2>
              <button
                className="increment-btn"
                onClick={() => dispatch({ type: "handleIncrement" })}>
                Increment
              </button>
              <button
                className="decrement-btn"
                onClick={() => dispatch({ type: "handleDecrement" })}>
                Decrement
              </button>
              <button
                className="reset-btn"
                onClick={() => dispatch({ type: "handleReset" })}>
                RESET
              </button>

              <div>
                <input
                  onChange={(e) => setValue(e.target.value)}
                  className="input-value"
                  placeholder={"Number"}
                  type={"number"}
                  value={value}
                />
                <button
                  className="set-value"
                  onClick={() =>
                    dispatch({ type: "setValue", payload: parseInt(value) })
                  }>
                  Set
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default UseCounterReducer;

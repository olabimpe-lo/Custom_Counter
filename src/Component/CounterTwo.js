import React, { useReducer, useRef } from "react";
import { Helmet } from "react-helmet";
import useCounterReducer from "../Pages/UseCounterReducer";

const initialState = { count: 0, setCount: 0 };
function CounterTwo() {
  const [count, dispatch] = useReducer(useCounterReducer, initialState);
  const inputRef = useRef();
  console.log(count);

  function setTheCount(ref) {
    console.log(ref);
    dispatch({
      type: "setValue",
      payload: { newCount: ref.current.value },
    });
    ref.currentValue = "";
  }

  return (
    <>
      <main className="card-main">
        <Helmet>
          <title>Counter App One Home Page</title>
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
              <div>Count = {count.count}</div>
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
                  className="input-value"
                  placeholder={"Number"}
                  type={"number"}
                  ref={inputRef}
                  // value={}
                />
                <button
                  className="set-value"
                  onClick={(e) => {
                    setTheCount(inputRef);
                  }}>
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

export default CounterTwo;
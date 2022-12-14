import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import useCounterHook from "../Pages/useCounterHook";

function CounterOne() {
  const [count, handleIncrement, handleDecrement, handleReset, setValue] =
    useCounterHook();

    const [value, newValue] = useState (1)

  return (
    <>
      <main className="card-main">
        <Helmet>
          <title>Counter App One Home Page</title>

          <meta
            name="description"
            content="A counter app with an iplementation of increase, decrease, reset and set value"
          />
        </Helmet>
        <div className="card-center">
          <div className="card-body">
            <div className="card-action">
              <div className="card-btn"></div>
              <div>Count - {count}</div>
              <button className="increment-btn" onClick={handleIncrement}>
                Increment
              </button>
              <button className="decrement-btn" onClick={handleDecrement}>
                Decrement
              </button>
              <button className="reset-btn" onClick={handleReset}>
                RESET
              </button>

              <div>
                <input
                  onChange={(e) => newValue(e.target.value)}
                  className="input-value"
                  placeholder={"Number"}
                  type={"number"}
                  value={value}
              
                />
                <button
                  className="set-value"
                  onClick={() => {
                    setValue( parseInt(value));
                    console.log({value})
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

export default CounterOne;

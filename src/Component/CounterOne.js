import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useCounterHook from "../Pages/useCounterHook";

function CounterOne() {
  const [count, handleIncrement, handleDecrement, handleReset, setValue] =
    useCounterHook(10);

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
              <h2>Count - {count}</h2>
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
                  onChange={(e) => setValue(e.target.value)}
                  className="input-value"
                  placeholder={"Number"}
                  type={"number"}
                  value={count}
                />
                <button
                  className="set-value"
                  onClick={(e) => {
                    payload: parseInt(count);
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

import React, { useState } from "react";
import DisplayComponent from "./component/DisplayComponent";
import BtnDisplay from "./component/BtnDisplay";

function stopApp() {
  const [time, setTime] = useState({ ms: 0, s: 0, h: 0 });
  return (
    <div className="main-page">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnDisplay />
        </div>
      </div>
    </div>
  );
}

export default stopApp;

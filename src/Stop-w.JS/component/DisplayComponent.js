import React from "react";

function DisplayComponent(props) {
  return (
    <div className="main-page">
      <span>{props.time.h}</span>&nbsp;:&nbsp;
      <span>{props.time.m}</span>&nbsp;:&nbsp;
      <span>{props.time.s}</span>&nbsp;:&nbsp;
      <span>{props.time.h}</span>&nbsp;:&nbsp;
    </div>
  );
}

export default DisplayComponent;

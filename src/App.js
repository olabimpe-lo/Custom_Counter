import React from "react";
import { Route, Routes } from "react-router-dom";
import CounterOne from "./Component/CounterOne";
import ErrorBoundary from "./Pages/ErrorBoundary";
import ErrorPage from "./Pages/404Page";
import "./App.css";
import CounterTwo from "./Component/CounterTwo";
// import { Navbar } from "./Component/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* wrapping child component with */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<CounterTwo />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="customhook" element={<CounterOne />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
export default App;

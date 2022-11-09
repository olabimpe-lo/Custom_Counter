import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import CounterOne from "./Component/CounterOne";
import ErrorBoundary from "./Pages/ErrorBoundary";
import ErrorPage from "./Pages/404Page";
import "./App.css";
import CounterTwo from "./Component/CounterTwo";
import Navbar from "./Component/Navbar";
// import { useState } from "react";
 
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* wrapping child component with */}
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<CounterTwo />} />
            <Route path="/custom-hook" element={<CounterOne />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </>
    );
  }
}
export default App;

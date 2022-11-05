import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UseCounterReducer from "./PageOne/UseCounterReducer";
import ErrorPage from "./Component/404Page";
import ErrorBoundary from "./PageTwo/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <>
      {/* wrapping child component with */}
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={<UseCounterReducer action="handleIncrement" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
export default App;

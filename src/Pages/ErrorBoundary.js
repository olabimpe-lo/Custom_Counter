import React, { Component } from "react";
import {Link} from "react-router-dom";
// import useCounterHook from "./useCounterHook";
class ErrorBoundary extends Component {
    state = {
      hasError: false,
    };
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error")
  
}

  render() {
    if (this.state.hasError) {
      //Fallback UI
      return (
      <div className="ErrorBoundarytext">
         <h1>Something went wrong with this listing <Link to="/">Refresh</Link></h1>;
        </div>
      )  
      }
    //without Error render normally
    return this.props.children;
  }
}

export default ErrorBoundary;

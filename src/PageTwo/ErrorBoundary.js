import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      //Fallback UI
      return <h1>Something went wrong </h1>;
    }
    //without Error render normally
    return this.props.children;
  }
}

export default ErrorBoundary;

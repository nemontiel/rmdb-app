import React from "react";
import spider from "../assets/spider.jpg";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          oops, something went wrong
          <img src={spider} />
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

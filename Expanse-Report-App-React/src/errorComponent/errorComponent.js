import React from 'react';

export default class CustomErrorElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // You can also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Error!</h1>
          <p>Something went wrong: {this.state.error.message}</p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
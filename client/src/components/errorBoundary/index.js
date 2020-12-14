/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ErrorFallback from '../errorFallback';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(
      '%c Error Info: ',
      'font-weight: bold; font-size: 20px;',
      error, '\n', errorInfo,
    );
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

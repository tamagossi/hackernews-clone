import React, { Component } from 'react';
import './styles.scss';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    return this.state.hasErrored ? (
      <div>
        Some error happened
      </div>
    ) :
    (
      this.props.children
    )
  }
}

export default ErrorBoundary;
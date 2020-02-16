import React, { Component } from 'react';
import './styles.scss';

import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return this.state.hasErrored ? (
      <div className="error-wrapper">
        <div className="logo" width="192"></div>

        <div className="browser">
          <div className="controls">
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div className="eye"></div>
          <div className="eye"></div>
          <div className="mouth">
            <div className="lips"></div>
            <div className="lips"></div>
            <div className="lips"></div>
            <div className="lips"></div>
            <div className="lips"></div>
            <div className="lips"></div>
            <div className="lips"></div>
            <div className="lips"></div>
          </div>
        </div>

        <h1 className="error-title">Unfortunately, something has gone wrong.</h1>
        <p className="error-paragraph">We`re unable to fulfill your request. Rest assured we have been notified and are looking into the issue. Please refresh your browser. If the error continues, please contact our support team.</p>
      </div>
    ) :
    (
      this.props.children
    )
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ErrorBoundary;

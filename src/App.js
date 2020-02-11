import React from 'react';

import ErrorBoundary from './components/error-boundary'
import Home from './pages/homepage'

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;

import React from 'react';
import ErrorBoundary from './components/error-boundary/'

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        Hallo mate
      </ErrorBoundary>
    </div>
  );
}

export default App;

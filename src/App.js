import React from 'react';

import ErrorBoundary from './components/error-boundary'
import Home from './pages/homepage'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navbar />
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;

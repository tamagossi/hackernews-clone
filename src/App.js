import React, { Suspense } from 'react';

import ErrorBoundary from './components/error-boundary'
import Spinner from './components/spinner';
import routes from './routes';

import { Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/not-found';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Switch>
          <Suspense fallback={<Spinner />}>
            {
              routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })
            }
            <Route component={PageNotFound} />
          </Suspense>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;

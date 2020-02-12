import React from 'react';

const HomePage = React.lazy(() => import('./pages/homepage/'));

const routes = [
  {
    component : HomePage,
    exact: true,
    name: 'Home',
    path: '/',
  },
];

export default routes;

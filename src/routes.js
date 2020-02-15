import React from 'react';

const HomePage = React.lazy(() => import('./pages/homepage/'));
const NewPage = React.lazy(() => import('./pages/newpage/'));

const routes = [
  {
    component : HomePage,
    exact: true,
    name: 'Home',
    path: '/',
  },
  {
    component : NewPage,
    exact: true,
    name: 'Newest',
    path: '/newest',
  },
];

export default routes;

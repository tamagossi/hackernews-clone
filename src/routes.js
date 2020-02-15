import React from 'react';

const AskPage = React.lazy(() => import('./pages/ask/'));
const HomePage = React.lazy(() => import('./pages/homepage/'));
const NewPage = React.lazy(() => import('./pages/newest/'));
const ShowPage = React.lazy(() => import('./pages/show/'));

const routes = [
  {
    component : AskPage,
    exact: true,
    name: 'Ask',
    path: '/ask',
  },
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
  {
    component : ShowPage,
    exact: true,
    name: 'Show',
    path: '/show',
  },
];

export default routes;

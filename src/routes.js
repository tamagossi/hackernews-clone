import React from 'react';

const AskPage = React.lazy(() => import('./pages/ask/'));
const DetailPage = React.lazy(() => import('./pages/detail/'));
const HomePage = React.lazy(() => import('./pages/homepage/'));
const JobPage = React.lazy(() => import('./pages/jobs/'));
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
    component : DetailPage,
    exact: true,
    name: 'Detail',
    path: '/item',
  },
  {
    component : HomePage,
    exact: true,
    name: 'Home',
    path: '/',
  },
  {
    component : JobPage,
    exact: true,
    name: 'Jobs',
    path: '/jobs',
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

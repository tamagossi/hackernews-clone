import logger from 'redux-logger';
import rootReducer from './root.reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const middlewares = [thunk];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;

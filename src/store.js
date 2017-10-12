import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';

export default function configureStore(history) {
  const middleware = applyMiddleware(
    promiseMiddleware(),
    thunk,
    routerMiddleware(history));

  return createStore(reducers, {}, middleware);
}

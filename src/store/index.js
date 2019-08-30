import { applyMiddleware, createStore, compose } from 'redux';
import multi from 'redux-multi';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import tron from '../extra';

const middlewares = [thunk, multi, promise];

const enhancers = compose(
  applyMiddleware(...middlewares),
  tron.createEnhancer(),
);

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(reducers, enhancers)
    : createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;

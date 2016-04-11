import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import apiMiddleware from 'middleware/api';
import DevTools from 'containers/DevTools';
import routes from 'routes';
import reducer from 'reducers/index';
import {finalCreateStore} from 'store';
import immutifyState from 'lib/immutifyState';

const initialState = immutifyState(window.__INITIAL_STATE__);
const store = finalCreateStore(reducer, initialState);
const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('react-view')
);

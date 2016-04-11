import {createStore, applyMiddleware, compose} from 'redux';
import DevTools from  'containers/DevTools';
import api from 'middleware/api';

export const finalCreateStore = compose(
  applyMiddleware(api),
  DevTools.instrument()
)(createStore);

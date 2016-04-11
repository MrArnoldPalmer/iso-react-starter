import fetch from 'isomorphic-fetch';

export const CALL_API = Symbol('Call Api');

export default store => next => async action => {
  const API_ROOT = 'api';
  const callApi = action[CALL_API];

  if(typeof callApi === 'undefined') {
    return next(action);
  }

  let {endpoint} = callApi;
  const {types, method, body} = callApi;
  const [requestType, successType, failureType] = types;
  const headers = {
    'Accept': 'application/json; charset=utf-8'
  };
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? `${API_ROOT}${endpoint}` : endpoint;

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  if(typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if(typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL');
  }

  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types');
  }

  if(!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action tyes to be strings');
  }

  next(actionWith({type: requestType}));

  try {
    let response = await fetch(fullUrl, {
      method,
      body,
      headers
    });
    let payload = await response.json();
    return next(actionWith({
      payload,
      type: successType
    }));
  } catch(error) {
    return next(actionWith({
      error: error.message || 'API Error',
      type: failureType
    }))
  }
}

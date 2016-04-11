import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Root from 'containers/Root';
import App from 'containers/App';

export default (
  <Route name="home" component={Root} path="/">
    <IndexRoute component={App}/>
  </Route>
);

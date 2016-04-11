import express from 'express';
import {match} from 'react-router';
import path from 'path';
import routes from 'routes';
import fetchComponentData from 'lib/fetchComponentData';
import reducer from 'reducers/index';
import {finalCreateStore} from 'store';
import renderView from 'lib/renderView';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('./webpack.dev').default(app);
}

app.use(express.static(path.join(__dirname, 'dist')));
app.use((request, response) => {
  const store = finalCreateStore(reducer);

  match({routes, location: request.url}, async(err, redirectLocation, renderProps) => {
    if(err) {
      console.error(err);
      return response.status(500).end('Internal server error');
    }

    if(!renderProps)
      return response.status(404).end('Not found');

    try {
      await fetchComponentData(store.dispatch, renderProps.components, renderProps.params);
      response.end(renderView(store, renderProps));
    } catch(error) {
      response.end(error.message);
    }
  });
});

export default app;

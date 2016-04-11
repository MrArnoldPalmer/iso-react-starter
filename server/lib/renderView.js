import React from 'react';
import {Provider} from 'react-redux';
import {RouterContext} from  'react-router';
import {renderToString} from 'react-dom/server';

export default function renderView(store, renderProps) {
  const InitialView = (
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );

  const componentHTML = renderToString(InitialView);
  const initialState = store.getState();

  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Qualcomm</title>

      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
    </head>
    <body>
      <div id="react-view"><div>${componentHTML}</div></div>
      <script type="application/javascript" src="/bundle.js"></script>
    </body>
  </html>
  `;

  return HTML;
}

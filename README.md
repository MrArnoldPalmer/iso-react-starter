## Universal React + Redux Project Base
* Built with [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/index.html).
* Server rendering using ReactDom and [Express](http://expressjs.com/) with intial [Redux state](http://redux.js.org/docs/recipes/ServerRendering.html).
* [Immutable JS](https://facebook.github.io/immutable-js/) Redux Store.
* Fetch api on Client/Server using [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

Dev Server
```
$ npm run dev
$ browser http://localhost:3000
```
Dev task includes hot module replacement. Stateless components and styles will be updated in the browser as changed without page refresh. Nodemon currently watches server only files and restarts express on file change.

Build
```
$ npm run build
```

Test
```
$ npm test
```
Re-Run Tests on file changes
```
npm run auto-test
```

Linting
```
$ npm run lint
```

Currently includes all Babel transforms from es2015/react down to stage-0. Pick and choose your desired language features. Async functions used by default in api middleware and server.js. Includes babel-polyfill by default in index.js and client/index.js. Testing run in a node environment using [Tape](https://github.com/substack/tape). Redux DevTools included.

Coming Soon:
* SASS/CSS webpack loaders
* CI
* Detect production ENV and remove Redux DevTools
* Change server server framework from Express to Koa

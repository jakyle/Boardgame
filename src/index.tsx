import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { compose, applyMiddleware, createStore } from 'redux';
import { rootReducer } from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Views/App';

declare global {
  // tslint:disable-next-line:no-any
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(
applyMiddleware(),
);
const store = createStore(rootReducer, enhancer);
const app = (<Provider store={store}><Router><App /></Router></Provider>);

ReactDOM.render( app, document.getElementById('root') as HTMLElement);
registerServiceWorker();

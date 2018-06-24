import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { store } from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Containers/App';

const app = (<Provider store={store}><Router><App /></Router></Provider>);

ReactDOM.render( app, document.getElementById('root') as HTMLElement);
registerServiceWorker();

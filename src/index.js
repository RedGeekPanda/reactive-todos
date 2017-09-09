import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducer from './todosReducer';

const store = process.env.NODE_ENV === `development` ?
	createStore(reducer, applyMiddleware(logger)) :
	createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>,
	document.getElementById('root'));
registerServiceWorker();

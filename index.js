/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'

import MovieListApp from './components/MovieListApp';
import reducers from './reducers';

const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk), window.devToolsExtension ? window.devToolsExtension() : f => f));



ReactDOM.render(
	<Provider store={store}>
    <MovieListApp />
	</Provider>,
  document.getElementById('root')
);

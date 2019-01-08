import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App/App.js';
import rootReducer from '../src/reducers/index.js'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

const wrapper = (
  <Provider store={store}>
    <App />
  </Provider>
)



ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();

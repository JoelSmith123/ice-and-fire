import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App/App.js';
import rootReducer from './reducers/index.js'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const wrapper = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import CheeseList  from './components/cheese-list';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <div>
    <App />
    <CheeseList />
  </div>
  </Provider >,
  document.getElementById('root')
);

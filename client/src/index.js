import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { CheeseList } from './components/cheese-list';
import store from './store';

const threeCheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

ReactDOM.render(
  <Provider store={store}>
  <div>
    <App />
    <CheeseList cheeses={threeCheeses}/>
  </div>
  </Provider >
  ,
  document.getElementById('root')
);

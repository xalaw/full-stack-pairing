import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CheeseList } from './components/cheese-list'

const threeCheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

ReactDOM.render(
  <div>
    <App />
    <CheeseList cheeses={threeCheeses}/>
  </div>,
  document.getElementById('root')
);

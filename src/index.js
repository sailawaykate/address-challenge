import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header'
import reportWebVitals from './reportWebVitals';
import AddressDisplay from "./addressDisplayComponent";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AddressDisplay />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

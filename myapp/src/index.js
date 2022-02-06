import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/pages/home/Home';
import Dashboard from './components/pages/dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

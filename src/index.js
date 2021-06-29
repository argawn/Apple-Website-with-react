import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Assets/css/bootstrap.css';
import './Assets/css/style.css';
import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'    

//import './Assets/js/scripts';
//import './Assets/js/jquery-3.6.0'
//import './Assets/js/bootstrap'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

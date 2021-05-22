import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Lifecycle from './ReactJS/Lifecycle';
import reportWebVitals from './reportWebVitals';
import Crud from './ReactCRUD';

// import Map from './ReactJS/Map';
// import App from './ReactJS/App';
// import Variable from './ReactJS/Variable';
// import StateProps from "./ReactJS/StateProps";

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

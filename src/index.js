import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import './styles.scss'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);



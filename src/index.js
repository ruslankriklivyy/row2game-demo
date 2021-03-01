import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById('root'),
);

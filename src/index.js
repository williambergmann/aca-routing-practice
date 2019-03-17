import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'

const Complete = () => (
  <Fragment>
    <Header />
    <App />
  </Fragment>
)

ReactDOM.render(<Complete />, document.getElementById('root'));

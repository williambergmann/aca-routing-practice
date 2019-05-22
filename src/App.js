import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Tweets from './components/Tweets'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Tweets />
        <Router />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;

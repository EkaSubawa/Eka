import React, { Component } from 'react';
import logo from './saringan.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logoo" alt="sari" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logoo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logoo" alt="logo" />
          <h1 className="App-title">-------------------------</h1>
        </header>
        <p className="App-intro">
          I am spider with many eyes
        </p>
      </div>
    )
  }
}

export default App;

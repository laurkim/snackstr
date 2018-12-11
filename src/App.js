import React, { Component } from 'react';
import './App.css';
import SnackContainer from './components/SnackContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo.png" className="App-logo" alt="logo" />
          <p id="header">
            Yum
          </p>
        </header>
        <SnackContainer />
      </div>
    );
  }
}

export default App;

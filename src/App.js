import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SnackContainer from './components/SnackContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Cronch.
          </p>
        </header>
        <SnackContainer />
      </div>
    );
  }
}

export default App;

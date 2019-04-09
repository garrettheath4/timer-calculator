import React, { Component } from 'react';
import Calculator from './Calculator.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timer Calculator</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;

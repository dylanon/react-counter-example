import React, { Component } from 'react';
import Counter from './Counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter bgColor="firebrick" />
          <Counter bgColor="darkcyan" />
          <Counter bgColor="dodgerblue" />
        </header>
      </div>
    );
  }
}

export default App;

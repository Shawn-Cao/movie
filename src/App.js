import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movie';

class App extends Component {
  render() { //TODO: clear up here
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Movies width={900} height={500}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

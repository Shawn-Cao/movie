import React, { Component } from 'react';
import './App.css';
import Movies from './Movie';

class App extends Component {
  render() { //TODO: clear up here
    return (
      <div className="App">
        <h1 className="heading-movies">{'POPULAR MOVIES'}</h1>
        <Movies width={850} height={600}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

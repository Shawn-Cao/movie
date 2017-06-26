import React, { Component } from 'react';
import './App.css';
import Movies from './Movie';

class App extends Component {
  render() { //TODO: clear up here
    return (
      <div className="App">
        <h1 className="heading-movies">
          POPULAR
        </h1>
        <div style={{position: 'relative', left: '100px'}}>
          <Movies width={1000} height={600}/>
        </div>
        <p>
          Demo of modular Movie component on any arbitrary app. API: width/height - override movie component default size
        </p>
      </div>
    );
  }
}

export default App;

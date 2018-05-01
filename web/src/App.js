import React, { Component } from 'react';

import Signups from './components/Signups';
import SampleRequests from './components/SampleRequests';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASI Metrics</h1>
        </header>
        <div className="App-container">
          <Signups />
          <SampleRequests />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Signups from './components/Signups';
import SampleRequests from './components/SampleRequests';
import Revenue from './components/Revenue';
import Chats from "./components/Chats";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(Date.now())
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ASI Metrics for {this.state.date.toLocaleString("en-us", {month: "long"})}</h1>
          </header>
          <div className="App-container">
            <Signups date={this.state.date}/>
            <SampleRequests date={this.state.date}/>
            <Revenue date={this.state.date} />
            <Chats date={this.state.date} />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;

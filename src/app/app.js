import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import Bob from './components/bob'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to Jargonaut</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Bob />
      </div>
    );
  }
}

export default App;
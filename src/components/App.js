import React from 'react';
import logo from './logo.svg';
import '../css/app.css';
import base from '../base';
import { Button } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    tip: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.tipId}`, {
      context: this,
      state: 'tip'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  createTip = () => {
    alert('clicked');
    const tipState = {
      tip: {
        tip1: {
          name: "Keep your code DRY",
          desc: "Don't Repeat Yourself"
        },
        tip2: {
          name: "another tip",
          desc: "just the tip"
        }
      }
    };
    this.setState({tip: tipState});
  };

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
        <Button onClick={this.createTip}>Create & Save</Button>
      </div>
    );
  }
}

export default App;

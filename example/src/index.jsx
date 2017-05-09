import React, { Component } from 'react';
import { render } from 'react-dom';
import setStateAsync from '../../lib/set-state-async';

@setStateAsync()
class App extends Component {
  state = {
    number: 1
  };

  async addNumber() {
    alert(`before setStateAsync: ${this.state.number}`);
    await this.setStateAsync({ number: this.state.number + 1 });
    alert(`after setStateAsync: ${this.state.number}`);
  }

  render() {
    return (
      <div>
        <p>number: {this.state.number}</p>
        <button onClick={this.addNumber.bind(this)}>Click</button>
      </div>
    );
  }
}

const element = document.createElement('div');
document.body.appendChild(element);
render(<App />, element);

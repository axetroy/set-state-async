# set-state-async

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/setStateAsync.svg)](https://greenkeeper.io/)

react component decorator for implement setStateAsync method which set state and return Promise

## Install

```bash
yarn add @axetroy/set-state-async
```

## Usage

```jsx harmony
import React, { Component } from 'react';
import { render } from 'react-dom';
import setStateAsync from '@axetroy/set-state-async';

@setStateAsync()  // implement this.setStateAsync method for this component
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

```
    
## Run the Demo

```bash
git clone https://github.com/axetroy/set-state-async.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/set-state-async/blob/master/LICENSE)
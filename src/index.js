import React, { Component } from 'react';
import { render } from 'react-dom';

import Box from './components/Box';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boxClass: "blue-box"
    };
  }

  render () {
    return
    (
      <main>
        <Box boxClass = {this.boxClass} />
      </main>
    )
  }
}

render (
  <App />,
  document.getElementById('container')
)

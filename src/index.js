import React, { Component } from 'react';
import { render } from 'react-dom';

import Box from './components/Box';

const boxArray = [ Box, Box, Box, Box, Box ]
const boxes = boxArray.map((box, index) =>
    <Box key={index} />
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {boxClass: 'box blue-box'};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeColor(),
      3000
    );
  }

  changeColor() {
    if (this.state.boxClass == 'box blue-box'){
      this.setState({
        boxClass: 'box red-box'
      });
    } else {
      this.setState({
        boxClass: 'box blue-box'
      });
    }
  }

  render() {
    return (
      <Box boxClass={this.state.boxClass}/>
    );
  }
}

render(
 <App />,
 document.getElementById('container')
)

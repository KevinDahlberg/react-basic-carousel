import React, { Component } from 'react';
import { render } from 'react-dom';

import BoxGroup from './components/BoxGroup';

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
      <BoxGroup boxClass={this.state.boxClass}/>
    );
  }
}

render(
 <App />,
 document.getElementById('container')
)

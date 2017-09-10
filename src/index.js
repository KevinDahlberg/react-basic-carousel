import React, { Component } from 'react';
import { render } from 'react-dom';

// import Box from './components/Box';
class Box extends Component {

  render() {
    const { boxClass } = this.props;

    return (
      <div className = { boxClass }></div>
    )

  }
}

// import BoxGroup from './components/Box';

class BoxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {boxClass: 'box blue-box'};
  }

  renderBox() {
    return (
      <Box boxClass = {this.props.boxClass} />
    )
  }

  render() {
    const numOfBoxes = [1, 2, 3, 4];

    return (
      <renderBox />
    )
  }
}

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
<div>
 <App />
 <App />
 <BoxGroup />
</div>,
 document.getElementById('container')
)

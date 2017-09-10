import React, { Component } from 'react'

import Box from '../components/Box'

export default class BoxGroup extends Component {

  renderBox() {
    return (
      <Box boxClass = {this.props.boxClass} />
    )
  }

  render() {
    const numOfBoxes = [1, 2, 3, 4];

    return (
      <div>
        {numOfBoxes.map((boxes, index) =>
          <div key={index}>
            {this.renderBox}
          </div>
        )}
      </div>
    );
  }
}

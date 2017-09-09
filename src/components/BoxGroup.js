import React, { Component } from 'react'

import Box from '../components/Box'

export default class BoxGroup extends Component {

  renderBox() {
    return (
      <Box boxClass = {this.props.boxClass} />
    )
  }

  render() {
    const numOfBoxes = 6;

    return (
      <div>
        {row.map((numOfBoxes, index) =>
          <div key={index}>
            {this.renderBox}
          </div>
        )}
      </div>
    );
  }
}

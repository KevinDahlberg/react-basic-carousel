import React, { Component } from 'react';

export default class Box extends Component {

  state = {
    boxClass: 'box blue-box'
  }

  render() {
    const { boxClass } = this.props;

    return (
      <div className = { boxClass }></div>
    )

  }
}

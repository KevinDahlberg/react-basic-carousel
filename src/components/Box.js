import React, { Component } from 'react';

export default class Box extends Component {

  render() {
    const { boxClass } = this.props;

    return (
      <div className = { boxClass }></div>
    )

  }
}

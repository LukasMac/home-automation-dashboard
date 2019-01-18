import React, { Component } from 'react';

export default class LightsOnAndOff extends Component {
  render() {
    const { onLightsOn, onLightsOff } = this.props;
    return(
      <div>
        <button onClick={onLightsOn}>All lights ON</button>
        <button onClick={onLightsOff}>All lights OFF</button>
      </div>
      );
  }
}

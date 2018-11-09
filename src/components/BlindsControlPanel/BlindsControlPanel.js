import './BlindsControlPanel.scss';
import PropTypes from 'prop-types';
import React from 'react';

export default class BlindsControlPanel extends React.Component {
  static propTypes = {
    onOpenBlinds: PropTypes.func.isRequired,
  };

  render() {
    const { onOpenBlinds } = this.props;

    return (
      <div>
        <h1>Window Blinds Control Panel</h1>
        <button onClick={onOpenBlinds}>Open Blinds</button>
        <button onClick={onOpenBlinds}>Close Blinds Up</button>
      </div>
      );
  }
}


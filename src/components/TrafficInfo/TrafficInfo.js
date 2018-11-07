import PropTypes from 'prop-types';
import React from 'react';

export default class TrafficInfo extends React.Component {
  render() {
    const { onClick, onSendRequest, cnt } = this.props;

    return (
      <div>
        <button onClick={onClick}>Increase cnt: {cnt}</button>
        <button onClick={onSendRequest}>Send request</button>
      </div>
      );
  }
}

TrafficInfo.propTypes = {
  cnt: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onSendRequest: PropTypes.func.isRequired,
};

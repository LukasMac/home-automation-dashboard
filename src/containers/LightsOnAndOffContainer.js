import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { lightsOn, lightsOff } from '../actions/lightsActions';
import LightsOnAndOff from '../components/LightsOnAndOff/LightsOnAndOff';

export class LightsOnAndOffContainer extends Component {
  render() {
    return (
      <LightsOnAndOff {...this.props} />
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      onLightsOn: lightsOn,
      onLightsOff: lightsOff,
    },
    dispatch
  );

export default connect(
  '',
  mapDispatchToProps,
)(LightsOnAndOffContainer);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openBlinds, closeBlindsUpwards, closeBlindsDownwards, moveBlindsUp, moveBlindsDown } from '../actions/blindsControlPanelActions';
import BlindsControlPanel from '../components/BlindsControlPanel/BlindsControlPanel';

export class BlindsControlPanelContainer extends Component {
  render() {
    return (
      <BlindsControlPanel {...this.props}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { windows: state.blindsControlPanelReducer };
};

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      onOpenBlinds: openBlinds,
      onCloseBlindsUpwards: closeBlindsUpwards,
      onCloseBlindsDownwards: closeBlindsDownwards,
      onMoveBlindsUp: moveBlindsUp,
      onMoveBlindsDown: moveBlindsDown,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlindsControlPanelContainer);

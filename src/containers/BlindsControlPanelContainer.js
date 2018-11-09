import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openBlinds } from '../actions/blindsControlPanelActions';
import BlindsControlPanel from '../components/BlindsControlPanel/BlindsControlPanel';

export class BlindsControlPanelContainer extends Component {
  render() {
    return (
      <BlindsControlPanel {...this.props}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.blindsControlPanel;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onOpenBlinds: openBlinds,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlindsControlPanelContainer);

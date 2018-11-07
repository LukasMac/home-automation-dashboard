import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { click } from '../actions/trafficInfoActions';
import TrafficInfo from '../components/TrafficInfo/TrafficInfo';

export class TrafficInfoContainer extends Component {
  render() {
    return (
      <TrafficInfo {...this.props}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.trafficInfoReducer;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onClick: click,
      onSendRequest: click,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrafficInfoContainer);

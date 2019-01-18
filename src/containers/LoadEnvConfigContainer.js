import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadEnvConfig } from '../actions/loadEnvConfigActions';
import LoadEnvConfig from '../components/LoadEnvConfig/LoadEnvConfig';

export class  LoadEnvConfigContainer extends Component {
  render() {
    return(<LoadEnvConfig {...this.props} />);
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 'status': state.loadEnvConfigReducer };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onLoadEnvConfig: loadEnvConfig,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadEnvConfigContainer);

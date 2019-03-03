import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ipChange,
  speedUpwardsChange,
  speedDownwardsChange,
  delayToOpenChange,
  delayToCloseChange,
  openBlinds,
  closeBlindsUpwards,
  closeBlindsDownwards,
  moveBlindsUp,
  moveBlindsDown
} from "../actions/blindsControlPanelActions";
import BlindsConfigPanel from "../components/BlindsControlPanel/BlindsConfigPanel";

export class BlindsConfigPanelContainer extends Component {
  render() {
    return <BlindsConfigPanel {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { windows: state.blindsControlPanelReducer };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onipChange: ipChange,
      onspeedupwardsChange: speedUpwardsChange,
      onspeeddownwardsChange: speedDownwardsChange,
      ondelaytoopenChange: delayToOpenChange,
      ondelaytocloseChange: delayToCloseChange,
      onOpenBlinds: openBlinds,
      onCloseBlindsUpwards: closeBlindsUpwards,
      onCloseBlindsDownwards: closeBlindsDownwards,
      onMoveBlindsUp: moveBlindsUp,
      onMoveBlindsDown: moveBlindsDown
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlindsConfigPanelContainer);

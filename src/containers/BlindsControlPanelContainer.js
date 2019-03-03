import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  openBlinds,
  closeBlindsUpwards,
  closeBlindsDownwards,
  moveBlindsUp,
  moveBlindsDown
} from "../actions/blindsControlPanelActions";
import BlindsControlPanel from "../components/BlindsControlPanel/BlindsControlPanel";
import BlindsControlPanelMobileView from "../components/BlindsControlPanel/BlindsControlPanelMobileView";

export class BlindsControlPanelContainer extends Component {
  render() {
    if (this.props.mobileView) {
      return <BlindsControlPanelMobileView {...this.props} />;
    } else {
      return <BlindsControlPanel {...this.props} />;
    }
  }
}

const mapStateToProps = state => {
  return { windows: state.blindsControlPanelReducer };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onOpenBlinds: openBlinds,
      onCloseBlindsUpwards: closeBlindsUpwards,
      onCloseBlindsDownwards: closeBlindsDownwards,
      onMoveBlindsUp: moveBlindsUp,
      onMoveBlindsDown: moveBlindsDown
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlindsControlPanelContainer);

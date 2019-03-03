import "./BlindsControlPanel.scss";
import PropTypes from "prop-types";
import React from "react";

export default class BlindsControlPanelMobileView extends React.Component {
  static propTypes = {
    onOpenBlinds: PropTypes.func.isRequired,
    onCloseBlindsDownwards: PropTypes.func.isRequired,
    onCloseBlindsUpwards: PropTypes.func.isRequired
  };

  getWindowsData() {
    return this.props.windows;
  }

  render() {
    const {
      onOpenBlinds,
      onCloseBlindsUpwards,
      onCloseBlindsDownwards
    } = this.props;

    return (
      <div>
        <div>
          <button onClick={() => onOpenBlinds(this.getWindowsData())}>
            Open All Blinds
          </button>
          <button onClick={() => onCloseBlindsUpwards(this.getWindowsData())}>
            Close All Blinds Up
          </button>
          <button onClick={() => onCloseBlindsDownwards(this.getWindowsData())}>
            Close All Blinds Down
          </button>
        </div>
      </div>
    );
  }
}

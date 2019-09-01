import "./BlindsControlPanel.scss";
import PropTypes from "prop-types";
import React from "react";

export default class BlindsControlPanelMobileView extends React.Component {
  static propTypes = {
    operateBlinds: PropTypes.func.isRequired,
  };

  render() {
    const {
      operateBlinds,
    } = this.props;

    return (
      <div>
        <div>
          <button onClick={() => operateBlinds('open')}>
            Open All Blinds
          </button>
          <button onClick={() => operateBlinds('close_upwards')}>
            Close All Blinds Up
          </button>
          <button onClick={() => operateBlinds('close_downwards')}>
            Close All Blinds Down
          </button>
        </div>
      </div>
    );
  }
}

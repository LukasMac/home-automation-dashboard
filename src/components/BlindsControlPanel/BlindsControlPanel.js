import "./BlindsControlPanel.scss";
import PropTypes from "prop-types";
import React from "react";

export default class BlindsControlPanel extends React.Component {
  static propTypes = {
    operateBlinds: PropTypes.func.isRequired
  };

  state = { selectedWindow: "all" };

  handleWindowClick(e, index) {
    this.setState({ selectedWindow: index });
  }

  getWindowIndex() {
    const index = this.state.selectedWindow;
    return (index === "all") ? '' : (Number(index) + 1);
  }

  renderWindowControl(index) {
    const isSelected = index === this.state.selectedWindow;
    const isSelectedClassName = isSelected ? "selected" : "";
    const indexString = index === "all" ? index : parseInt(index) + 1;

    return (
      <div className="single-window-select" key={index}>
        <button
          className={isSelectedClassName}
          onClick={e => this.handleWindowClick(e, index)}
        >
          Window #{indexString}
        </button>
      </div>
    );
  }

  render() {
    const {
      operateBlinds,
      windows = {}
    } = this.props;

    return (
      <div>
        <h1>Window Blinds Control Panel</h1>
        <div>
          <h3>1. Select window</h3>
          {[...Object.keys(windows), "all"].map(
            this.renderWindowControl.bind(this)
          )}
        </div>
        <div>
          <h3>2. Choose an action</h3>
          <button onClick={() => operateBlinds('open', this.getWindowIndex())}>
            Open Blinds
          </button>
          <button onClick={() => operateBlinds('close_upwards', this.getWindowIndex())}>
            Close Blinds Up
          </button>
          <button onClick={() => operateBlinds('close_downwards', this.getWindowIndex())}>
            Close Blinds Down
          </button>
          <button onClick={() => operateBlinds('move_up', this.getWindowIndex())}>
            Move Up
          </button>
          <button onClick={() => operateBlinds('move_down', this.getWindowIndex())}>
            Move Down
          </button>
        </div>
      </div>
    );
  }
}

import "./BlindsControlPanel.scss";
import PropTypes from "prop-types";
import React from "react";

export default class BlindsControlPanel extends React.Component {
  static propTypes = {
    onOpenBlinds: PropTypes.func.isRequired
  };

  state = { selectedWindow: "all" };

  handleWindowClick(e, index) {
    this.setState({ selectedWindow: index });
  }

  getWindowsData() {
    const index = this.state.selectedWindow;
    if (index === "all") {
      return this.props.windows;
    }

    return { [index]: this.props.windows[index] };
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
      onOpenBlinds,
      onCloseBlindsUpwards,
      onCloseBlindsDownwards,
      onMoveBlindsUp,
      onMoveBlindsDown,
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
          <button onClick={() => onOpenBlinds(this.getWindowsData())}>
            Open Blinds
          </button>
          <button onClick={() => onCloseBlindsUpwards(this.getWindowsData())}>
            Close Blinds Up
          </button>
          <button onClick={() => onCloseBlindsDownwards(this.getWindowsData())}>
            Close Blinds Down
          </button>
          <button onClick={() => onMoveBlindsUp(this.getWindowsData())}>
            Move Up
          </button>
          <button onClick={() => onMoveBlindsDown(this.getWindowsData())}>
            Move Down
          </button>
        </div>
      </div>
    );
  }
}

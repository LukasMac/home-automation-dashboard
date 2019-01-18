import './BlindsControlPanel.scss';
import PropTypes from 'prop-types';
import React from 'react';

export default class BlindsControlPanel extends React.Component {
  static propTypes = {
    onOpenBlinds: PropTypes.func.isRequired,
  };

  handleChange(e, index) {
    this.props['on' + e.target.name.toLowerCase() + 'Change'](e.target.value, index);
  }

  renderWindowControl(index) {
    const { onOpenBlinds, onCloseBlindsUpwards, onCloseBlindsDownwards, onMoveBlindsUp, onMoveBlindsDown, windows = {} } = this.props;

    const data = { [index]: windows[index] }

    return (
      <div className="single-window-controls" key={index}>
        <h3>{parseInt(index) + 1}</h3>
        <div>
          IP: <input name="ip" defaultValue={windows[index].ip} onChange={(e) => this.handleChange(e, index)} />
        </div>
        <div>
          Speed upwards: <input name="speedupwards" defaultValue={windows[index].speedUpwards} onChange={(e) => this.handleChange(e, index)} />
        </div>
        <div>
          Speed downwards: <input name="speeddownwards" defaultValue={windows[index].speedDownwards} onChange={(e) => this.handleChange(e, index)} />
        </div>
        <div>
          Delay to open: <input name="delaytoopen" defaultValue={windows[index].delayToOpen} onChange={(e) => this.handleChange(e, index)}/>
        </div>
        <div>
          Delay to close: <input name="delaytoclose" defaultValue={windows[index].delayToClose} onChange={(e) => this.handleChange(e, index)}/>
        </div>
        <div>
          <button onClick={() => onOpenBlinds(data)}>Open Blinds</button>
          <button onClick={() => onCloseBlindsUpwards(data)}>Close Blinds Up</button>
          <button onClick={() => onCloseBlindsDownwards(data)}>Close Blinds Down</button>
          <button onClick={() => onMoveBlindsUp(data)}>Move Up</button>
          <button onClick={() => onMoveBlindsDown(data)}>Move Down</button>
        </div>
      </div>
      );
  }
  render() {
    const { onIPchange, onOpenBlinds, onCloseBlindsUpwards, onCloseBlindsDownwards, onMoveBlindsUp, onMoveBlindsDown, windows = {} } = this.props;

    return (
      <div>
        <div>
          <h1>Window Blinds Control Panel</h1>
          <button onClick={() => onOpenBlinds(windows)}>Open Blinds</button>
          <button onClick={() => onCloseBlindsUpwards(windows)}>Close Blinds Up</button>
          <button onClick={() => onCloseBlindsDownwards(windows)}>Close Blinds Down</button>
          <button onClick={() => onMoveBlindsUp(windows)}>Move Up</button>
          <button onClick={() => onMoveBlindsDown(windows)}>Move Down</button>
        </div>
        <div>

          {Object.keys(windows).map(this.renderWindowControl.bind(this))}
        </div>
      </div>
      );
  }
}


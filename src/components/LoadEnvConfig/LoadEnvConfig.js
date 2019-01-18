require('./LoadEnvConfig.scss');
import React, { Component } from 'react';

export default class LoadEnvConfig extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.handleLoadButtonClick = this.handleLoadButtonClick.bind(this);
  }

  handleLoadButtonClick() {
    this.props.onLoadEnvConfig(this.textInput.current.value);
  }
  render() {
    return(
      <div>
        <div>Status: {this.props.status}</div>
        <input type="text" ref={this.textInput} />
        <button onClick={this.handleLoadButtonClick}>Load</button>
      </div>
      );
  }
}

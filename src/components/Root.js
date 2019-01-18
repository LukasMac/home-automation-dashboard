import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import BlindsControlPanelContainer from "../containers/BlindsControlPanelContainer";
import NotFoundPage from "./NotFoundPage";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={BlindsControlPanelContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);

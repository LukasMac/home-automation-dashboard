/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import BlindsConfigPanelContainer from "../containers/BlindsConfigPanelContainer";
import TrafficInfoContainer from "../containers/TrafficInfoContainer";
import LoadEnvConfigContainer from "../containers/LoadEnvConfigContainer";
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
          <Route exact path="/" component={MainDashboard} />
          <Route exact path="/load-env-config" component={LoadEnvConfigContainer} />
          <Route exact path="/blinds-config" component={BlindsConfigPanelContainer} />
          <Route exact path="/traffic-from-luma" component={TrafficInfoContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);

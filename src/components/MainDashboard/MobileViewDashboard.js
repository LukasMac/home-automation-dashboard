/* eslint-disable import/no-named-as-default */
import React from "react";
import { Link } from "react-router-dom";
import BlindsControlPanelContainer from "../../containers/BlindsControlPanelContainer";
import TrafficInfoContainer from "../../containers/TrafficInfoContainer";
import LightsOnAndOffContainer from "../../containers/LightsOnAndOffContainer";

export default class MobileViewDashboard extends React.Component {
  render() {
    return (
      <div className="mobile">
        <BlindsControlPanelContainer mobileView />
        <LightsOnAndOffContainer />
        <TrafficInfoContainer />
        <Link to="/load-env-config">Load ENV config</Link>
        <Link to="/blinds-config">Blinds config</Link>
        <Link to="/traffic-from-luma">Traffic from Luma</Link>
      </div>
    );
  }
}

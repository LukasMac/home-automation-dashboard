import React from 'react';
import { Link } from "react-router-dom";
import BlindsControlPanelContainer from "../../containers/BlindsControlPanelContainer";
import TrafficInfoContainer from "../../containers/TrafficInfoContainer";
import LightsOnAndOffContainer from "../../containers/LightsOnAndOffContainer";

export default class MainDashboard extends React.Component {
  render() {
    return (
      <div>
        <BlindsControlPanelContainer />
        <TrafficInfoContainer />
        <LightsOnAndOffContainer />
        <Link to="/load-env-config">Load ENV config</Link>
        <Link to="/traffic-from-luma">Traffic from Luma</Link>
      </div>
    );
  }
}

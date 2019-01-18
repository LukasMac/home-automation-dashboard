import React from 'react';
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
        <a href="/load-env-config">Load ENV config</a>
        <a href="/blinds-config">Blinds config</a>
        <a href="/traffic-from-luma">Traffic from Luma</a>
      </div>
      );
  }
}

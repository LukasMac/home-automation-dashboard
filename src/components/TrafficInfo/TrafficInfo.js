import "./TrafficInfo.scss";
import PropTypes from "prop-types";
import React from "react";
import Moment from "moment";

export default class TrafficInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentTime: "" };
    this.props.onRefresh();
    setInterval(this.ticker.bind(this), 1000);
  }

  ticker() {
    const shouldRefresh = Moment().second() % 30 === 0;
    if (shouldRefresh) {
      this.props.onRefresh();
    }

    this.setState({ currentTime: Moment().format("HH:mm:ss") });
  }

  buses() {
    let { Buses: buses = [] } = this.props;

    buses = buses.filter(bus => bus.JourneyDirection === 2);

    if (buses.length === 0) {
      return <div className="elipsis">No Busses in next 20mins</div>;
    }

    const nextTwoDeparturesInMinutes = buses
      .sort((a, b) => {
        Moment(a.ExpectedDateTime).unix() > Moment(b.ExpectedDateTime).unix();
      })
      .slice(0, 2)
      .map(buss => {
        const diffInMinutes = Moment(buss.ExpectedDateTime).diff(
          Moment(),
          "minutes"
        );
        if (diffInMinutes <= 0) {
          return "Nu";
        }

        return diffInMinutes;
      })
      .join(",\u00A0");

    const buss = buses[0];
    return (
      <div className="flex">
        <div className="direction elipsis">
          {buss.LineNumber} {buss.Destination}
        </div>
        <div className="nextDeparture elipsis">
          {nextTwoDeparturesInMinutes}
        </div>
      </div>
    );
  }

  trams() {
    let { Trams: trams = [] } = this.props;

    trams = trams.filter(tram => tram.JourneyDirection === 1);

    if (trams.length === 0) {
      return <div className="elipsis">No Trams in next 20mins</div>;
    }

    const nextTwoDeparturesInMinutes = trams
      .sort((a, b) => {
        Moment(a.ExpectedDateTime).unix() > Moment(b.ExpectedDateTime).unix();
      })
      .filter(tram => tram.JourneyDirection === 1)
      .slice(0, 2)
      .map(tram => {
        const diffInMinutes = Moment(tram.ExpectedDateTime).diff(
          Moment(),
          "minutes"
        );
        if (diffInMinutes <= 0) {
          return "Nu";
        }

        return diffInMinutes;
      })
      .join(",\u00A0");

    const tram = trams[0];
    return (
      <div className="flex">
        <div className="direction elipsis">
          {tram.LineNumber} {tram.Destination}
        </div>
        <div className="nextDeparture elipsis">
          {nextTwoDeparturesInMinutes}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="time">{this.state.currentTime}</div>
        <div>{this.trams()}</div>
        <div>{this.buses()}</div>
      </div>
    );
  }
}

TrafficInfo.propTypes = {
  onRefresh: PropTypes.func.isRequired
};

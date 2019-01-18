import './TrafficInfo.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'moment';

export default class TrafficInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentTime: '' };
    this.props.onRefresh();
    setInterval(this.ticker.bind(this), 1000);
  }

  ticker() {
    this.setState({ currentTime: Moment().format('HH:mm:ss') });
  }

  buses() {
    let { Buses: buses = [] } = this.props;

    buses = buses.filter(bus => bus.JourneyDirection === 2)

    if (buses.length === 0) {
      return <div>No Busses in upcoming 20mins</div>;
    }

    return buses
      .map( bus => {
        return (
          <div key={bus.JourneyNumber}>{bus.TransportMode} {bus.LineNumber} to {bus.Destination} {Moment(bus.ExpectedDateTime).fromNow()} ({Moment(bus.ExpectedDateTime).format('HH:mm:ss')})</div>
          );
      });
  }

  trams() {
    let{ Trams: trams = [] } = this.props;

    trams = trams.filter(tram =>tram.JourneyDirection === 1)

    if (trams.length === 0) {
      return <div>No Trams in upcoming 20mins</div>;
    }

    return trams
      // .filter(bus => bus.JourneyDirection === 1)
      .map( tram => {
        return (
          <div key={tram.JourneyNumber}>{tram.TransportMode} to {tram.Destination} {Moment(tram.ExpectedDateTime).fromNow()} ({Moment(tram.ExpectedDateTime).format('HH:mm:ss')})</div>
          );
      });
  }

  render() {
    const { onRefresh } = this.props;


    return (
      <div className="wrapper">
        <h2>Traffic from Luma</h2>
        <h3>Current time: {this.state.currentTime}</h3>
        <h3>Buses:</h3>
        {this.buses()}
        <br />
        <h3>Trams:</h3>
        {this.trams()}
        <button onClick={onRefresh}>Refresh (last update: {Moment(this.props.LatestUpdate).fromNow()})</button>
      </div>
      );
  }
}

TrafficInfo.propTypes = {
  onRefresh: PropTypes.func.isRequired,
};

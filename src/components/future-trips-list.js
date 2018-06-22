import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderTrip } from '../actions/trips-list'

class FutureTripsList extends Component {

  renderFutureTrip(id){
    this.props.dispatch(renderTrip(id))
  }

  render() {
      const futureTrips = this.props.upcomingTrips.map(trip => {
        const { id, name } = trip

        return (
          <li>
            <button key={id} onClick={() => this.renderFutureTrip(id)}>{name}</button>
          </li>
        );
      });
  return (
      <ul>
        {futureTrips}
      </ul>
  )};
}

const mapStateToProps = state => {
    return {
      upcomingTrips: state.trip.upcomingTrips,
    };
};

export default (connect(mapStateToProps)(FutureTripsList));

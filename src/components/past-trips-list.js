import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderTrip } from '../actions/trips-list'

class PastTripsList extends Component {

  renderPastTrip(id){
    this.props.dispatch(renderTrip(id))
  }

  render() {
      const pastTrips = this.props.previousTrips.map(trip => {
        const { id, name } = trip

        return (
          <li>
            <button key={id} onClick={() => this.renderPastTrip(id)}>{name}</button>
          </li>
        );
      });
  return (
      <ul>
        {pastTrips}
      </ul>
  )};
}

const mapStateToProps = state => {
    return {
      previousTrips: state.trip.previousTrips
    };
};

export default (connect(mapStateToProps)(PastTripsList));

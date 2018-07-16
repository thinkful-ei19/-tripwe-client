import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderTrip } from '../actions/trips-list'

class FutureTripsList extends Component {

    renderFutureTrip(id) {
        this.props.dispatch(renderTrip(id))
    }

    render() {
        let futureTrips

        {this.props.upcomingTrips ?
        this.props.upcomingTrips.map(trip => {
            const { id, name } = trip;

            return futureTrips = (
                <li key={id}>
                    <button className="d-nav__subList--button" onClick={() => this.renderFutureTrip(id)}>{name}</button>
                </li>
            );
        }) :
          futureTrips = 'No Future trips'
        }

        return (
              <ul className="d-nav__subList">
                  {futureTrips}
              </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        upcomingTrips: state.trip.upcomingTrips,
    };
};

export default (connect(mapStateToProps)(FutureTripsList));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FutureTripsList from './future-trips-list';
import PastTripsList from './past-trips-list';
import LogOut from './logout';
import logo from '../styles/assets/tripwe-logo-dashboard.svg';
import { createNewTripInit, cancelNewTripInit } from '../actions/create-new-trip';
import { showFutureTrips, showPastTrips } from '../actions/trips-list'

class DashboardNavigation extends Component {
    handleAddNew() {
        this.props.dispatch(createNewTripInit());
    }

    handleSeeClosestTrip() {
        this.props.dispatch(cancelNewTripInit());
    }

    handleFutureList(){
      this.props.dispatch(showFutureTrips())
    }

    handlePastList(){
      this.props.dispatch(showPastTrips())
    }

    render() {
        return (
            <div className="d-nav">
                <div className="d-nav__top">
                    <img className="d-nav__logo" src={logo} alt="tripWe logo" />
                    <LogOut className="d-nav__logout" />
                </div>
                <nav>
                    <ul className="d-nav__list">
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button" onClick={this.handleSeeClosestTrip.bind(this)}>Trip</button>
                        </li>
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button" onClick={() => this.handleFutureList()}>Future Trips</button>
                            {this.props.futureTripsList ?
                            <FutureTripsList/>
                            : null }
                        </li>
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button" onClick={() => this.handlePastList()}>Previous Trips</button>
                            {this.props.pastTripsList ?
                            <PastTripsList/>
                            : null }
                        </li>
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button" onClick={this.handleAddNew.bind(this)}>Add New</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      upcomingTrips: state.trip.upcomingTrips,
      previousTrips: state.trip.previousTrips,
      futureTripsList: state.futureTrip.futureTripsList,
      pastTripsList: state.futureTrip.pastTripsList
    };
};
export default (connect(mapStateToProps)(DashboardNavigation));


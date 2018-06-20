import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchTripData } from '../actions/trip';

import { MAPS_API_KEY } from '../config';

import Group from './group';
import DashboardHeader from './dashboard-header';
import DashboardMap from './dashboard-map';
import Description from './description';
import Accommodations from './accommodations';
import Plans from './plans';

// import CreateNewTripForm from './create-new-trip-form';
// import BuildGroupForm from './build-group-form';
// import FlightDetailsForm from './flight-details-form';
// import CreateNewAccommodationsForm from './create-new-accommodations-form';
// import CreateNewBudgetForm from './create-new-budget-form';

class DashboardContent extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTripData());
    }

    render() {
        // console.log(MAPS_API_KEY);
        const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
        return (
            <div className="d-content">
                <div className="dashboard-header">{this.props.closestTrip.trip ?
                    <DashboardHeader dashboardHeader={this.props.closestTrip.trip} />
                    : ''}
                </div>
                <div className="d-content__main">
                    <div className="d-content__main--sub">
                        <div className="description">
                            {
                                this.props.closestTrip.trip.description ?
                                    <Description description={this.props.closestTrip.trip.description} />
                                    : ''
                            }
                        </div>

                        <div className="map">
                            <DashboardMap
                                isMarkerShown
                                googleMapURL={googleMapURL}
                                loadingElement={<div style={{ height: '100%' }} />}
                                containerElement={<div style={{ height: '300px' }} />}
                                mapElement={<div style={{ height: '100%' }} />}
                            />
                        </div>

                        <div className="accommodations">
                            {
                                this.props.closestTrip.accommodations ?
                                    <Accommodations accommodations={this.props.closestTrip.accommodations} />
                                    : ''
                            }
                        </div>
                        <div className="plans">
                            {
                                this.props.closestTrip.plans ?
                                    <Plans plans={this.props.closestTrip.plans} tripId={this.props.closestTrip.trip.id} />
                                    : ''
                            }
                        </div>
                    </div>
                    <div className="group">
                        {this.props.closestTrip.group ? <Group group={this.props.closestTrip.group} /> : ''}
                    </div>
                </div>
                {/* <CreateNewTripForm />
                <BuildGroupForm />
                <FlightDetailsForm />
                <CreateNewAccommodationsForm />
                <CreateNewBudgetForm /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        currentUser,
        authToken: state.auth.authToken,
        closestTrip: state.trip.closestTrip
    };
};


export default requiresLogin()(connect(mapStateToProps)(DashboardContent));
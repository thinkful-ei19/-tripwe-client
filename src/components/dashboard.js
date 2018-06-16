import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashboardNavigation from './dashboard-navigation';
import DashboardContent from './dashboard-content';

import { fetchTripData } from '../actions/trip';
import DashboardHeader from './dashboard-header';
import Description from './description';
import Accommodations from './accommodations';
import Plans from './plans';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTripData());
    }

    render() {
        return (
            <div className="dashboard">
                <DashboardNavigation />
                <DashboardContent />
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>

                <DashboardHeader />

                <div className="descriptions">{this.props.closestTrip.trip.description ?
                    <Description description={this.props.closestTrip.trip.description} />
                    : ''}</div>

                <div className="accommodations">{this.props.closestTrip.accommodations ?
                    <Accommodations accommodations={this.props.closestTrip.accommodations} />
                    : ''}</div>
                <div className="plans">{this.props.closestTrip.plans ?
                    <Plans plans={this.props.closestTrip.plans} />
                    : ''}</div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        closestTrip: state.trip.closestTrip
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchTripData } from '../actions/trip';

import Group from './group';
import DashboardHeader from './dashboard-header';
import Description from './description';
import Accommodations from './accommodations';
import Plans from './plans';

class DashboardContent extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTripData());
    }

    render() {
        return (
            <div className="d-content">
                {/* <DashboardHeader /> */}
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
                                    <Plans plans={this.props.closestTrip.plans} />
                                    : ''
                            }
                        </div>
                    </div>
                    <div className="group">
                        {this.props.closestTrip.group ? <Group group={this.props.closestTrip.group} /> : ''}
                    </div>
                </div>

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
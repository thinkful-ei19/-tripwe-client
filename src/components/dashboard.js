import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashboardNavigation from './dashboard-navigation';
import DashboardContent from './dashboard-content';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <DashboardNavigation />
                <DashboardContent />
                {/* <div className="dashboard-username">
                    Username: {this.props.username}
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        // closestTrip: state.trip.closestTrip
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

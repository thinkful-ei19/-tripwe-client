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
                <Description />
                <Accommodations />
                <Plans />
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

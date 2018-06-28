import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashboardNavigation from './dashboard-navigation';
import DashboardContent from './dashboard-content';
import DashboardCreateNewTrip from './dashboard-create-new-trip';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <DashboardNavigation />
                {
                    this.props.isCreatingNewTrip ? <DashboardCreateNewTrip /> : <DashboardContent />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        isCreatingNewTrip: state.createNewTrip.isCreatingNewTrip
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

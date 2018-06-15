import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashboardNavigation from './dashboard-navigation';
import DashboardContent from './dashboard-content';

export class Dashboard extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="dashboard">
                <DashboardNavigation />
                <DashboardContent />
                {/* <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div> */}

            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname} ${currentUser.fullname}`,

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
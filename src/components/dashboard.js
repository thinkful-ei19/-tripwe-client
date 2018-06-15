import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {fetchTripData} from '../actions/trip';

export class Dashboard extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchTripData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>

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

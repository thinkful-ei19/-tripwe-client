import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

import Group from './group';

class DashboardContent extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         group: [],
    //         description: ''
    //     };
    // }

    componentWillMount() {
        // const data = fetch('http://localhost:8080/api/dashboard', {
        //     method: 'GET',
        //     headers: { Authorization: `Bearer ${this.props.authToken}` }
        // })
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(res => {
        //         console.log(res);
        //         this.setState({ group: res.closestTrip.group, description: res.closestTrip.trip.description });
        //     });
    }

    render() {

        console.log(this.props.currentTrip);

        return (
            <div>
                <p>{this.props.currentTrip.trip.description}</p>
                <Group group={this.props.currentTrip.group} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        currentUser,
        authToken: state.auth.authToken,
        currentTrip: state.trip.closestTrip
    };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardContent));
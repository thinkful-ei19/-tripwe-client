import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

import Group from './group';

// let myData;

class DashboardContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            group: [],
            userInfo: {}
        };
    }

    componentWillMount() {
        const data = fetch('http://localhost:8080/api/dashboard', {
            method: 'GET',
            headers: { Authorization: `Bearer ${this.props.authToken}` }
        })
            .then(res => {
                // console.log(res);
                return res.json();
            })
            .then(res => {
                console.log(res);
                this.setState({ userInfo: res });
                // this.setState({ group: res.group });
            })
            .then(fetch('http://localhost:8080/api/trips/1', {
                method: 'GET',
                headers: { Authorization: `Bearer ${this.props.authToken}` }
            })
                .then(res => {
                    return res.json();
                })
                .then(res => this.setState({ group: res.group })));
    }

    render() {

        // console.log(this.props.currentUser);

        return (
            <div>
                <Group group={this.state.group} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        currentUser,
        authToken: state.auth.authToken
    };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardContent));
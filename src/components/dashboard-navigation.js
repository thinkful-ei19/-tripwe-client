import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogOut from './logout';
import logo from '../styles/assets/tripwe-logo-dashboard.svg';
import { createNewTripInit, cancelNewTripInit } from '../actions/create-new-trip';

class DashboardNavigation extends Component {
    handleAddNew() {
        this.props.dispatch(createNewTripInit());
    }

    handleSeeClosestTrip() {
        this.props.dispatch(cancelNewTripInit());
    }

    render() {
        return (
            <div className="d-nav">
                <div className="d-nav__top">
                    <img className="d-nav__logo" src={logo} alt="tripWe logo" />
                    <LogOut className="d-nav__logout" />
                </div>
                <nav>
                    <ul className="d-nav__list">
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button" onClick={this.handleSeeClosestTrip.bind(this)}>Trip</button>
                        </li>
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button">Future Trips</button>
                        </li>
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button">Previous Trips</button>
                        </li>
                        <li className="d-nav__list--item">
                            <button className="d-nav__list--button" onClick={this.handleAddNew.bind(this)}>Add New</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default connect()(DashboardNavigation);

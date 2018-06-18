import React from 'react';

import LogOut from './logout';
import logo from '../styles/assets/tripwe-logo-dashboard.svg';

const DashboardNavigation = () => {
    return (
        <div className="d-nav">
            <div className="d-nav__top">
                <img className="d-nav__logo" src={logo} alt="tripWe logo" />
                <LogOut className="d-nav__logout" />
            </div>
            <nav>
                <ul className="d-nav__list">
                    <li className="d-nav__list--item">
                        <button className="d-nav__list--button">Trip</button>
                    </li>
                    <li className="d-nav__list--item">
                        <button className="d-nav__list--button">Future Trips</button>
                    </li>
                    <li className="d-nav__list--item">
                        <button className="d-nav__list--button">Previous Trips</button>
                    </li>
                    <li className="d-nav__list--item">
                        <button className="d-nav__list--button">Add New</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardNavigation;
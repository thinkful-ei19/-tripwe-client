import React from 'react';

import logo from '../styles/assets/tripwe-logo.svg';

const LandingPageHeader = () => {
    return (
        <div className="lp-header">
            <div className="lp-header__logo">
                <img className="lp-header__logo--image" src={logo} alt="tripWe logo" />
            </div>
            <div className="lp-header__buttons">
                <a href="#">About</a>
                <a href="#">Log in</a>
            </div>
        </div>
    );
};

export default LandingPageHeader;
import React from 'react';
import { Link } from 'react-scroll';

import logo from '../styles/assets/tripwe-logo.svg';

const LandingPageHeader = () => {
    return (
        <div className="lp-header">
            <div className="lp-header__logo">
                <img className="lp-header__logo--image" src={logo} alt="tripWe logo" />
            </div>
            <div className="lp-header__buttons">
                <Link to="lp-about" smooth={true}>About</Link>
                <Link to="lp-login" smooth={true}>Log in</Link>
            </div>
        </div>
    );
};

export default LandingPageHeader;
import React from 'react';

import RegistrationForm from './registration-form';

const LandingPageRegister = () => {
    return (
        <div className="lp-register">
            <div className="lp-register__cta">
                <p className="lp-register__cta--text"><span>Join</span> <span>tripWe</span> <span>today!</span></p>
            </div>
            <RegistrationForm />
            <svg className="lp-register__wave" viewBox="0 0 7724 560" xmlns="http://www.w3.org/2000/svg">
                <path className="lp-register__wave--path" d="M0 0V140H1931V0C1189 140 657 140 0 0Z" transform="scale(4)" />
            </svg>
        </div>
    );
};

export default LandingPageRegister;
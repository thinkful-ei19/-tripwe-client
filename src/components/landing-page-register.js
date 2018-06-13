import React from 'react';

import RegistrationForm from './registration-form';

const LandingPageRegister = () => {
    return (
        <div className="lp-register">
            <div className="lp-register__cta">
                <p className="lp-register__cta--text"><span>Join</span> <span>tripWe</span> <span>today!</span></p>
            </div>
            <RegistrationForm />
        </div>
    );
};

export default LandingPageRegister;
import React from 'react';

const LandingPageAbout = () => {
    return (
        <div className="lp-about card" id="lp-about">
            <div className="lp-about__heading">
                <h1 className="lp-about__heading--text">About tripWe</h1>
            </div>

            <div className="lp-about__content">
                <p>Plan a trip from start to finish</p>
                <i className="fas fa-map lp-about__content--icon"></i>
                <p>Add friends to organize together</p>
                <i className="fas fa-user-friends lp-about__content--icon"></i>
                <p>Compare flight and hotel information</p>
                <i className="fas fa-plane lp-about__content--icon"></i>
            </div>
        </div>
    );
};

export default LandingPageAbout;
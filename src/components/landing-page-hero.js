import React from 'react';

import LandingPageHeader from './landing-page-header';
import wave from '../styles/assets/wavy1.svg';

const LandingPageHero = () => {
    return (
        <div className="lp-hero">
            <LandingPageHeader />
            <div className="lp-hero__heading">
                <h1 className="lp-hero__heading--text">tripWe</h1>
            </div>
            <svg className="lp-hero__wave" viewBox="0 0 7740 536" xmlns="http://www.w3.org/2000/svg">
                <path className="lp-hero__wave--path" d="M1934.5 134H0C291 33.5 713 23.5 962 66.5C1152.14 99.3359 1442.5 155 1934.5 0V134Z" transform="translate(-0.0012207) scale(4)" />
            </svg>
        </div>
    );
};

export default LandingPageHero;
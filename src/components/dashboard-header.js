import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import CountDownToDate from './countDownToDate';
// import './dashboard-header.css';

export default function DashboardHeader(props) {

    let img = 'none';
    const imgUrl = encodeURI(`https://source.unsplash.com/1600x900/?${props.dashboardHeader.destination}`);
    if (props.dashboardHeader.destination) {   
        img = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${imgUrl})`;
    }
  

    let now = moment();

    return (
        <div className="d-header" style={{ backgroundImage: img }}>
            <div className="d-header__countdownDate">{props.dashboardHeader.arrival ?
                // <CountDownToDate givenDate={props.dashboardHeader.arrival} />
                <span><Moment diff={now} unit='days'>{props.dashboardHeader.arrival}</Moment> days</span>
                : ''}</div>
            <p className="d-header__name">{props.dashboardHeader.name}</p>
            <p className="d-header__destination">{props.dashboardHeader.destination}</p>
        </div>
    );
}
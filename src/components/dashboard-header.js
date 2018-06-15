import React from 'react';
import CountDownToDate from './countDownToDate';
import './dashboard-header.css';

export default function DashboardHeader(props) {
  
    return (
        <div className="dash-header">
            <div className="countdownDate">{props.dashboardHeader.arrival ?
                    <CountDownToDate givenDate={props.dashboardHeader.arrival} /> 
                    : ''}</div>
                <p className="dash-header_name">{props.dashboardHeader.name}</p>
            <p className="dash-header_destination">{props.dashboardHeader.destination}</p>
            <div className="dash-header_backgroundimg">
                <img src={`https://source.unsplash.com/featured/?${props.dashboardHeader.destination}`} />
            </div>
        </div>
    )
}
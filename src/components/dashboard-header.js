import React from 'react';
import CountDownToDate from './countDownToDate';
// import './dashboard-header.css';

const mockData = {
    "trip": {
        "id": 1,
        "user_id": 1,
        "name": "US Trip",
        "destination": "Los Angeles",
        "description": "fun in the sun",
        "arrival": "2018-09-30T04:00:00.000Z",
        "departure": "2018-10-30T04:00:00.000Z"
    }
}

//https://source.unsplash.com/featured/?
export default function DashboardHeader(props) {
    //console.log(props);
    return (
        <div className="dash-header">
            <CountDownToDate givenDate={'08/ 17 / 2018'} />
            <p className="dash-header_countdown">{mockData.trip.name}</p>
            <p className="dash-header_destination">{mockData.trip.destination}</p>
            <div className="dash-header_backgroundimg">
                <img style={{ height: 300, width: '100%' }} src="https://source.unsplash.com/featured/?las%20vegas" />
            </div>
        </div>
    )
}
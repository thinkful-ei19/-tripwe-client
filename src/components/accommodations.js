import React from 'react';

export default function Accommodations(props) {
 
    return(
        <div className="accommodations-table">
            <dl className="accommodations-dl-horizontal">
                <dt>Accommodations</dt>
                <dd>{props.hotel}</dd>
                <dt>People</dt>
                <dd>{props.trip.accommodations.user}</dd>
            </dl>
        </div>
    )};
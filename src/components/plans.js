import React from 'react';

export default function Plans(props) {

    return (
        <div className="plans-table">
            <dl className="plans-dl-horizontal">
                <dt>Date</dt>
                <dd>{formatDate(props.date)}</dd>
                <dt>Plan</dt>
                <dd>{props.trip.plans}</dd>
            </dl>
        </div>
    )
};
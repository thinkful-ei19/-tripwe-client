import React from 'react';

export default function Description(props) {
    return (
        <div className="description__card">
            <p className="description__card--header">Trip summary</p>
            <p className="description__card--text">{props.description}</p>
        </div>

    );
}
import React from 'react';


export default function CountDownToDate(props) {
    console.log(props);
    
    function parseDate(d) {
        const mdy = d.split('T');
        console.log(mdy);
        return new Date(mdy[0]);
    }
    const today = new Date();
    const d = Math.round((parseDate(props.givenDate) - today) / (1000 * 60 * 60 * 24));
    const str = d + ' day' + (d === 1 ? '' : 's');
    return (
        <div>{d === 0 ? 'Today ' : `${str}`}</div>
    )
}
import React from 'react';
import Moment from 'react-moment';
import PlansForm from './plans-form';

export default function Plans(props) {

    const plans = props.plans.map((obj, index) => {
        return (
            <tr className="plans__table--row" key={index}>
                <td>
                    <Moment format='MM/DD/YYYY'>
                        {obj.date}
                    </Moment>
                </td>
                <td>
                    {
                        obj.url ? <a href={obj.url} target="_blank">{obj.description} </a> : obj.description
                    }
                </td>
            </tr>
        );
    });
    return (
        <div>
            {/* <i className="fas fa-plus plans__add"></i> */}
            <table className="plans__table">
                <thead className="plans__table--head">
                    <tr>
                        <th>Date</th>
                        <th>Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {plans}
                </tbody>
            </table>
            <PlansForm tripId={props.tripId}/>
        </div>
    );
}

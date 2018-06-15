import React from 'react';

export default function Plans(props) {

    const plans = props.plans.map((obj, index) => {
        return (
            <tr className="plans" key={index}>
                <td>{obj.date}</td><td>{obj.description}</td>
            </tr>
        );
    })
    return (
        <table className="plans-table">
            <thead><tr><th>Date</th><th>Plan</th></tr></thead>
            <tbody>
                {plans}
            </tbody>
        </table>
    )
}
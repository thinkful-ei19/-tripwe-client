import React from 'react';


export default function Accommodations(props) {
    const accommodations = props.accommodations.map((obj, index) => {
        var users = '';
        obj.users.forEach(function (user) {
            users += user.fullname + ',';
        });
        users = users && users.substring(0, users.length - 1);
        return (
            <tr className="accommodations__row" key={index}>
                <td className="accommodations__row--acc">{obj.name}</td>
                <td className="accommodations__row--users">{users}</td>
            </tr>
        );
    });
    return (
        <table className="accommodations__table">
            <thead>
                <tr className="accommodations__table--head">
                    <th>Accommodations</th>
                    <th>People</th>
                </tr>
            </thead>
            <tbody>
                {accommodations}
            </tbody>
        </table>
    );

} 
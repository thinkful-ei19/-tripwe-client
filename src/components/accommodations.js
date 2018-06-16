import React from 'react';


export default function Accommodations(props) {
    const accommodations = props.accommodations.map((obj, index) => {
        var users= "";
        obj.users.forEach(function(user) {
            users += user.fullname + ",";
        });
        users = users &&  users.substring(0, users.length - 1);
        return (
            <tr className="accommodations" key={index}>
                <td>{obj.name}</td><td>{users}</td>
            </tr>
            );
    })
    return(
            <table className="accommodations-table">
            <thead><tr><th>Accommodations</th><th>People</th></tr></thead>
            <tbody>
                {accommodations}
            </tbody>
        </table>
    )

} 
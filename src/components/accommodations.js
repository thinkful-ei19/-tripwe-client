import React from 'react';


const mockData = [
        {
            "name": "Hilton",
            "users": [
                {
                    "fullname": "victoria",   
                },
                {
                    "fullname": "Oral Dalay",
                }
            ]
        },
        {
             "name": "Sheraton",
            "users": [
                {
                    "fullname": "bianca",                   
                },
                {
                    "fullname": "sehs",
                }
            ]
        }
    ]

export default function Accommodations(props) {
    const accommodations = mockData.map((obj, index) => {
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
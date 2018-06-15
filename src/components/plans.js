import React from 'react';

const mockData = [
    {
        "id": 1,
        "description": "walking down melrose",
        "date": "2018-10-02T04:00:00.000Z"
    },
    {
        "id": 2,
        "description": "walking down melrose",
        "date": "2018-10-02T04:00:00.000Z"
    }
]

export default function Plans(props) {
    const plans = mockData.map((obj, index) => {
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
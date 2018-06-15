import React from 'react';

import GroupMember from './group-member';

const dummyData = [
    { fullname: 'Dylan Stratton', incomingdepartureairport: 'MDW', incomingarrivalairport: 'LAX', incomingarrivaltime: '1:15pm', incomingflightnum: 'AA123' },
    { fullname: 'Bobby Billings', incomingdepartureairport: 'ORD', incomingarrivalairport: 'LAX', incomingarrivaltime: '3:15pm', incomingflightnum: 'UA1123' },
    { fullname: 'Christy Carol', incomingdepartureairport: 'JFK', incomingarrivalairport: 'LAX', incomingarrivaltime: '4:25pm', incomingflightnum: 'SW13' },
    { fullname: 'Connor Buster', incomingdepartureairport: 'JFK', incomingarrivalairport: 'LAX', incomingarrivaltime: '8:15pm', incomingflightnum: 'AA900' },
    { fullname: 'James Jimmy', incomingdepartureairport: 'MDW', incomingarrivalairport: 'LAX', incomingarrivaltime: '1:00pm', incomingflightnum: 'SW190' },
];

const Group = (props) => {

    // console.log(props);

    const groupMemberList = props.group.map((member, index) => {
        return (<li className="group__list--item" key={index}>
            <GroupMember
                fullname={member.fullname}
                incomingdepartureairport={member.incomingdepartureairport}
                incomingarrivalairport={member.incomingarrivalairport}
                incomingarrivaltime={member.incomingarrivaltime}
                incomingflightnum={member.incomingflightnum}
            />
        </li>);
    });

    return (
        <div className="group">
            <ul className="group__list">
                {groupMemberList}
            </ul>
        </div>
    );
};

export default Group;
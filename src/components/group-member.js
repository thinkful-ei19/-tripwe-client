import React from 'react';

const GroupMember = (props) => {
    return (
        <div className="g-member">
            <div className="g-member__main">
                <i className="fas fa-user-circle g-member__main--icon"></i>
                <div className="g-member__main--sub">
                    <p className="g-member__name">{props.fullname}</p>
                    <p className="g-member__flight-info">
                        <span className="g-member__dep--airport">{props.incomingdepartureairport}</span>
                        <i className="fas fa-arrow-right g-member__dep--icon"></i>
                        <span className="g-member__arr--airport">{props.incomingarrivalairport}</span>
                        <span className="g-member__flight-num">Flight {props.incomingflightnum}</span>
                        <span className="g-member__arr--time">arriving @ {props.incomingarrivaltime}</span>
                    </p>
                </div>
            </div>
            <i className="fas fa-info-circle g-member__info--icon"></i>
        </div>
    );
};

export default GroupMember;
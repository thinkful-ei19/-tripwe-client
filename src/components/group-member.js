import React from "react";
import Moment from "react-moment";

const GroupMember = props => {
  console.log(props);
  return (
    <div className="g-member">
      <div className="g-member__main">
        <i className="fas fa-user-circle g-member__main--icon" />
        <div className="g-member__main--sub">
          <p className="g-member__name">{props.fullname}</p>
          <p className="g-member__flight-info">
            <span className="g-member__dep--airport">
              {props.incomingdepartureairport ? props.incomingdepartureairport.value : ''}
            </span>
            <i className="fas fa-arrow-right g-member__dep--icon" />
            <span className="g-member__arr--airport">
              {props.incomingarrivalairport ? props.incomingarrivalairport.value : ''}
            </span>
            <span className="g-member__flight-num">
              Flight {props.incomingflightnum}
            </span>
            <span className="g-member__arr--time">
              arriving on &ensp;
              <Moment format="MM/DD/YYYY HH:mm">
                {props.incomingarrivaltime}
              </Moment>
            </span>
          </p>
        </div>
      </div>
      <i className="fas fa-info-circle g-member__info--icon" />
    </div>
  );
};

export default GroupMember;

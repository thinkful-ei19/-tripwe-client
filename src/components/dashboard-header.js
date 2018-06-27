import React, { Component } from 'react';
import Moment from "react-moment";
import moment from "moment";
import EditTripForm from './edit-trip-form';

export default class DashboardHeader extends Component {
  render(){
    let img = "none";
    const imgUrl = encodeURI(
      `https://source.unsplash.com/1600x900/?${this.props.dashboardHeader.destination}`
    );
    if (this.props.dashboardHeader.destination) {
      img = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${imgUrl})`;
    }

    let now = moment();
    return (
      <div className="d-header" style={{ backgroundImage: img }}>
        <div className="d-header__countdownDate">
          {this.props.dashboardHeader.arrival ? (
            <span>
              <Moment diff={now} unit="days">
                {this.props.dashboardHeader.arrival}
              </Moment>{" "}
              days
            </span>
          ) : (
            ""
          )}
        </div>
        {this.props.editTripName ? (
          <EditTripForm name={this.props.dashboardHeader.name}/>
        ) : (
        <p className="d-header__name" onDoubleClick={() => this.props.isNameActive()}>{this.props.dashboardHeader.name}</p>
        )}
        {this.props.dashboardHeader.destination ?
          (this.props.editTripDestination ?
            (
              <EditTripForm destination={this.props.dashboardHeader.destination}/>
            ) : (
            <p className="d-header__destination" onDoubleClick={() => this.props.isDestinationActive()}>
              {this.props.dashboardHeader.destination}
            </p>
        )) : (
          ""
        )}
      </div>
    );
  }
}

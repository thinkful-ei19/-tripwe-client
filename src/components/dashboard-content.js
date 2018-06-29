import React, { Component } from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchTripData } from "../actions/trip";

import { MAPS_API_KEY } from "../config";

import Group from "./group";
import DashboardHeader from "./dashboard-header";
import DashboardMap from "./dashboard-map";
import Description from "./description";
import Accommodations from "./accommodations";
import Plans from "./plans";
import Budget from "./budget";
import { editTripName, editTripDescription, editTripDestination, editTripArrival } from '../actions/edit-trip';

class DashboardContent extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTripData());
  }

  render() {
    const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
    return (
      <div className="d-content">
        <div className="dashboard-header">
          {this.props.closestTrip.trip ? (
            <DashboardHeader
            dashboardHeader={this.props.closestTrip.trip}
            editTripName={this.props.editTripName}
            isNameActive={() => this.props.dispatch(editTripName())}
            editTripDestination={this.props.editTripDestination}
            isDestinationActive={() => this.props.dispatch(editTripDestination())}
            editTripArrival={this.props.editTripArrival}
            isArrivalAcctive={() => this.props.dispatch(editTripArrival())}
            />
          ) : (
            ""
          )}
        </div>
        <div className="d-content__main">
          <div className="d-content__main--sub">
            <div className="description">
              {this.props.closestTrip.trip.description ? (
                <Description
                  description={this.props.closestTrip.trip.description}
                  editTripInput={this.props.editTripInput}
                  isDescriptionActive={() => this.props.dispatch(editTripDescription())}
                  />
              ) : (
                  ""
                )}
            </div>
            {this.props.closestTrip ? (
              <div className="map">
                <DashboardMap
                  isMarkerShown
                  googleMapURL={googleMapURL}
                  group={this.props.closestTrip.group}
                  loadingElement={<div style={{ height: "100%" }} />}
                  containerElement={<div style={{ height: "300px" }} />}
                  mapElement={<div style={{ height: "100%" }} />}
                />
              </div>
            ) : (
              ""
            )}
            <div className="budget">
              {this.props.closestTrip.budget ? (
                <Budget
                  budgets={this.props.closestTrip.budget}
                  id={this.props.closestTrip.trip.id}
                />
              ) : (
                ""
              )}
            </div>

            <div className="accommodations">
              {this.props.closestTrip.accommodations ? (
                <Accommodations
                  accommodations={this.props.closestTrip.accommodations}
                  tripId={this.props.closestTrip.trip.id}
                  group={this.props.closestTrip.group}
                />
              ) : (
                ""
              )}
            </div>

            <div className="plans">
              {this.props.closestTrip.plans ? (
                <Plans
                  plans={this.props.closestTrip.plans}
                  tripId={this.props.closestTrip.trip.id}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="group">
            {this.props.closestTrip.group ? (
              <Group group={this.props.closestTrip.group} id={this.props.closestTrip.trip.id}/>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    currentUser,
    authToken: state.auth.authToken,
    closestTrip: state.trip.closestTrip,
    editTripInput: state.editTrip.editDescriptionInput,
    editTripName: state.editTrip.editTripName,
    editTripDestination: state.editTrip.editTripDestination,
    editTripArrival: state.editTrip.editTripArrival
  };
};
export default requiresLogin()(connect(mapStateToProps)(DashboardContent));

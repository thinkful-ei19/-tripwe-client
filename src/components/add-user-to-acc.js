import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserToAccommodation } from "../actions/accommodations";

class AddUserToAccommodation extends Component {
  render() {
    let internalMap = {};
    const accommodationUsers = this.props.accommodationUsers.map(
      (member, index) => {
        internalMap[index] = {
          tripId: this.props.tripId,
          accId: this.props.accId,
          userId: member.userId
        };
        return <option key={index}>{member.fullname}</option>;
      }
    );
    return (
      <div className="accommodationUsers">
        <select
          onChange={e =>
            this.props.dispatch(
              addUserToAccommodation(internalMap[e.currentTarget.selectedIndex])
            )
          }
          id="accommodationUsers"
        >
          {accommodationUsers}
        </select>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  //console.log("tripId" + state.trip.closestTrip.trip.id);
  console.log(state);
  return {
    tripId: state.trip.closestTrip.trip.id,
    isUserAddToAccMenu: state.accommodation.isUserAddToAccMenu,
    showAccUsers: state.accommodation.showAccUsers
  };
};

export default connect(mapStatetoProps)(AddUserToAccommodation);

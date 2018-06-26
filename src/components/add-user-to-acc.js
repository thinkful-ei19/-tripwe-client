import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showAddUserMenu,
  addUserToAccommodation
} from "../actions/accommodations";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Group from './group';

class AddUserToAccommodation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const accommodationUsers = this.props.accommodationUsers.map(
      (member, index) => {
        return (
          <DropdownItem
            onClick={() =>
              this.props.dispatch(
                addUserToAccommodation({
                  tripId: this.props.tripId,
                  accId: this.props.accId,
                  userId: member.userId
                })
              )
            }
            key={index}
          >
            {member.fullname}
          </DropdownItem>
        );
      }
    );
    return (
      <div className="accommodationUsers">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>+</DropdownToggle>
          <DropdownMenu>{accommodationUsers}</DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  console.log("tripId" + state.trip.closestTrip.trip.id);
  return {
    tripId: state.trip.closestTrip.trip.id
  };
};

export default connect(mapStatetoProps)(AddUserToAccommodation);

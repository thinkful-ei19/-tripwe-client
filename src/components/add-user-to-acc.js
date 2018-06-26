import React, { Component } from "react";
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
import { renderTrip } from "../actions/trips-list";
import Group from "./group";

class AddUserToAccommodation extends Component {
  constructor(props) {
    super(props);
    this.addUserToAccommodation = this.addUserToAccommodation.bind(this);
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

  addUserToAccommodation(id) {
    //  console.log("this user is added " + id);
  }

  render() {
    const accommodationUsers = this.props.accommodationUsers.map(
      (member, index) => {
        return (
          <DropdownItem
            onClick={() => this.addUserToAccommodation(member.userId)}
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

export default AddUserToAccommodation;

import React, { Component } from "react";
import { showAddUserMenu } from "../actions/accommodations";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { renderTrip } from "../actions/trips-list";
import Group from "./group";

class AddUserToAccommodation extends Component {
  render() {
    const accommodationUsers = this.props.group.map((member, index) => {
      return <li className="dropdownMenu" key={index} />;
    });
    return (
      <div className="accommodationUsers">
        <ul className="user__list">{accommodationUsers}</ul>
      </div>
    );
  }
}

export default AddUserToAccommodation;

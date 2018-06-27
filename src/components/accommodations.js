import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import {
  showDetails,
  showAccommodationsForm,
  deleteAccommodationById
} from "../actions/accommodations";
import AccommodationForm from "./accommodation-form";
import AddUserToAccommodation from "./add-user-to-acc";

class Accommodations extends React.Component {
  render() {
    //console.log(this.props.accommodationUsers);

    //console.log(this.props.group);
    const accommodations = this.props.accommodations.map((obj, index) => {
      const { address, reference, arrival, departure, phone, id } = obj;
      //console.log(arrival, "arrival ");

      var users = "";
      obj.users &&
        obj.users.forEach(function(user) {
          users += user.fullname + ",";
        });
      users = users && users.substring(0, users.length - 1);

      return (
        <tbody key={id}>
          <tr className="accommodations__row" key={index}>
            <td className="accommodations__row--acc">
              {obj.name}
              <i
                onClick={() => this.props.dispatch(showDetails(id))}
                className="fas fa-info-circle g-member__info--icon"
              />
              <button
                onClick={() => this.props.dispatch(deleteAccommodationById(id))}
              >
                X
              </button>
            </td>
            <td className="accommodations__row--users">
              {users}
              <AddUserToAccommodation
                accId={id}
                accommodationUsers={this.props.group}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {this.props.showAccDetails === id &&
              !this.props.isAccDetailsHidden ? (
                <table className="accommodations__table">
                  <tbody>
                    <tr>
                      <td className="accommodations__row--acc">Address</td>
                      <td>{address}</td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">
                        Booking Number
                      </td>
                      <td>{reference}</td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">Arrival Date</td>
                      <td>
                        <Moment format="MM/DD/YYYY HH:mm:ss">{arrival}</Moment>
                      </td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">
                        Departure Date
                      </td>
                      <td>
                        <Moment format="MM/DD/YYYY HH:mm:ss">
                          {departure}
                        </Moment>
                      </td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">
                        Contact Number
                      </td>
                      <td>{phone}</td>
                    </tr>
                  </tbody>
                </table>
              ) : null}
            </td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        <table className="accommodations__table">
          <thead>
            <tr className="accommodations__table--head">
              <th>Accommodations</th>
              <th>People</th>
            </tr>
          </thead>
          {accommodations}
        </table>
        <button
          onClick={() => this.props.dispatch(showAccommodationsForm(true))}
        >
          Add Accommodations
        </button>
        {this.props.isAccFormHidden ? (
          <AccommodationForm
            newAccommodation={this.props.accommodations}
            id={this.props.tripId}
          />
        ) : null}
      </div>
    );
  }
}
const mapStatetoProps = state => {
  //   console.log("component: ");
  //console.log(state);
  return {
    showAccDetails: state.accommodation.showAccDetails,
    isAccDetailsHidden: state.accommodation.isAccDetailsHidden,
    isAccFormHidden: state.accommodation.isAccFormHidden
    // isUserAddToAccMenu: state.accommodation.isUserAddToAccMenu,
    //showAccUsers: state.accommodation.showAccUsers
  };
};

export default connect(mapStatetoProps)(Accommodations);

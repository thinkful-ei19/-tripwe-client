import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import ReactModal from "react-modal";
import {
  showDetails,
  showAccommodationsForm,
  deleteAccommodationById
} from "../actions/accommodations";
import AccommodationForm from "./accommodation-form";
import AddUserToAccommodation from "./add-user-to-acc";
import EditAccommodation from "./edit-accommodation-form";
import { updateAccommodationRequest } from "../actions/edit-accommodation";

class Accommodations extends React.Component {
  render() {
    const accommodations = this.props.accommodations.map((obj, index) => {
      const { address, reference, arrival, departure, phone, id } = obj;

      var users = "";
      obj.users &&
        obj.users.forEach(function(user) {
          users += user.fullname + ",";
        });
      users = users && users.substring(0, users.length - 1);

      return (
        <tbody key={id}>
          <tr className="accommodations__row" key={index}>
            <td
              onDoubleClick={() =>
                this.props.dispatch(updateAccommodationRequest())
              }
              className="accommodations__row--acc"
            >
              {obj.name}

              <i
                onClick={() => this.props.dispatch(showDetails(id))}
                className="fas fa-info-circle g-member__info--icon"
              />
              <button
                className="accommodations__row--delete"
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
                this.props.editAccommodationForm ? (
                  <EditAccommodation
                    name={obj.name}
                    address={address}
                    reference={reference}
                    arrival={arrival}
                    departure={departure}
                    phone={phone}
                    id={id}
                  />
                ) : (
                  <table className="accommodations__table">
                    <tbody>
                      <tr>
                        <td className="accommodations__row--acc">Address</td>
                        <td
                          onDoubleClick={() =>
                            this.props.dispatch(updateAccommodationRequest())
                          }
                        >
                          {address}
                        </td>
                      </tr>
                      <tr>
                        <td className="accommodations__row--acc">
                          Booking Number
                        </td>
                        <td
                          onDoubleClick={() =>
                            this.props.dispatch(updateAccommodationRequest())
                          }
                        >
                          {reference}
                        </td>
                      </tr>
                      <tr>
                        <td className="accommodations__row--acc">
                          Arrival Date
                        </td>
                        <td
                          onDoubleClick={() =>
                            this.props.dispatch(updateAccommodationRequest())
                          }
                        >
                          <Moment format="MM/DD/YYYY HH:mm:ss">
                            {arrival}
                          </Moment>
                        </td>
                      </tr>
                      <tr>
                        <td className="accommodations__row--acc">
                          Departure Date
                        </td>
                        <td
                          onDoubleClick={() =>
                            this.props.dispatch(updateAccommodationRequest())
                          }
                        >
                          <Moment format="MM/DD/YYYY HH:mm:ss">
                            {departure}
                          </Moment>
                        </td>
                      </tr>
                      <tr>
                        <td className="accommodations__row--acc">
                          Contact Number
                        </td>
                        <td
                          onDoubleClick={() =>
                            this.props.dispatch(updateAccommodationRequest())
                          }
                        >
                          {phone}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )
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
          className="group__button"
          onClick={() => this.props.dispatch(showAccommodationsForm(true))}
        >
          Add Accommodations
        </button>
        {this.props.isAccFormHidden ? (
          <ReactModal
            isOpen={true}
            className="form-modal"
            overlayClassName="form-modal__overlay"
          >
            <AccommodationForm
              newAccommodation={this.props.accommodations}
              id={this.props.tripId}
            />
          </ReactModal>
        ) : null}
      </div>
    );
  }
}
const mapStatetoProps = state => {
  //console.log(state);
  return {
    showAccDetails: state.accommodation.showAccDetails,
    isAccDetailsHidden: state.accommodation.isAccDetailsHidden,
    isAccFormHidden: state.accommodation.isAccFormHidden,
    editAccommodationForm: state.editAccommodation.editAccommodationForm,
    editAccommodationName: state.editAccommodation.editAccommodationName
  };
};
export default connect(mapStatetoProps)(Accommodations);

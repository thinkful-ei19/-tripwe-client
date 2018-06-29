import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import { updateAccommodation } from "../actions/edit-accommodation";

class EditAccommodation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalDate: this.props.arrivalDate || moment().format(),
      departureDate: this.props.departureDate || moment().format()
    };
  }

  handleArrivalDateChange(date) {
    this.setState({ arrivalDate: date.utc().format() });
  }

  handleDepartureDateChange(date) {
    this.setState({ departureDate: date.utc().format() });
  }
  handleSubmitVal = e => {
    const newAccom = {
      name: e.target.name.value,
      address: e.target.address.value,
      reference: e.target.reference.value,
      arrival: this.state.arrivalDate,
      departure: this.state.departureDate,
      phone: e.target.phone.value
    };
    this.props.dispatch(updateAccommodation(newAccom, this.props.id));
  };

  render() {
    return (
      <form
        className="accommodations__table edit-acc"
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmitVal(e);
        }}
      >
        <label className="accommodations__row--acc">Hotel</label>
        <input
          type="text"
          defaultValue={this.props.name}
          name="name"
          ref={input => {
            this.input = input;
          }}
        />
        <label className="accommodations__row--acc">Address</label>
        <input
          type="text"
          defaultValue={this.props.address}
          name="address"
          ref={input => {
            this.input = input;
          }}
        />
        <label className="accommodations__row--acc">Booking Number</label>
        <input
          type="text"
          defaultValue={this.props.reference}
          name="reference"
          ref={input => {
            this.input = input;
          }}
        />
        <label htmlFor="accArrivalDate">Arrival Date</label>
        <DatePicker
          name="accArrivalDate"
          selected={moment(this.state.arrivalDate)}
          onChange={this.handleArrivalDateChange.bind(this)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          placeholderText="Click to select a date"
        />
        <label htmlFor="accDepartureDate">Departure Date</label>
        <DatePicker
          name="accDepartureDate"
          selected={moment(this.state.departureDate)}
          onChange={this.handleDepartureDateChange.bind(this)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          placeholderText="Click to select a date"
        />
        <label className="accommodations__row--acc">Phone Number</label>
        <input
          type="text"
          defaultValue={this.props.phone}
          name="phone"
          ref={input => {
            this.input = input;
          }}
          required
        />
        <button className="edit-button" type="submit">
          Save
        </button>
      </form>
    );
  }
}

const mapStatetoProps = state => {
  return {};
};

export default connect(mapStatetoProps)(EditAccommodation);

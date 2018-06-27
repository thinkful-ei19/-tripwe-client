import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./input";
import moment from "moment";
import DatePicker from "react-datepicker";
import { addAccommodation } from "../actions/accommodations";

class AccommodationsFrom extends Component {
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
  onSubmit(values) {
    console.log(values);
    const newAccommodation = {
      name: values.hotel,
      address: values.address,
      reference: values.reference,
      arrival: this.state.arrivalDate,
      departure: this.state.departureDate,
      phone: values.phoneNumber,
      id: this.props.id
    };
    this.props.dispatch(addAccommodation(newAccommodation));
    //console.log(this.props);
  }

  render() {
    // console.log(this.props);
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="ct-acc ct-card">
        <div className="ct-acc__header ct-header">
          <p className="ct-acc__header--text">Accommodations</p>
        </div>
        <form className="ct-acc__form">
          {error}
          <label htmlFor="hotel">Hotel / Airbnb</label>
          <Field component={Input} type="text" name="hotel" id="hotel" />
          <label htmlFor="address">Address</label>
          <Field component={Input} type="text" name="address" id="address" />
          <label htmlFor="address">Reference Number</label>
          <Field
            component={Input}
            type="text"
            name="reference"
            id="reference"
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
          {/* <Field
            component={Input}
            type="text"
            name="accArrivalDate"
            id="accArrivalDate"
          /> */}
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
          {/* <Field
            component={Input}
            type="text"
            name="accDepartureDate"
            id="accDepartureDate"
          /> */}
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field
            component={Input}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
          />
          <div className="ct-next-skip">
            <button
              className="ct-buildGroup__add accommodation"
              onClick={this.props.handleSubmit(values => this.onSubmit(values))}
            >
              Save
            </button>
            {/* <button className="ct-buildGroup__next next">Skip</button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "createAccommodationsFrom"
})(AccommodationsFrom);

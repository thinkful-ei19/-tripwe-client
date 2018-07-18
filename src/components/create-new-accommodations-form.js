import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import DatePicker from "react-datepicker";
import Input from "./input";
// import { required, nonEmpty } from "../validators";
import { nextStep, createNewAccommodation } from "../actions/create-new-trip";

class CreateNewAccommodationsForm extends Component {
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

  handleSkip() {
    this.props.dispatch(nextStep());
  }

  onSubmit(values) {
    const completeValues = {
      name: values.hotel,
      address: values.address,
      arrival: this.state.arrivalDate,
      departure: this.state.departureDate,
      phone: values.phoneNumber
    };
    this.props.dispatch(createNewAccommodation(completeValues));
  }

  render() {
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
        <form
          className="ct-acc__form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <label htmlFor="hotel">Hotel / Airbnb</label>
          <Field component={Input} type="text" name="hotel" id="hotel" />
          <label htmlFor="address">Address</label>
          <Field component={Input} type="text" name="address" id="address" />
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
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field
            component={Input}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
          />
          <div className="ct-next-skip">
            <button
              type="button"
              className="ct-buildGroup__skip skip"
              onClick={this.handleSkip.bind(this)}
            >
              Skip
            </button>
            <button
              type="submit"
              className="ct-buildGroup__next next"
              disabled={this.props.pristine || this.props.submitting}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );

    return (
      <div className="ct-acc ct-card">
        <div className="ct-acc__header ct-header">
          <p className="ct-acc__header--text">Accommodations</p>
        </div>
        <form
          className="ct-acc__form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <label htmlFor="hotel">Hotel / Airbnb</label>
          <Field component={Input} type="text" name="hotel" id="hotel" />
          <label htmlFor="address">Address</label>
          <Field component={Input} type="text" name="address" id="address" />
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
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field
            component={Input}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
          />
          <div className="ct-next-skip">
            <button
              type="button"
              className="ct-buildGroup__skip skip"
              onClick={this.handleSkip.bind(this)}
            >
              Skip
            </button>
            <button
              type="submit"
              className="ct-buildGroup__next next"
              disabled={this.props.pristine || this.props.submitting}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "createNewAccommodationsForm"
})(CreateNewAccommodationsForm);

import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import { addAccommodation } from "../actions/accommodations";

class AccommodationsFrom extends Component {
  onSubmit(values) {
    // console.log(values);
    const newAccommodation = {
      name: values.hotel,
      address: values.address,
      reference: values.reference,
      arrival: values.accArrivalDate,
      departure: values.accDepartureDate,
      phone: values.phoneNumber,
      id: this.props.id
    };
    this.props.dispatch(addAccommodation(newAccommodation));
    //console.log(this.props);
  }
  // onSubmit(values) {}

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
          <Field
            component={Input}
            type="text"
            name="accArrivalDate"
            id="accArrivalDate"
          />
          <label htmlFor="accDepartureDate">Departure Date</label>
          <Field
            component={Input}
            type="text"
            name="accDepartureDate"
            id="accDepartureDate"
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

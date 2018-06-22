import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import moment from "moment";
import DatePicker from "react-datepicker";
import { addPlan, createNewPlan } from "../actions/plans";

import "react-datepicker/dist/react-datepicker.css";

export class PlansForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate || moment().format(),
      description: "",
      link: ""
    };

    this.formRef = React.createRef();
    this.dateRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.newPlanFormDisplayHandler = this.newPlanFormDisplayHandler.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  newPlanFormDisplayHandler() {
    //  console.log(this.formRef.style.display);
  }

  onSubmit(values) {
    values.date = this.state.startDate.utc().format();
    values.tripId = this.tripId;
    console.log(values.date);
    this.props.dispatch(createNewPlan(values));
  }

  render() {
    this.tripId = this.props.tripId;
    const createPlansForm = (
      <form
        ref={this.formRef}
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <DatePicker
          selected={moment(this.state.startDate)}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="LLL"
          timeIntervals={15}
          placeholderText="Click to select a date"
          ref={this.dateRef}
        />
        {/*<label htmlFor="name">Plan</label> */}
        <Field
          name="description"
          id="description"
          type="text"
          component="input"
          placeholder="What is the plan?"
        />
        {/*<label htmlFor="message">Enter Tripadvidor link</label>*/}
        <Field
          name="link"
          id="link"
          component="textarea"
          placeholder="Enter TripAdvisor Link"
        />
        <button type="submit">Save</button>
      </form>
    );
    return (
      <React.Fragment>
        <div
          className="plans_add_close"
          onClick={this.newPlanFormDisplayHandler}
        />
        <div>{createPlansForm}</div>
        <div className="plans_add_container">
          {/* <button
            className="plans__add"
            onClick={this.newPlanFormDisplayHandler}
          >
            Add plan
          </button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: "plans"
})(PlansForm);

import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import { updatePlan } from "../actions/edit-plan";

class EditPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate || moment().format()
    };
  }

  handleStartDateChange(date) {
    this.setState({ startDate: date.utc().format() });
  }

  handleSubmitVal = e => {
    console.log(this.state.startDate, "targetting");
    const newPlan = {
      description: e.target.description.value,
      date: this.state.startDate,
      link: e.target.link.value
    };
    this.props.dispatch(updatePlan(newPlan, this.props.id));
  };
  render() {
    //console.log(this.props);

    return (
      <form
        className="ct-plans__form"
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmitVal(e);
        }}
      >
        <label htmlFor="ct-plans__form--unit">Date</label>
        <DatePicker
          name="planDate"
          selected={moment(this.state.startDate)}
          onChange={this.handleStartDateChange.bind(this)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          placeholderText="Click to select a date"
        />
        <label className="ct-plans__form--unit">Plan</label>
        <input
          type="text"
          defaultValue={this.props.description}
          name="description"
          ref={input => {
            this.input = input;
          }}
        />

        <label className="ct-plans__form--unit">Enter link</label>
        <input
          type="text"
          defaultValue={this.props.description}
          name="link"
          ref={input => {
            this.input = input;
          }}
        />
        <button className="edit-button" type="submit">Save</button>
      </form>
    );
  }
}
const mapStatetoProps = state => {
  //console.log(state);
  return {};
};

export default connect(mapStatetoProps)(EditPlan);

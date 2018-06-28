import React, { Component } from 'react';
import { connect } from "react-redux";
import { editTripById } from '../actions/edit-trip';
import moment from "moment";
import DatePicker from "react-datepicker";

class EditTripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    arrivalTime: this.props.time || moment().format()
    };
  }

  handleArrivalTimeChange(date){
    this.setState({ arrivalTime: date.utc().format() })
    this.handleArrivalSubmit(date)
  }

  handleDescriptionSubmit(e){
    const newObj = {
      description: e.target.descriptionInput.value
    }
    this.props.dispatch(editTripById(newObj, this.props.id))
  }

  handleNameSubmit(e){
    const newObj = {
      name: e.target.nameInput.value
    }
    this.props.dispatch(editTripById(newObj, this.props.id))
  }

  handleDestinationSubmit(e){
    const newObj = {
      destination: e.target.destinationInput.value
    }
    this.props.dispatch(editTripById(newObj, this.props.id))
  }

  handleArrivalSubmit(date){
    const newObj = {
      arrival: date
    }
    this.props.dispatch(editTripById(newObj, this.props.id))
  }

    render() {
    return (
      <div>
      {this.props.editTrip.editDescriptionInput ?
        <form className="description__card--text"
              onSubmit={(e)=>{
              e.preventDefault();
              this.handleDescriptionSubmit(e)}}>
            <input
              type="text"
              defaultValue={this.props.description}
              name="descriptionInput"
              ref={input => (this.input = input)}
              required
            />
        <button type="submit">Save</button>
        </form>
         : null }
     {this.props.editTrip.editTripName ?
       <form className="d-header__name"
             onSubmit={(e)=>{
             e.preventDefault();
             this.handleNameSubmit(e)}}>
           <input
             type="text"
             defaultValue={this.props.name}
             name="nameInput"
             ref={input => (this.input = input)}
             required
           />
       <button type="submit">Save</button>
       </form>
        : null }
      {this.props.editTrip.editTripDestination ?
        <form className="d-header__destination"
              onSubmit={(e)=>{
              e.preventDefault();
              this.handleDestinationSubmit(e)}}>
            <input
              type="text"
              defaultValue={this.props.destination}
              name="destinationInput"
              ref={input => (this.input = input)}
              required
            />
        <button type="submit">Save</button>
        </form>
         : null }
       {this.props.editTrip.editTripArrival ?
         <DatePicker
          name="arrivalInput"
          selected={moment(this.state.arrivalTime)}
          onChange={this.handleArrivalTimeChange.bind(this)}
          dateFormat="LLL"
          placeholderText="Click to change a date"
        />
          : null }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    description: state.trip.closestTrip.trip.description,
    id: state.trip.closestTrip.trip.id,
    editTrip: state.editTrip
  };
};

export default (connect(mapStateToProps)(EditTripForm));

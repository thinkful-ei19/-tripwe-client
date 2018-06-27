import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from "react-redux";
import Input from './input';
import { editTripById } from "../actions/edit-trip";

class Description extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editDescriptionInput: false
      };
  }

  handleEditDescriptionInput() {
      this.setState({ editDescriptionInput: true });
  }

  handleSubmit(e){
    const newObj = {
      description: e.target.descriptionInput.value
    }
    this.props.dispatch(editTripById(newObj, this.props.id))
    this.setState({ editDescriptionInput: false });
  }

  render() {
  return (
      <div className="description__card">
          <p className="description__card--header">Trip summary</p>
          {
            this.state.editDescriptionInput ?
            (<form className="description__card--text"
                  onSubmit={(e)=>{
                  e.preventDefault();
                  this.handleSubmit(e)}}>
                <input
                  type="text"
                  defaultValue={this.props.description}
                  name="descriptionInput"
                  ref={input => (this.input = input)}
                  required
                />
              <button type="submit">Save</button>
              </form> )
          : (<p className="description__card--text"
            onDoubleClick={() =>  this.handleEditDescriptionInput()}>
              {this.props.description}
            </p>)
          }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    description: state.trip.closestTrip.trip.description,
    id: state.trip.closestTrip.trip.id
  };
};
export default (connect(mapStateToProps)(Description));

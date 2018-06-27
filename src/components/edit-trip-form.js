import React, { Component } from 'react';
import { connect } from "react-redux";
import { editTripById } from '../actions/edit-trip';

class EditTripForm extends Component {
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

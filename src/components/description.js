import React, { Component } from 'react';
import EditTripForm from './edit-trip-form'

export default class Description extends Component {
  render() {
  return (
      <div className="description__card">
          <p className="description__card--header">Trip summary</p>
          {
            this.props.editTripInput ?
            <EditTripForm description={this.props.description}/>
          : (<p className="description__card--text"
            onDoubleClick={() => this.props.isDescriptionActive()}>
              {this.props.description}
            </p>)
          }
      </div>
    );
  }
}

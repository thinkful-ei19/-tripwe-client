import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';


class CreateNewTripForm extends Component {

    handleSubmit(values) {
        console.log(values);
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
            <div className="ct-main ct-card">
                <div className="ct-main__header ct-header">
                    <p className="ct-main__header--text">Create New Trip</p>
                </div>
                <form
                    className="ct-main__form"
                    onSubmit={this.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    {error}
                    <label htmlFor="tripName">Trip Name</label>
                    <Field
                        component={Input}
                        type="text"
                        name="tripName"
                        id="tripName"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="destination">Destination</label>
                    <Field
                        component={Input}
                        type="text"
                        name="destination"
                        id="destination"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="arrivalDate">Arrival Date</label>
                    <Field
                        component={Input}
                        type="text"
                        name="arrivalDate"
                        id="arrivalDate"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="tripDescription">Description</label>
                    <Field
                        component={Input}
                        type="text"
                        name="tripDescription"
                        id="tripDescription"
                        validate={[required, nonEmpty]}
                    />
                    <button className="ct-main__next next" disabled={this.props.pristine || this.props.submitting}>
                        Next
                    </button>
                </form>

            </div>
        );
    }
}

export default reduxForm({
    form: 'createNewTrip'
})(CreateNewTripForm);
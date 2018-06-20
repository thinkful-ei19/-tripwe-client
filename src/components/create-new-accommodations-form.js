import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';


class CreateNewAccommodationsFrom extends Component {

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
            <div className="ct-acc ct-card">
                <div className="ct-acc__header ct-header">
                    <p className="ct-acc__header--text">Accommodations</p>
                </div>
                <form
                    className="ct-acc__form"
                    onSubmit={this.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    {error}
                    <label htmlFor="hotel">Hotel / Airbnb</label>
                    <Field
                        component={Input}
                        type="text"
                        name="hotel"
                        id="hotel"
                    />
                    <label htmlFor="address">Address</label>
                    <Field
                        component={Input}
                        type="text"
                        name="address"
                        id="address"
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
                        <button className="ct-buildGroup__skip skip">Skip</button>
                        <button className="ct-buildGroup__next next" disabled={this.props.pristine || this.props.submitting}>
                            Next
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

export default reduxForm({
    form: 'createNewAccommodationsFrom'
})(CreateNewAccommodationsFrom);
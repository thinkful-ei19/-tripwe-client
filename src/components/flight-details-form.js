import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';


class FlightDetailsForm extends Component {

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
            <div className="ct-flight ct-card">
                <div className="ct-flight__header ct-header">
                    <p className="ct-flight__header--text">Flight Details</p>
                </div>
                <form
                    className="ct-flight__form"
                    onSubmit={this.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    <fieldset>
                        <legend>Depart</legend>
                        <div className="ct-flight__form--depart">
                            <div className="ct-flight__form--unit">
                                {error}
                                <label htmlFor="departFrom">From</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="departFrom"
                                    id="departFrom"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="departTo">To</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="departTo"
                                    id="departTo"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="departFlightNumber">Flight Number</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="departFlightNumber"
                                    id="departFlightNumber"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="departDepartureDate">Departure Date</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="departDepartureDate"
                                    id="departDepartureDate"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="departDepartureTime">Departure Time</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="departDepartureTime"
                                    id="departDepartureTime"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="departArrivalDate">Arrival Date</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="departArrivalDate"
                                    id="departArrivalDate"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="departArrivalTime">Arrival Time</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="departArrivalTime"
                                    id="departArrivalTime"
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Return</legend>
                        <div className="ct-flight__form--return">
                            <div className="ct-flight__form--unit">
                                {error}
                                <label htmlFor="returnFrom">From</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="returnFrom"
                                    id="returnFrom"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="returnTo">To</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="returnTo"
                                    id="returnTo"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="returnFlightNumber">Flight Number</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="returnFlightNumber"
                                    id="returnFlightNumber"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="returnDepartureDate">Departure Date</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="returnDepartureDate"
                                    id="returnDepartureDate"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="returnDepartureTime">Departure Time</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="returnDepartureTime"
                                    id="returnDepartureTime"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="returnArrivalDate">Arrival Date</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="returnArrivalDate"
                                    id="returnArrivalDate"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="returnArrivalTime">Arrival Time</label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="returnArrivalTime"
                                    id="returnArrivalTime"
                                />
                            </div>
                        </div>
                    </fieldset>
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
    form: 'flightDetails'
})(FlightDetailsForm);
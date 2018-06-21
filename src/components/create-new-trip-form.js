import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { required, nonEmpty } from '../validators';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { createNewTrip, nextStep } from '../actions/create-new-trip';


class CreateNewTripForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrivalDate: this.props.arrivalDate || moment().format(),
            departureDate: this.props.departureDate || moment().format()
        };
    }

    handleArrivalDateChange(date) {
        this.setState({ arrivalDate: date.utc().format() });
    }

    handleDepartureDateChange(date) {
        this.setState({ departureDate: date.utc().format() });
    }

    onSubmit(values) {
        const completeValues = {
            name: values.tripName,
            description: values.tripDescription,
            destination: values.destination,
            arrival: this.state.arrivalDate,
            departure: this.state.departureDate
        };
        this.props.dispatch(createNewTrip(completeValues));
        // this.props.dispatch(nextStep(this.props.step));
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
                    // ref={this.formRef}
                    className="ct-main__form"
                    onSubmit={this.props.handleSubmit((values) =>
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
                    <DatePicker
                        name="arrivalDate"
                        selected={moment(this.state.arrivalDate)}
                        onChange={this.handleArrivalDateChange.bind(this)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
                        placeholderText="Click to select a date"
                    // ref={this.arrivalDateRef}
                    />
                    <label htmlFor="departureDate">Departure Date</label>
                    <DatePicker
                        name="departureDate"
                        selected={moment(this.state.departureDate)}
                        onChange={this.handleDepartureDateChange.bind(this)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
                        placeholderText="Click to select a date"
                    // ref={this.departureDateRef}
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

const mapStateToProps = state => ({
    step: state.createNewTrip.step
});

const connectedForm = connect(mapStateToProps)(CreateNewTripForm);

export default reduxForm({
    form: 'createNewTrip'
})(connectedForm);
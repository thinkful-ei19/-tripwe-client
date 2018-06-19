import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class CreateNewTripForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrivalDate: '',
            departureDate: ''
        };

        // this.arrivalDateRef = React.createRef();
    }

    handleArrivalDateChange(date) {
        // console.log(date.utc().format());
        this.setState({
            arrivalDate: date.utc().format()
        });
    }

    handleSubmit(values) {
        // values.preventDefault();
        console.log('why is this firing now');
        console.log(values, this.state.arrivalDate);
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
                    onSubmit={this.handleSubmit((values) =>
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
                        // selected={this.state.startDate}
                        onChange={this.handleArrivalDateChange.bind(this)}
                        // showTimeSelect
                        // timeFormat="HH:mm"
                        // timeIntervals={15}
                        dateFormat="LLL"
                        placeholderText="Click to select a date"
                    // ref={this.arrivalDateRef}
                    />
                    {/* <Field
                        component={Input}
                        type="text"
                        name="arrivalDate"
                        id="arrivalDate"
                        validate={[required, nonEmpty]}
                    /> */}
                    <label htmlFor="departureDate">Departure Date</label>
                    <Field
                        component={Input}
                        type="text"
                        name="departureDate"
                        id="departureDate"
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
import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { nextStep, createNewFlight } from '../actions/create-new-trip';
import { searchAirports } from '../actions/searchAirports';


class FlightDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departDepartureDate: this.props.departDepartureDate || moment().format(),
            departArrivalDate: this.props.departArrivalDate || moment().format(),
            returnDepartureDate: this.props.returnDepartureDate || moment().format(),
            returnArrivalDate: this.props.returnArrivalDate || moment().format(),
            selectedDepartFromOption: '',
            selectedDepartToOption: '',
            selectedReturnFromOption: '',
            selectedReturnToOption: ''
        };
    }

    handleDepartDepartureDateChange(date) {
        this.setState({ departDepartureDate: date.utc().format() });
    }

    handleDepartArrivalDateChange(date) {
        this.setState({ departArrivalDate: date.utc().format() });
    }

    handleReturnDepartureDateChange(date) {
        this.setState({ returnDepartureDate: date.utc().format() });
    }

    handleReturnArrivalDateChange(date) {
        this.setState({ returnArrivalDate: date.utc().format() });
    }

    handleSearchAirports(searchTerm) {
        // console.log(searchTerm);
        this.props.dispatch(searchAirports(searchTerm));
    }

    handleDepartFromSelection(selectedDepartFromOption) {
        this.setState({ selectedDepartFromOption: selectedDepartFromOption });
    }

    handleDepartToSelection(selectedDepartToOption) {
        this.setState({ selectedDepartToOption: selectedDepartToOption });
    }

    handleReturnFromSelection(selectedReturnFromOption) {
        this.setState({ selectedReturnFromOption: selectedReturnFromOption });
    }

    handleReturnToSelection(selectedReturnToOption) {
        this.setState({ selectedReturnToOption: selectedReturnToOption });
    }

    handleSkip() {
        this.props.dispatch(nextStep());
    }

    onSubmit(values) {

        console.log(this.state.selectedDepartFromOption);

        const completeValues = {
            incomingDepartureTime: this.state.departDepartureDate,
            incomingArrivalTime: this.state.departArrivalDate,
            incomingDepartureAirport: this.state.selectedDepartFromOption.value,
            incomingArrivalAirport: this.state.selectedDepartToOption.value,
            incomingArrivalLatitude: this.state.selectedDepartToOption.latitude,
            incomingArrivalLongitude: this.state.selectedDepartToOption.longitude,
            incomingDepartureLatitude: this.state.selectedDepartFromOption.latitude,
            incomingDepartureLongitude: this.state.selectedDepartFromOption.longitude,
            incomingFlightNum: values.departFlightNumber,
            outgoingDepartureTime: this.state.returnDepartureDate,
            outgoingArrivalTime: this.state.returnArrivalDate,
            outgoingDepartureAirport: this.state.selectedReturnFromOption.value,
            outgoingArrivalAirport: this.state.selectedReturnToOption.value,
            outgoingFlightNum: values.returnFlightNumber
        };

        // console.log(completeValues);
        this.props.dispatch(createNewFlight(completeValues));

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

        const options = this.props.list.map(airport => {
            return {
                value: airport.airportcode,
                label: `${airport.airportname} - ${airport.airportcode}`,
                latitude: airport.latitude,
                longitude: airport.longitude
            };
        });

        return (
            <div className="ct-flight ct-card">
                <div className="ct-flight__header ct-header">
                    <p className="ct-flight__header--text">Flight Details</p>
                </div>
                <form
                    className="ct-flight__form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    <fieldset>
                        <legend>Depart</legend>
                        <div className="ct-flight__form--depart">
                            <div className="ct-flight__form--unit ct-flight__form--airportSearch">
                                {error}
                                <label htmlFor="departFrom">From</label>
                                <Select
                                    name="departFrom"
                                    value={this.state.selectedDepartFromOption}
                                    onChange={this.handleDepartFromSelection.bind(this)}
                                    onInputChange={searchTerm => this.handleSearchAirports(searchTerm)}
                                    options={options}
                                    searchable
                                />
                            </div>
                            <div className="ct-flight__form--unit ct-flight__form--airportSearch">
                                <label htmlFor="departTo">To</label>
                                <Select
                                    name="departTo"
                                    value={this.state.selectedDepartToOption}
                                    onChange={this.handleDepartToSelection.bind(this)}
                                    onInputChange={searchTerm => this.handleSearchAirports(searchTerm)}
                                    options={options}
                                    searchable
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
                                <DatePicker
                                    name="departDepartureDate"
                                    selected={moment(this.state.departDepartureDate)}
                                    onChange={this.handleDepartDepartureDateChange.bind(this)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="LLL"
                                    placeholderText="Select date/time"
                                />
                            </div>

                            <div className="ct-flight__form--unit">
                                <label htmlFor="departArrivalDate">Arrival Date</label>
                                <DatePicker
                                    name="departArrivalDate"
                                    selected={moment(this.state.departArrivalDate)}
                                    onChange={this.handleDepartArrivalDateChange.bind(this)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="LLL"
                                    placeholderText="Select date/time"
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Return</legend>
                        <div className="ct-flight__form--return">
                            <div className="ct-flight__form--unit ct-flight__form--airportSearch">
                                {error}
                                <label htmlFor="returnFrom">From</label>
                                <Select
                                    name="returnFrom"
                                    value={this.state.selectedReturnFromOption}
                                    onChange={this.handleReturnFromSelection.bind(this)}
                                    onInputChange={searchTerm => this.handleSearchAirports(searchTerm)}
                                    options={options}
                                    searchable
                                />
                            </div>
                            <div className="ct-flight__form--unit ct-flight__form--airportSearch">
                                <label htmlFor="returnTo">To</label>
                                <Select
                                    name="returnTo"
                                    value={this.state.selectedReturnToOption}
                                    onChange={this.handleReturnToSelection.bind(this)}
                                    onInputChange={searchTerm => this.handleSearchAirports(searchTerm)}
                                    options={options}
                                    searchable
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
                                <DatePicker
                                    name="returnDepartureDate"
                                    selected={moment(this.state.returnDepartureDate)}
                                    onChange={this.handleReturnDepartureDateChange.bind(this)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="LLL"
                                    placeholderText="Select date/time"
                                />
                            </div>
                            <div className="ct-flight__form--unit">
                                <label htmlFor="returnArrivalDate">Arrival Date</label>
                                <DatePicker
                                    name="returnArrivalDate"
                                    selected={moment(this.state.returnArrivalDate)}
                                    onChange={this.handleReturnArrivalDateChange.bind(this)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="LLL"
                                    placeholderText="Select date/time"
                                />
                            </div>
                        </div>
                    </fieldset>
                    <div className="ct-next-skip">
                        <button type="button" className="ct-buildGroup__skip skip" onClick={this.handleSkip.bind(this)}>Skip</button>
                        <button type="submit" className="ct-buildGroup__next next" disabled={this.props.pristine || this.props.submitting}>
                            Next
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.searchAirports.list
});

const connectedForm = connect(mapStateToProps)(FlightDetailsForm);

export default reduxForm({
    form: 'flightDetails'
})(connectedForm);
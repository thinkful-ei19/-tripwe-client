import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { addPlan, createNewPlan } from '../actions/plans';
import Input from './input';

import 'react-datepicker/dist/react-datepicker.css';

export class PlansForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: this.props.startDate || moment().format(),
            description: '',
            link: ''
        };

        this.formRef = React.createRef();
        this.dateRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.newPlanFormDisplayHandler = this.newPlanFormDisplayHandler.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    newPlanFormDisplayHandler() {
        //  console.log(this.formRef.style.display);
    }

    onSubmit(values) {
        values.date = this.state.startDate.utc().format();
        values.tripId = this.tripId;
        console.log(values.date);
        this.props.dispatch(createNewPlan(values));
    }

    render() {
        this.tripId = this.props.tripId;
        const createPlansForm = (
            <form
                ref={this.formRef}
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                className="ct-plans__form"
            >
                <div className="ct-plans__form--unit">
                    <label htmlFor="planDate">Date</label>
                    <DatePicker
                        selected={moment(this.state.startDate)}
                        onChange={this.handleChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        dateFormat="LLL"
                        timeIntervals={15}
                        placeholderText="Click to select a date"
                        ref={this.dateRef}
                        name="planDate"
                    />
                </div>
                <div className="ct-plans__form--unit">
                    <label htmlFor="name">Plan</label>
                    <Field
                        name="description"
                        id="description"
                        type="text"
                        component={Input}
                        placeholder="What is the plan?"
                    />
                </div>
                <div className="ct-plans__form--unit">
                    <label htmlFor="message">Enter Tripadvisor link</label>
                    <Field
                        name="link"
                        id="link"
                        component={Input}
                        placeholder="Enter TripAdvisor Link"
                    />
                </div>
                <button className="ct-plans__form--button" type="submit">Save</button>
            </form>
        );
        return (
            <div className="ct-plans ct-card">
                <div className="ct-plans__header">
                    <p className="ct-plans__header--text">Plans</p>
                </div>
                <div>{createPlansForm}</div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'plans'
})(PlansForm);

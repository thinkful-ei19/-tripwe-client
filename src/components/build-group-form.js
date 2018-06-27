import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "./input";
import { nextStep } from "../actions/create-new-trip";
import { createNewGroup } from "../actions/create-new-trip";

class BuildGroupForm extends Component {

    onSubmit(values) {
        let completedValues = {};
        completedValues.emails = [];

        for (let email in values) {
            completedValues.emails.push(values[email]);
        }
        this.props.dispatch(createNewGroup(completedValues));
        // send one object with key of email and value of array of emails.
        // endpoint /trips/:id/group --> POST 
    }
    // send one object with key of email and value of array of emails.
    // endpoint /trips/:id/group --> POST

    handleSkip() {
        this.props.dispatch(nextStep());
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
            <div className="ct-buildGroup ct-card">
                <div className="ct-buildGroup__header ct-header">
                    <p className="ct-buildGroup__header--text">Build Your Group</p>
                </div>
                <form
                    className="ct-buildGroup__form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    {error}
                    <label htmlFor="email1">Email</label>
                    <Field component={Input} type="email" name="email1" id="email1" />
                    <Field component={Input} type="email" name="email2" />
                    <Field component={Input} type="email" name="email3" />
                    <button type="button" className="ct-buildGroup__add">
                        Add
          </button>
                    <div className="ct-next-skip">
                        <button
                            type="button"
                            className="ct-buildGroup__skip skip"
                            onClick={this.handleSkip.bind(this)}
                        >
                            Skip
            </button>
                        <button
                            type="submit"
                            className="ct-buildGroup__next next"
                            disabled={this.props.pristine || this.props.submitting}
                        >
                            Next
            </button>
                    </div>
                </form>
            </div>
        );
    }
}

const connectedForm = connect()(BuildGroupForm);

export default reduxForm({
    form: "buildGroup"
})(connectedForm);

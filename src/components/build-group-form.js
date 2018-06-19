import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';


class BuildGroupForm extends Component {

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
            <div className="ct-buildGroup ct-card">
                <div className="ct-buildGroup__header ct-header">
                    <p className="ct-buildGroup__header--text">Build Your Group</p>
                </div>
                <form
                    className="ct-buildGroup__form"
                    onSubmit={this.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    {error}
                    <label htmlFor="email1">Email</label>
                    <Field
                        component={Input}
                        type="email"
                        name="email1"
                        id="email1"
                    />
                    <Field
                        component={Input}
                        type="email"
                        name="email2"
                    />
                    <Field
                        component={Input}
                        type="email"
                        name="email3"
                    />
                    <button className="ct-buildGroup__add">Add</button>
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
    form: 'buildGroup'
})(BuildGroupForm);
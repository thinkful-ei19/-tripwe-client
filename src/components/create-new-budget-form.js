import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { createNewBudget } from '../actions/create-new-trip';


class CreateNewBudgetForm extends Component {

    onSubmit(values) {
        const completeValues = {
            available: values.totalBudget
        };

        this.props.dispatch(createNewBudget(completeValues));
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
            <div className="ct-budget ct-card">
                <div className="ct-budget__header ct-header">
                    <p className="ct-budget__header--text">Budget</p>
                </div>
                <form
                    className="ct-budget__form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    {error}
                    <label htmlFor="totalBudget">Total Budget</label>
                    <Field
                        component={Input}
                        type="text"
                        name="totalBudget"
                        id="totalBudget"
                    />
                    <label htmlFor="expense1">Expenses</label>
                    <Field
                        component={Input}
                        type="text"
                        name="expense1"
                        id="expense1"
                    />
                    <Field
                        component={Input}
                        type="text"
                        name="expense2"
                    />
                    <Field
                        component={Input}
                        type="text"
                        name="expense3"
                    />
                    <button className="ct-budget__add">Add</button>
                    <div className="ct-next-skip">
                        {/* <button className="ct-budget__skip skip">Skip</button> */}
                        <button className="ct-budget__next next" disabled={this.props.pristine || this.props.submitting}>
                            Finish
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

export default reduxForm({
    form: 'budgetForm'
})(CreateNewBudgetForm);
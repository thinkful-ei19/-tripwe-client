import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { addBudget } from '../actions/budget';


class BudgetForm extends Component {

    onBudgetSubmit(values) {
        const newBudget = {
            amount: values.expense1,
            description: values.totalBudget,
            id: this.props.id
        };
        this.props.dispatch(addBudget(newBudget))
    }

    onExpencesSubmit(values) {
        const newBudget = {
            amount: -values.expense1,
            description: values.totalBudget,
            id: this.props.id
        };
        this.props.dispatch(addBudget(newBudget))
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
                <form className="ct-budget__form">
                    {error}
                    <label htmlFor="totalBudget">Description</label>

                    <Field
                        component={Input}
                        type="text"
                        name="totalBudget"
                        id="totalBudget"
                    />

                    <label htmlFor="expense1">Amount</label>
                    <Field
                        component={Input}
                        type="text"
                        name="expense1"
                        id="expense1"
                    />

                    <div className="ct-next-skip">
                        <button className="ct-budget__skip skip"
                            onClick={this.props.handleSubmit(values =>
                                this.onBudgetSubmit(values))}
                        >Budget Contribution
                        </button>

                        <button className="ct-budget__next next"
                            onClick={this.props.handleSubmit(values =>
                                this.onExpencesSubmit(values))}
                        >Add Expences</button>
                    </div>
                </form>

            </div>
        );
    }
}


export default reduxForm({
    form: 'buildGroup'
})(BudgetForm);

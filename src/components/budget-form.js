import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { addBudget } from '../actions/budget'


class BudgetForm extends Component {

    onBudgetSubmit(values) {
      const newBudget = {
        available: values.totalBudget,
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
                    {this.props.newBudget.transactions ?
                      <label htmlFor="totalBudget">Add Group Budget</label>
                      : <label htmlFor="totalBudget">Total Budget</label>}
                    <Field
                        component={Input}
                        type="text"
                        name="totalBudget"
                        id="totalBudget"
                    />
                    <div className="ct-next-skip">
                        <button className="ct-budget__skip skip"
                        onClick={this.props.handleSubmit(values =>
                          this.onBudgetSubmit(values))}
                        >Add Budget</button>

                        {this.props.newBudget.transactions ?
                          null
                        : <button className="ct-budget__next next">Add Expences</button> }
                    </div>
                </form>

            </div>
        );
    }
}


export default reduxForm({
    form: 'buildGroup'
})(BudgetForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BudgetForm from './budget-form';
import { showExpencesForm, deleteBudgetById } from '../actions/budget';

class BudgetList extends Component {
    render() {
        const budgets = this.props.budgets.transactions.map(transaction => {

            return (
                <tr className="" key={transaction.id}>
                    <td className="budget__table--unit">{transaction.amount}</td>
                    <td className="budget__table--unit">
                        {transaction.description}
                        <button className="budget__table--delete" onClick={() => this.props.dispatch(deleteBudgetById(transaction.id, this.props.id, transaction.amount))}>X</button>
                    </td>

                </tr>
            );
        });
        return (
            <tbody>
                {budgets}
            </tbody>
        );
    }
}
const mapStateToProps = state => {
    return {
        showExpencesForm: state.budget.showExpencesForm
    };
};

export default (connect(mapStateToProps)(BudgetList));

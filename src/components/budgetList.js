import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBudgetsForm } from '../actions/budget';

class BudgetList extends Component {
    render() {
        const budgets = this.props.budgets.transactions.map(transaction => {

            return (
                <tr className="budget__table--row" key={transaction.id}>
                    <td className="budget__table--unit">{transaction.amount}</td>
                    <td className="budget__table--unit">{transaction.description}</td>
                </tr>
            );
        });
        return (
            <tbody>
                {budgets}
                <tr>
                    <td className="budget__table--unit">
                        <button className="budget__table--add" onClick={() => this.props.dispatch(showBudgetsForm())}>Add Expense</button>
                    </td>
                </tr>
            </tbody>
        );
    }
}
const mapStateToProps = state => {
    return {
        showBudgetsForm: state.budget.showBudgets
    };
};

export default (connect(mapStateToProps)(BudgetList));

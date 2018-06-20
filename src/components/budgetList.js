import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showBudgetsForm } from '../actions/budget'

class BudgetList extends Component {
  render(){
    const budgets = this.props.budgets.transactions.map(transaction => {

      return (
          <tr className="" key={transaction.id}>
              <td className="">{transaction.amount}</td>
              <td className="">{transaction.description}</td>
          </tr>
      );
    });
  return (
          <tbody>
              {budgets}
              <button onClick={() => this.props.dispatch(showBudgetsForm())}>Add Expense</button>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BudgetForm from './budget-form';
import { showExpencesForm, deleteBudgetById } from '../actions/budget';

class BudgetList extends Component {
  render(){
    const budgets = this.props.budgets.transactions.map(transaction => {

      return (
          <tr className="" key={transaction.id}>
              <td className="">{transaction.amount}</td>
              <td className="">{transaction.description}</td>
              <button onClick={() => this.props.dispatch(deleteBudgetById(transaction.id, transaction.amount))}>X</button>
          </tr>
      );
    });
  return (
        <div>
          <tbody>
              {budgets}
          </tbody>
          {
            this.props.showExpencesForm ?
          <BudgetForm newBudget={this.props.budgets} id={this.props.id}/>
          : null
          }
        </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        showExpencesForm: state.budget.showExpencesForm
    };
};

export default (connect(mapStateToProps)(BudgetList));

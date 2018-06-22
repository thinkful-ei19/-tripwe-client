import React, { Component } from 'react';
import BudgetList from './budget-list';
import BudgetForm from './budget-form';
import { connect } from 'react-redux';
import {
  showBudgets,
  hideBudgets,
  showNewBudgetForm
} from '../actions/budget'

class Budget extends Component {
render(){
  console.log(this.props, "PROPS")
return (
    <table className="">
        <thead>
            <tr className="">
                <th>Trip Budget</th>
                  {
                    this.props.budgets.total ?

                      <div>
                        <th>{this.props.budgets.total}</th>
                        <button onClick={() => { this.props.showBudgets ?
                        this.props.dispatch(hideBudgets())
                        : this.props.dispatch(showBudgets()) }}>Details</button>
                      </div>

                    : <button onClick={() => this.props.dispatch(showNewBudgetForm())}>Add Budget</button>
                  }

                {
                  this.props.showNewBudgetForm ?
                <BudgetForm newBudget={this.props.budgets} id={this.props.id}/>
                : null
                }

            </tr>
        </thead>
        <tbody>
        { this.props.showBudgets ?
          <BudgetList budgets={this.props.budgets} id={this.props.id}/>
          : null }
        </tbody>
    </table>
  );
}
}

const mapStateToProps = state => {
    return {
        showBudgets: state.budget.showBudgets,
        showNewBudgetForm: state.budget.showNewBudgetForm
    };
};

export default (connect(mapStateToProps)(Budget));

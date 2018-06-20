import React, { Component } from 'react';
import BudgetList from './budgetList';
import { connect } from 'react-redux'
import { showBudgets, hideBudgets } from '../actions/budget'

class Budget extends Component {
render(){
return (
    <table className="">
        <thead>
            <tr className="">
                <th>Trip Budget</th>
                <th>{this.props.budgets[0].available}</th>
                <button onClick={() => { this.props.showBudgets ?
                  this.props.dispatch(hideBudgets())
                  : this.props.dispatch(showBudgets()) }}>Details</button>
            </tr>
        </thead>
        <tbody>
        { this.props.showBudgets ?
        <BudgetList budgets={this.props.budgets}/>
        : null }
        </tbody>
    </table>
  );
}
}

const mapStateToProps = state => {
    return {
        showBudgets: state.budget.showBudgets
    };
};

export default (connect(mapStateToProps)(Budget));

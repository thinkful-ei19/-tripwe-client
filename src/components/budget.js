import React, { Component } from "react";
import BudgetList from "./budget-list";
import BudgetForm from "./budget-form";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import { showBudgets, hideBudgets, showExpencesForm } from "../actions/budget";

ReactModal.setAppElement("#root");

class Budget extends Component {
  render() {
    return (
      <div>
        <table className="budget__table">
          <thead className="budget__table--head">
            <tr className="budget__table--row">
              <th>Trip Budget</th>
              {this.props.budgets.total ? (
                <th>
                  <span className="budget__table--total">
                    {this.props.budgets.total}
                  </span>
                  <button
                    className="budget__table--toggle budget__table--details"
                    onClick={() => {
                      this.props.showBudgets
                        ? this.props.dispatch(hideBudgets())
                        : this.props.dispatch(showBudgets());
                    }}
                  >
                    Details
                  </button>
                </th>
              ) : (
                <th>
                  <button
                    className="budget__table--toggle"
                    onClick={() => this.props.dispatch(showExpencesForm())}
                  >
                    Add Budget
                  </button>
                </th>
              )}

            </tr>
          </thead>
          {this.props.showBudgets ? (
            <BudgetList budgets={this.props.budgets} id={this.props.id} />
          ) : null}
        </table>

                {this.props.showExpencesForm ? (
                    <ReactModal
                        isOpen={true}
                        className="form-modal"
                        overlayClassName="form-modal__overlay"
                    >
                        <BudgetForm newBudget={this.props.budgets} id={this.props.id} />
                    </ReactModal>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showBudgets: state.budget.showBudgets,
        showNewBudgetForm: state.budget.showNewBudgetForm,
        showExpencesForm: state.budget.showExpencesForm
    };
};

export default connect(mapStateToProps)(Budget);

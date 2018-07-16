import React from "react";
import Moment from "react-moment";
import PlansForm from "./plans-form";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import { showPlanForm, deletePlansById } from "../actions/plans";
import { updatePlanRequest } from "../actions/edit-plan";
import EditPlan from "./edit-plan-form";

class Plans extends React.Component {
  render() {
    const plans = this.props.plans.map((obj, index) => {
      return (
        <tr className="plans__table--row" key={index}>
          <td onDoubleClick={() => this.props.dispatch(updatePlanRequest())}>
            {this.props.editPlanForm ? (
              <EditPlan
                date={obj.date}
                description={obj.description}
                id={obj.id}
              />
            ) : (
              <Moment format="MM/DD/YYYY HH:mm:ss">{obj.date}</Moment>
            )}
          </td>
          {this.props.editPlanForm ? null : (
            <td className="plans__table--plan">
              {obj.link ? (
                <a href={obj.link} target="_blank">
                  {obj.description}{" "}
                </a>
              ) : (
                obj.description
              )}
              <button
                className="delete-item plans__table--delete"
                onClick={() => this.props.dispatch(deletePlansById(obj.id))}
              >
                X
              </button>
            </td>
          )}
        </tr>
      );
    });
    return (
      <div>
        <table className="plans__table">
          <thead className="plans__table--head">
            <tr>
              <th>Date</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>{plans}</tbody>
        </table>
        <button
          className="group__button"
          onClick={() => this.props.dispatch(showPlanForm(true))}
        >
          Add Plan
        </button>
        {this.props.isPlanFormHidden ? (
          <ReactModal
            isOpen={true}
            className="form-modal"
            overlayClassName="form-modal__overlay"
          >
            <PlansForm newPlan={this.props.plans} tripId={this.props.tripId} />
          </ReactModal>
        ) : null}
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    isPlanFormHidden: state.plan.isPlanFormHidden,
    editPlanForm: state.editPlan.editPlanForm
  };
};

export default connect(mapStatetoProps)(Plans);

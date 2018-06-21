import React from 'react';
import { connect } from 'react-redux';
import { SHOW_DETAILS, showDetails } from '../actions/accommodations';

class Accommodations extends React.Component {
    render() {
        const accommodations = this.props.accommodations.map((obj, index) => {
            const { address, reference, arrival, departure, phone, id } = obj;
      var users = "";
      obj.users.forEach(function(user) {
        users += user.fullname + ",";
      });
      users = users && users.substring(0, users.length - 1);
      return (
        <tbody>
          <tr className="accommodations__row" key={index}>
            <td className="accommodations__row--acc">
              {obj.name}
              <i
                onClick={() => this.props.dispatch(showDetails(id))}
                className="fas fa-info-circle g-member__info--icon"
              />
            </td>
            <td className="accommodations__row--users">{users}</td>
          </tr>
          <tr>
            <td colSpan="2">
              {this.props.showAccDetails === id &&
              !this.props.isAccDetailsHidden ? (
                <table className="accommodations__table">
                  <tbody>
                    <tr>
                      <td className="accommodations__row--acc">Address</td>
                      <td>{address}</td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">
                        Booking Number
                      </td>
                      <td>{reference}</td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">Arrival Date</td>
                      <td>{arrival}</td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">
                        Departure Date
                      </td>
                      <td>{departure}</td>
                    </tr>
                    <tr>
                      <td className="accommodations__row--acc">
                        Contact Number
                      </td>
                      <td>{phone}</td>
                    </tr>
                  </tbody>
                </table>
              ) : null}
            </td>
          </tr>
        </tbody>
      );
    });
    return (
      <table className="accommodations__table">
        <thead>
          <tr className="accommodations__table--head">
            <th>Accommodations</th>
            <th>People</th>
          </tr>
        </thead>
        {accommodations}
      </table>
    );
  }
}
const mapStatetoProps = state => {
  //   console.log("component: ");
  //   console.log(state);
  return {
    showAccDetails: state.accommodation.showAccDetails,
    isAccDetailsHidden: state.accommodation.isAccDetailsHidden
  };
};

export default connect(mapStatetoProps)(Accommodations);

import React from "react";
import { connect } from "react-redux";

class FlightDetails extends React.Component {
  render() {
      return (
        <tbody>
          <tr>
            <td>
            </td>
          </tr>
        </tbody>
      );
    }
}
const mapStatetoProps = state => {
  return {
    showAccDetails: state.accommodation.showAccDetails
  };
};
export default connect(mapStatetoProps)(Accommodations);

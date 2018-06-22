import React from 'react';
import { connect } from 'react-redux';
import { SHOW_DETAILS, showDetails } from '../actions/accommodations';

class Accommodations extends React.Component {
    render() {
        const accommodations = this.props.accommodations.map((obj, index) => {
            const { address, reference, arrival, departure, phone, id } = obj;

            var users = "";
            obj.users.forEach(function (user) {
                users += user.fullname + ",";
            });
            users = users && users.substring(0, users.length - 1);
            return (
                <tr className="accommodations__row" key={index}>
                    <td className="accommodations__row--acc">
                        {obj.name}
                        <i
                            onClick={() => this.props.dispatch(showDetails(id))}
                            className="fas fa-info-circle g-member__info--icon"
                        />
                    </td>
                    <td className="accommodations__row--users">{users}</td>
                    {this.props.showAccDetails === id ? (
                        <tr colspan="2">
                            <td colspan="2" className="accommodations__row--acc">
                                Address:{address}
                            </td>
                            <tr>
                                <td colspan="2" className="accommodations__row--acc">
                                    Booking Number:{reference}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" className="accommodations__row--acc">
                                    Arrival Date:{arrival}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" className="accommodations__row--acc">
                                    Departure Date:{departure}
                                </td>
                            </tr>
                            <tr>
                                <td colspan className="accommodations__row--acc">
                                    Contact Number:{phone}
                                </td>
                            </tr>
                        </tr>
                    ) : null}
                </tr>
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
                <tbody>{accommodations}</tbody>
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

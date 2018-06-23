import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import {
    SHOW_DETAILS,
    showDetails,
    SHOW_ACCOMMODATIONS_FORM,
    showAccommodationsForm
} from '../actions/accommodations';
import AccommodationForm from './accommodation-form';

class Accommodations extends React.Component {
    render() {
        //console.log(this.props.tripId);

        //console.log(this.props.isPlanFormHidden);
        const accommodations = this.props.accommodations.map((obj, index) => {
            const { address, reference, arrival, departure, phone, id } = obj;

            var users = '';
            obj.users.forEach(function (user) {
                users += user.fullname + ',';
            });
            users = users && users.substring(0, users.length - 1);

            return (
                <tbody key={index}>
                    <tr className="accommodations__row">
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
            <div>
                <table className="accommodations__table">
                    <thead>
                        <tr className="accommodations__table--head">
                            <th>Accommodations</th>
                            <th>People</th>
                        </tr>
                    </thead>
                    {accommodations}
                </table>
                <button
                    onClick={() => this.props.dispatch(showAccommodationsForm(true))}
                    className="group__button"
                >
                    Add Accommodations
                </button>
                {this.props.isAccFormHidden ? (
                    <ReactModal
                        isOpen={true}
                        className="form-modal"
                        overlayClassName="form-modal__overlay"
                    >
                        <AccommodationForm
                            newAccommodation={this.props.accommodations}
                            id={this.props.tripId}
                        />
                    </ReactModal>
                ) : null}
            </div>
        );
    }
}
const mapStatetoProps = state => {
    //   console.log("component: ");
    // console.log(state);
    return {
        showAccDetails: state.accommodation.showAccDetails,
        isAccDetailsHidden: state.accommodation.isAccDetailsHidden,
        isAccFormHidden: state.accommodation.isAccFormHidden
    };
};

export default connect(mapStatetoProps)(Accommodations);

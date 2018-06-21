import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateNewTripForm from './create-new-trip-form';
import BuildGroupForm from './build-group-form';
import FlightDetailsForm from './flight-details-form';
import CreateNewAccommodationsForm from './create-new-accommodations-form';
import CreateNewBudgetForm from './create-new-budget-form';

class DashboardCreateNewTrip extends Component {
    render() {
        let currentForm;
        switch (this.props.step) {
            case 1:
                currentForm = <CreateNewTripForm />;
                break;
            case 2:
                currentForm = <BuildGroupForm />;
                break;
            case 3:
                currentForm = <FlightDetailsForm />;
                break;
            case 4:
                currentForm = <CreateNewAccommodationsForm />;
                break;
            case 5:
                currentForm = <CreateNewBudgetForm />;
                break;
        }

        return (
            <div className="d-createNew">
                {currentForm}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    step: state.createNewTrip.step
});

export default connect(mapStateToProps)(DashboardCreateNewTrip);
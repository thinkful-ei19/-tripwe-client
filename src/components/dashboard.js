import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashboardNavigation from './dashboard-navigation';
import DashboardContent from './dashboard-content';
import { fetchTripData } from "../actions/trip";
import { createNewTripInit } from '../actions/create-new-trip';
import DashboardCreateNewTrip from './dashboard-create-new-trip';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTripData());
    }

    handleAddNew() {
      console.log("called")
        this.props.dispatch(createNewTripInit());
    }

    render() {
      if(!this.props.closestTrip){
        this.handleAddNew()
      }
        return (
            <div className="dashboard">
                <DashboardNavigation />
                {
                   this.props.isCreatingNewTrip || !this.props.closestTrip ? <DashboardCreateNewTrip /> : <DashboardContent />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
  console.log(state, "YES")
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        closestTrip: state.trip.closestTrip,
        isCreatingNewTrip: state.createNewTrip.isCreatingNewTrip
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

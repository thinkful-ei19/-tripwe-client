import {
    FETCH_TRIP_DATA_SUCCESS,
    FETCH_TRIP_DATA_ERROR,
} from '../actions/trip';

const initialState = {
    closestTrip: {
        group: [],
        trip: {
            description: ''
        }
    },
    upcomingTrips: '',
    previousTrips: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_TRIP_DATA_SUCCESS) {
        console.log(action.data.upcomingTrips);
        return Object.assign({}, state, {
            closestTrip: action.data.closestTrip,
            upcomingTrips: action.data.upcomingTrips,
            previousTrips: action.data.previousTrips,
            error: null
        });
    } else if (action.type === FETCH_TRIP_DATA_ERROR) {
        console.log(action, 'ACTION ERROR');
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}

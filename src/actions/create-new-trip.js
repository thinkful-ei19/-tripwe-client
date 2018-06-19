import { API_BASE_URL } from '../config';

export const CREATE_NEW_TRIP_INIT = 'CREATE_NEW_TRIP_INIT';
export const createNewTripInit = () => ({
    type: CREATE_NEW_TRIP_INIT
});

export const CANCEL_NEW_TRIP_INIT = 'CANCEL_NEW_TRIP_INIT';
export const cancelNewTripInit = () => ({
    type: CANCEL_NEW_TRIP_INIT
});

export const createNewTrip = data => dispatch => {
    console.log(data);
};
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_TRIP_DATA_SUCCESS = 'FETCH_TRIP_DATA_SUCCESS';
export const fetchTripDataSuccess = data => ({
    type: FETCH_TRIP_DATA_SUCCESS,
    data
});

export const FETCH_TRIP_DATA_ERROR = 'FETCH_TRIP_DATA_ERROR';
export const fetchTripDataError = error => ({
    type: FETCH_TRIP_DATA_ERROR,
    error
});

export const ADD_PLAN = 'ADD_PLAN'
export const addPlan = (data) => ({
    type: ADD_PLAN,
    data
});

export const CREATE_PLAN_REQUEST = 'CREATE_PLAN_REQUEST';
export const createPlanRequest = () => ({
    type: CREATE_PLAN_REQUEST
});

export const fetchTripData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/dashboard`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            return dispatch(fetchTripDataSuccess(data))
        })
        .catch(err => {
            dispatch(fetchTripDataError(err));
        });
};

export const createPlan = (newPlan) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
//    dispatch(createPlanRequest());

    fetch(`${API_BASE_URL}/trips/${newPlan.tripId}/plans`, {
        method: 'POST',
        body: JSON.stringify(newPlan),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            newPlan.id = res; 
            dispatch(addPlan(newPlan))
        })
        .catch(err => {
            // dispatch(createPlanError(err));
        })
};

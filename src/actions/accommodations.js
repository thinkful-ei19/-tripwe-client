import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_ACCOMMODATIONS_DATA_SUCCESS = 'FETCH_ACCOMMODATIONS_DATA_SUCCESS';
export const fetchAccommodationsDataSuccess = data => ({
    type: FETCH_ACCOMMODATIONS_DATA_SUCCESS,
    data
});

export const FETCH_ACCOMMODATIONS_DATA_ERROR = 'FETCH_ACCOMMODATIONS_DATA_ERROR';
export const fetchAccommodationsDataError = error => ({
    type: FETCH_ACCOMMODATIONS_DATA_ERROR,
    error
});

export const fetchAccommodationsData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/dashboard`, {
        method: 'GET',
        headers: {
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
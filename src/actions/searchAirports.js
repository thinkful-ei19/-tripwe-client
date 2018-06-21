import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const SET_SEARCH_AIRPORT_LIST = 'SET_SEARCH_AIRPORT_LIST';
export const setSearchAirportList = list => ({
    type: SET_SEARCH_AIRPORT_LIST,
    list
});

export const searchAirports = searchTerm => dispatch => {
    return fetch(`${API_BASE_URL}/airports?searchTerm=${searchTerm}`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            return res.json();
        })
        .then(res => {
            dispatch(setSearchAirportList(res));
        })
        .catch(err => {
            console.error(err);
        });
};
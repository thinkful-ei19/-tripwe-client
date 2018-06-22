import { API_BASE_URL } from '../config';

export const SHOW_FUTURE_TRIPS = 'SHOW_FUTURE_TRIPS'
export const showFutureTrips = () => ({
    type: SHOW_FUTURE_TRIPS
});

export const SHOW_PAST_TRIPS = 'SHOW_PAST_TRIPS'
export const showPastTrips = () => ({
    type: SHOW_PAST_TRIPS
});

export const RENDER_TRIP_SUCCESS = 'RENDER_FUTURE_TRIP_SUCCESS'
export const renderTripSuccess = data => ({
    type: RENDER_TRIP_SUCCESS,
    data
});

export const RENDER_TRIP_ERROR = 'RENDER_FUTURE_TRIP_ERROR'
export const renderTripError = () => ({
    type: RENDER_TRIP_ERROR
});

export const renderTrip = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/trips/${id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
          ) {
            return res.json().then(err => Promise.reject(err));
          }
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        return res.json();
      })
      .then(json => { dispatch(renderTripSuccess(json)) })
      .catch(err => {
        dispatch(renderTripError(err));
      })
};

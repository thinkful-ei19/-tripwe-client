import { API_BASE_URL } from '../config';

export const CREATE_NEW_INVITE_SUCCESS = 'CREATE_NEW_INVITE_SUCCESS';
export const createNewInviteSuccess = data => ({
    type: CREATE_NEW_INVITE_SUCCESS,
    data
});

export const CREATE_NEW_FLIGHT_SUCCESS = 'CREATE_NEW_FLIGHT_SUCCESS';
export const createNewFlightSuccess = data => ({
    type: CREATE_NEW_FLIGHT_SUCCESS,
    data
});

export const createInviteGroup = (data, tripId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/trips/${tripId}/group`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
        .then(json => {
            dispatch(createNewInviteSuccess({email: json}));
        })
        .catch(err => console.error(err));
};

export const createInviteFlight = (data, tripId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    // dispatch(createNewTripRequest());
    fetch(`${API_BASE_URL}/trips/${tripId}/flights`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
             return res.json()
        })
        .then(json => {
          dispatch(createNewFlightSuccess(json))})
        .catch(err => console.error(err));
};

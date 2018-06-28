import { API_BASE_URL } from '../config';

export const CREATE_NEW_INVITE_SUCCESS = 'CREATE_NEW_INVITE_SUCCESS';
export const createNewInviteSuccess = data => ({
    type: CREATE_NEW_INVITE_SUCCESS,
    data
});

export const createInviteGroup = (data, tripId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const trip_id = getState().createNewTrip.newTripId;
console.log(data, "data", tripId, "tripid")
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
          console.log(json, "JSON")
            dispatch(createNewInviteSuccess(json));
        })
        .catch(err => console.error(err));
};

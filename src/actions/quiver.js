import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';
import {normalizeResponseErrors} from './utils';

export const GET_QUIVER_REQUEST = 'GET_QUIVER_REQUEST';
export const getQuiverRequest = () => ({
    type: GET_QUIVER_REQUEST
});

export const GET_QUIVER_SUCCESS = 'GET_QUIVER_SUCCESS';
export const getQuiverSuccess = quiver => ({
    type: GET_QUIVER_SUCCESS,
    quiver
});

export const GET_QUIVER_ERROR = 'GET_QUIVER_ERROR';
export const getQuiverError = error => ({
    type: GET_QUIVER_ERROR,
    error
});

export const getQuiver = () => (dispatch, getState) => {
    const token = getState().auth.authToken;
    const username = getState().auth.currentUser.username;
    dispatch(getQuiverRequest());
    fetch(`${API_BASE_URL}/quiver/${username}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(quiver => dispatch(getQuiverSuccess(quiver)))
      .catch(error => dispatch(getQuiverError(error)))                      
}



//-------add a skiArea to the quiver------------// 

export const addSkiArea = skiAreaReq => (dispatch, getState) => {
    const token = getState().auth.authToken;
    const username = getState().auth.currentUser.username;
    console.log(skiAreaReq)
    fetch(`${API_BASE_URL}/quiver/${username}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(skiAreaReq)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {
            dispatch(getQuiver());
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
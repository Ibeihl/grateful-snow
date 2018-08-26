// import {API_BASE_URL} from '../config';
const API_BASE_URL = "http://api.worldweatheronline.com/premium/v1/ski.ashx?key=3cfb71ee64f2468ca7c211859182408&";

export const GET_REPORT_REQUEST = 'GET_REPORT_REQUEST';
export const getReportRequest = () => ({
    type: GET_REPORT_REQUEST
});

export const GET_REPORT_SUCCESS = 'GET_REPORT_SUCCESS';
export const getReportSuccess = report => ({
    type: GET_REPORT_SUCCESS,
    report
});

export const GET_REPORT_ERROR = 'GET_REPORT_ERROR';
export const getReportError = error => ({
    type: GET_REPORT_ERROR,
    error
});

export const getReport = (location) => (dispatch) => {
    // const token = getState().auth.authToken;
    dispatch(getReportRequest());
    fetch(`${API_BASE_URL}q=${location}&format=json&includeLocation=yes`, {
    })
      .then(res => res.json())
      .then(report => dispatch(getReportSuccess(report)))
      .catch(error => dispatch(getReportError(error)))                      
}

const SNOW_API_BASE_URL = "https://api.worldweatheronline.com/premium/v1/ski.ashx?key=1424100561214751b65202509182910&";

export const GET_QUIVER_REPORT_SUCCESS = 'GET_QUIVER_REPORT_SUCCESS';
export const getQuiverReportSuccess = quiverReport => ({
    type: GET_QUIVER_REPORT_SUCCESS,
    quiverReport
});

export const GET_QUIVER_REPORT_ERROR = 'GET_QUIVER_REPORT_ERROR';
export const getQuiverReportError = error => ({
    type: GET_QUIVER_REPORT_ERROR,
    error
});

export const GET_QUIVER_REPORT_REQUEST = 'GET_QUIVER_REPORT_REQUEST';
export const getQuiverReportRequest = () => ({
    type: GET_QUIVER_REPORT_REQUEST,
});

export const getQuiverReport = location => (dispatch) => {
    let results = [];
    let counter = 0;
    dispatch(getQuiverReportRequest());
    for(let i = 0; i < location.length; i++) {
        fetch(`${SNOW_API_BASE_URL}q=${location[i]}&format=json&includeLocation=yes`, {
        })
          .then(res => res.json())
          .then(skiArea => {
              results.push(skiArea);
          })
          .then(() => {
            if(counter === location.length - 1){
                dispatch(getQuiverReportSuccess(results))
                // console.log('successfully rendered empty results', results)
            }  
            counter++;
          })
          .catch(err => dispatch(getQuiverReportError(err)))  
    }
}


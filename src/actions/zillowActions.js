const apiUrl = '/api/'


export const fetchGetUpdatedPropertyDetails = zpid => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return dispatch => {
    dispatch(fetchGetUpdatedPropertyDetailsRequest());

    return fetch(
      apiUrl + 'properties/' + zpid + '/get-updated-property-details'
    )
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            dispatch(
              fetchGetUpdatedPropertyDetailsSuccess(
                data.data.response,
                data.message
              )
            );
          });
        } else {
          response.json().then(error => {
            dispatch(fetchGetUpdatedPropertyDetailsFailed(error));
          });
        }
      })
      .catch(err => console.log(err));
  }
};

export const fetchGetUpdatedPropertyDetailsRequest = () => {
  return {
    type: 'FETCH_GET_UPDATED_PROPERTY_DETAILS_REQUEST'
  }
};

//Sync action
export const fetchGetUpdatedPropertyDetailsSuccess = (
  get_zestimate,
  message
) => {
  return {
    type: 'FETCH_GET_UPDATED_PROPERTY_DETAILS_SUCCESS',
    get_zestimate: get_zestimate,
    message: message,
    receivedAt: Date.now
  }
};

export const fetchGetUpdatedPropertyDetailsFailed = error => {
  return {
    type: 'FETCH_GET_UPDATED_PROPERTY_DETAILS_FAILED',
    error
  }
};

//--------------------------------------------------------------------------------------

export const fetchGetDeepComps = zpid => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return dispatch => {
    dispatch(fetchGetDeepCompsRequest());

    return fetch(apiUrl + 'properties/' + zpid + '/get-deep-comps')
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            dispatch(fetchGetDeepCompsSuccess(data.data.response, data.message));
          });
        } else {
          response.json().then(error => {
            dispatch(fetchGetDeepCompsFailed(error));
          });
        }
      })
      .catch(err => console.log(err));
  }
};

export const fetchGetDeepCompsRequest = () => {
  return {
    type: 'FETCH_GET_DEEP_COMPS_REQUEST'
  }
};

//Sync action
export const fetchGetDeepCompsSuccess = (get_zestimate, message) => {
  return {
    type: 'FETCH_GET_DEEP_COMPS_SUCCESS',
    get_zestimate: get_zestimate,
    message: message,
    receivedAt: Date.now
  }
};

export const fetchGetDeepCompsFailed = error => {
  return {
    type: 'FETCH_GET_DEEP_COMPS_FAILED',
    error
  }
};

//--------------------------------------------------------------------------------------

export const fetchGetSearchResults = zpid => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return dispatch => {
    dispatch(fetchGetSearchResultsRequest());

    return fetch(apiUrl + 'properties/' + zpid + '/get-search-results')
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            dispatch(
              fetchGetSearchResultsSuccess(data.data.response, data.message)
            );
          });
        } else {
          response.json().then(error => {
            dispatch(fetchGetSearchResultsFailed(error));
          });
        }
      })
      .catch(err => console.log(err))
  }
};

export const fetchGetSearchResultsRequest = () => {
  return {
    type: 'FETCH_GET_SEARCH_RESULTS_REQUEST'
  }
};

//Sync action
export const fetchGetSearchResultsSuccess = (get_zestimate, message) => {
  return {
    type: 'FETCH_GET_SEARCH_RESULTS_SUCCESS',
    get_zestimate: get_zestimate,
    message: message,
    receivedAt: Date.now
  }
};

export const fetchGetSearchResultsFailed = error => {
  return {
    type: 'FETCH_GET_SEARCH_RESULTS_FAILED',
    error
  }
};

//--------------------------------------------------------------------------------------

//Async action
export const fetchGetZestimate = zpid => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return dispatch => {
    dispatch(fetchGetZestimateRequest());

    /*
    let data = fetch(apiUrl + 'get-zestimate');
    data
    .then(val => val.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
    */

    return fetch(apiUrl + 'properties/' + zpid + '/get-zestimate')
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            dispatch(fetchGetZestimateSuccess(data.data.response, data.message));
          });
        } else {
          response.json().then(error => {
            dispatch(fetchGetZestimateFailed(error));
          });
        }
      })
      .catch(err => console.log(err));
  }
};

export const fetchGetZestimateRequest = () => {
  return {
    type: 'FETCH_GET_ZESTIMATE_REQUEST'
  }
};

//Sync action
export const fetchGetZestimateSuccess = (get_zestimate, message) => {
  return {
    type: 'FETCH_GET_ZESTIMATE_SUCCESS',
    get_zestimate: get_zestimate,
    message: message,
    receivedAt: Date.now
  }
};

export const fetchGetZestimateFailed = error => {
  return {
    type: 'FETCH_GET_ZESTIMATE_FAILED',
    error
  }
};

//--------------------------------------------------------------------------------------

export const fetchGetChart = zpid => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return dispatch => {
    dispatch(fetchGetChartRequest());

    return fetch(apiUrl + 'properties/' + zpid + '/get-chart')
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            dispatch(fetchGetChartSuccess(data.data.response, data.message));
          });
        } else {
          response.json().then(error => {
            dispatch(fetchGetChartFailed(error));
          });
        }
      })
      .catch(err => console.log(err));
  }
};

export const fetchGetChartRequest = () => {
  return {
    type: 'FETCH_GET_CHART_REQUEST'
  }
};

//Sync action
export const fetchGetChartSuccess = (get_zestimate, message) => {
  return {
    type: 'FETCH_GET_CHART_SUCCESS',
    get_zestimate: get_zestimate,
    message: message,
    receivedAt: Date.now
  }
};

export const fetchGetChartFailed = error => {
  return {
    type: 'FETCH_GET_CHART_FAILED',
    error
  }
};

//--------------------------------------------------------------------------------------

export const fetchGetComps = zpid => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return dispatch => {
    dispatch(fetchGetCompsRequest());

    return fetch(apiUrl + 'properties/' + zpid + '/get-comps')
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            dispatch(fetchGetCompsSuccess(data.data.response, data.message));
          });
        } else {
          response.json().then(error => {
            dispatch(fetchGetCompsFailed(error));
          });
        }
      })
      .catch(err => console.log(err));
  }
};

export const fetchGetCompsRequest = () => {
  return {
    type: 'FETCH_GET_COMPS_REQUEST'
  }
};

//Sync action
export const fetchGetCompsSuccess = (get_zestimate, message) => {
  return {
    type: 'FETCH_GET_COMPS_SUCCESS',
    get_zestimate: get_zestimate,
    message: message,
    receivedAt: Date.now
  }
};

export const fetchGetCompsFailed = error => {
  return {
    type: 'FETCH_GET_COMPS_FAILED',
    error
  }
};

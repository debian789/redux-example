import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../constants'
import getDataApi from '../api'
export const selected_tab = (tabId) => {
    return {type: 'selected_tab', payload: tabId}
}

export const getData = () => {
    return {type: FETCHING_DATA}
}

export const getDateSuccess = (data) => {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export const getDateFailure = (data) => {
    return {type: FETCHING_DATA_FAILURE}
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(getData())
        getDataApi()
        .then(([response, json]) => {
            dispatch(getDateSuccess(json))
        })
        .catch((error) => console.log(error))
    }

}

import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../constants'

export const selected_tab = (tabId) => {
    return {type: 'selected_tab', payload: tabId}
}

export const getDate = () => {
    return {type: FETCHING_DATA}
}

export const getDateSuccess = (data) => {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export const getDateFailure = (data) => {
    return {type: FETCHING_DATA_FAILURE}
}

export const fetchData = () => {
    // return function 
}

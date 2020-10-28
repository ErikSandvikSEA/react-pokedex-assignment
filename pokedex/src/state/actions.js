// from packages 
import axios from 'axios'

// from files 
import { baseURL151 } from '../constants/urls'

export const FETCH_BASE_LIST_START = `FETCH_BASE_LIST_START`
export const FETCH_BASE_LIST_SUCCESS = `FETCH_BASE_LIST_SUCCESS`
export const FETCH_BASE_LIST_FAILURE = `FETCH_BASE_LIST_FAILURE`

export const fetchBaseList = () => {
    return dispatch => {
        dispatch({ type: FETCH_BASE_LIST_START })
        axios
            .get(baseURL151)
            .then(res => {
                console.log(res)
                dispatch({
                    type: FETCH_BASE_LIST_SUCCESS,
                    payload: res.data.results
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: FETCH_BASE_LIST_FAILURE,
                    payload: err
                })
            })
    }
}


// from packages 
import axios from 'axios'

// from files 
import { baseURL151, baseURL } from '../constants/urls'

export const FETCH_BASE_LIST_START = `FETCH_BASE_LIST_START`
export const FETCH_BASE_LIST_SUCCESS = `FETCH_BASE_LIST_SUCCESS`
export const FETCH_BASE_LIST_FAILURE = `FETCH_BASE_LIST_FAILURE`

export const FETCH_DETAILED_LIST_START = `FETCH_DETAILED_LIST_START`
export const FETCH_DETAILED_LIST_SUCCESS = `FETCH_DETAILED_LIST_SUCCESS`
export const FETCH_DETAILED_LIST_FAILURE = `FETCH_DETAILED_LIST_FAILURE`

export const fetchPokemonList = () => {
    return dispatch => {
        dispatch({ type: FETCH_BASE_LIST_START })
        axios
            .get(baseURL151)
            .then(res => {
                const baseList = res.data.results
                const detailedList = []
                for(const pokemon of baseList){
                    axios
                        .get(`${baseURL}${pokemon.name}`)
                        .then(res => {
                            detailedList.push(res.data)
                            if(detailedList.length === 151){

                                detailedList.sort(function(a, b) { 
                                    return a.id - b.id  ||  a.name.localeCompare(b.name);
                                  });


                                dispatch({
                                    type: FETCH_DETAILED_LIST_SUCCESS,
                                    payload: detailedList
                                })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            dispatch({
                                type: FETCH_DETAILED_LIST_FAILURE,
                                payload: err
                            })
                        })
                }

                dispatch({
                    type: FETCH_BASE_LIST_SUCCESS,
                    payload: baseList
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


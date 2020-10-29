//import actions
import {
    FETCH_BASE_LIST_FAILURE,
    FETCH_BASE_LIST_START,
    FETCH_BASE_LIST_SUCCESS
} from './actions'

//initialState
const initialState = {
    basePokemonList: [],
    isFetching: false,
    effor: false,
    errorMessage: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BASE_LIST_START:
            return {
                ...state,
                isFetching: true,
                error: false,
                errorMessage: ""
            }
        case FETCH_BASE_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                errorMessage: "",
                basePokemonList: action.payload
            }
        case FETCH_BASE_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            }
         default:
              return state
    }
}
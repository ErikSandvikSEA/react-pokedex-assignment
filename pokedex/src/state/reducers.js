//import actions
import {
	FETCH_BASE_LIST_FAILURE,
	FETCH_BASE_LIST_START,
	FETCH_BASE_LIST_SUCCESS,
	FETCH_DETAILED_LIST_FAILURE,
	FETCH_DETAILED_LIST_SUCCESS,
    FETCH_DETAILED_LIST_START,
    FETCH_SINGLE_POKEMON_FAILURE,
    FETCH_SINGLE_POKEMON_START,
    FETCH_SINGLE_POKEMON_SUCCESS
} from './actions'

//initialState
const initialState = {
	basePokemonList: [],
	isFetching: false,
	error: false,
	errorMessage: '',
    detailedList: [],
    singlePokemon: {},
    isFetchingSingle: false,
    singleFetchError: false,
    singleFetchErrorMessage: ``,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BASE_LIST_START:
			return {
				...state,
				isFetching: true,
				error: false,
				errorMessage: '',
			}
		case FETCH_BASE_LIST_SUCCESS:
			return {
				...state,
				error: false,
				errorMessage: '',
				basePokemonList: action.payload,
			}
		case FETCH_BASE_LIST_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true,
				errorMessage: action.payload,
			}
		case FETCH_DETAILED_LIST_START:
			return {
				...state,
				isFetching: true,
				error: false,
				errorMessage: '',
			}
		case FETCH_DETAILED_LIST_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: false,
				errorMessage: '',
				detailedList: action.payload,
			}
		case FETCH_DETAILED_LIST_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true,
				errorMessage: action.payload,
            }
        case FETCH_SINGLE_POKEMON_START:
            return {
                ...state,
                isFetchingSingle: true,
                singleFetchError: false,
                singleFetchErrorMessage: ``,
            }
        case FETCH_SINGLE_POKEMON_SUCCESS:
            return {
                ...state,
                isFetchingSingle: false,
                singleFetchError: false,
                singleFetchErrorMessage: ``,
                singlePokemon: action.payload,
            }
        case FETCH_SINGLE_POKEMON_FAILURE:
            return {
                ...state,
                isFetchingSingle: false,
                singleFetchError: true,
                singleFetchErrorMessage: action.payload
            }
        
		default:
			return state
	}
}

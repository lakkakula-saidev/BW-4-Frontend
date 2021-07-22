import { initialState } from "../store";

export const searchReducer = (state = initialState.search, action) => {

    switch (action.type) {
        case 'ADD_SEARCH_RESULTS':

            return {
                ...state,
                search_result: action.payload
            }
        default:
            return state
    }
}
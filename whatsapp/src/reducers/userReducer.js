import { initialState } from "../store";

export const userReducer = (state = initialState.user, action) => {

    switch (action.type) {
        case 'SET_USER': // no update user? no need i guess

            return {
                ...state,
                currentUser: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}
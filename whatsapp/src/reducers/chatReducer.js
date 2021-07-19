import { initialState } from "../store";

export const chatReducer = (state = initialState.chat, action) => {

    console.log(action)
    switch (action.type) {
        case 'ADD_FETCH_RESULTS':

            return {
                ...state,
                chat_History: action.payload
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
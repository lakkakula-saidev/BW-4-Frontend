import { initialState } from "../store";

export const chatReducer = (state = initialState.chat, action) => {

    switch (action.type) {
        case 'ADD_FETCH_RESULTS':

            return {
                ...state,
                chat_history: action.payload
            }
        case 'ADD_PREV_ROOMS':

            return {
                ...state,
                prev_chat_rooms: action.payload
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
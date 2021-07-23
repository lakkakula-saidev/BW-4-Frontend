import { initialState } from "../store";

export const chatReducer = (state = initialState.chat, action) => {

    switch (action.type) {
        case 'ADD_FETCH_RESULTS':

            return {
                ...state,
                chat_history: action.payload
            }
        case 'CURRENT_ROOM_CHAT':

            return {
                ...state,
                current_chat_room: { ...state.current_chat_room, chats: state.current_chat_room.chats.concat(action.payload), _id: state.current_chat_room._id }
            }
        case 'ADD_PREV_ROOMS':

            return {
                ...state,
                prev_chat_rooms: action.payload
            }
        case 'SET_CURRENT_ROOM':

            return {
                ...state,
                current_chat_room: action.payload
            }
        case 'ADD_CURRENT_ROOM_REDUX':

            return {
                ...state,
                prev_chat_rooms: [...state.prev_chat_rooms.false(room => room._id !== action.payload._id), action.payload]
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
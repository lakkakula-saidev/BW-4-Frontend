import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userReducer } from '../reducers/userReducer.js'
import { chatReducer } from '../reducers/chatReducer'
import { searchReducer } from '../reducers/searchReducer'
import thunk from "redux-thunk";

export const initialState = {

    user: {
        currentUser: {},
        loading: true,
        error: false
    },
    chat: {
        prev_chat_rooms: [],
        current_chat_room: {},
        chat_history: [],
        loading: false,
        error: false
    },
    search: {
        query: '',
        search_result: [],
        loading: false,
        error: false
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combineReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    search: searchReducer

})

const configureStore = () => createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
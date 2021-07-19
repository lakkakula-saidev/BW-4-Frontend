import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userReducer } from '../reducers/userReducer.js'
import { chatReducer } from '../reducers/chatReducer'
/* import { queueReducer } from '../reducers/queueReducer' */
import thunk from "redux-thunk";


export const initialState = {

    user: {

        data: []
    },
    chat: {

        chat_History: [],
        loading: false,
        error: false
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combineReducer = combineReducers({
    user: userReducer,
    chat: chatReducer

})

const configureStore = () => createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
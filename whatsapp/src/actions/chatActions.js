import axios from 'axios'

export const fetch_Chat_Rooms = () => {
    return async (dispatch) => {

        let endpoint = process.env.REACT_APP_BACK_URL
        let res;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            res = await axios.get(endpoint + "/rooms", { withCredentials: true });

            if (res.status === 200 && res.data.length > 0) {

                dispatch({
                    type: 'ADD_PREV_ROOMS',
                    payload: res.data,
                })
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
            }
            else {
                console.log('Error has Occured!!')
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}

export const fetch_new_chat_rooms = (data) => {
    return async (dispatch) => {

        let endpoint = process.env.REACT_APP_BACK_URL
        let res;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            res = await axios.post(endpoint + "/rooms", data, { withCredentials: true });

            if (res.status === 200 || res.status === 201) {

                dispatch({
                    type: 'ADD_CURRENT_ROOM_REDUX',
                    payload: res.data,
                })
            }
            else {
                console.log('Error has Occured!!')
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}
export const fetch_old_room = () => {
    return async (dispatch) => {

        let endpoint = process.env.REACT_APP_BACK_URL
        let res;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            res = await axios.get(endpoint + "/rooms", { withCredentials: true });

            if (res.status === 200 && res.data.length > 0) {

                dispatch({
                    type: 'ADD_PREV_ROOMS',
                    payload: res.data,
                })
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
            }
            else {
                console.log('Error has Occured!!')
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}

export const handle_current_room = (target) => {

    return async (dispatch) => {
        let endpoint = process.env.REACT_APP_BACK_URL
        let res;

        try {

            res = await axios.get(endpoint + `/rooms/${target._id}`, { withCredentials: true });

            dispatch({
                type: 'SET_CURRENT_ROOM',
                payload: { ...res.data, _id: target._id }
            })
        } catch (error) {

            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}

export const push_new_message = (data) => {

    return (dispatch) => {

        try {

            dispatch({
                type: 'CURRENT_ROOM_CHAT',
                payload: { ...data }
            })
        } catch (error) {

            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}

export default { fetch_Chat_Rooms, fetch_new_chat_rooms, fetch_old_room, handle_current_room, push_new_message }
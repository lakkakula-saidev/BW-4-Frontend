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
            console.log(res)
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

export default { fetch_Chat_Rooms }
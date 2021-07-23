import axios from 'axios'


const search_Users = (query) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.get(endpoint + "/users?username=/^" + query + "/i", { withCredentials: true });

            if (response) {
                dispatch({
                    type: 'ADD_SEARCH_RESULTS',
                    payload: response.data.response
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

export default { search_Users }
import axios from 'axios'


const register_User = (data) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.post(endpoint + "/users/register", { ...data }); // data: {firstname, surname, email, password}
            if (response.ok) {

                dispatch({
                    type: 'SET_USER',
                    payload: response.data
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

const login_User = (data) => {
    return async (dispatch) => {

        const apiUrl = process.env.REACT_APP_ENDPOINT;
        const endpoint = `${apiUrl}${data}`;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.post(endpoint + "/users/login", { ...data }); // data: {email, password}
            if (response.ok) {

                dispatch({
                    type: 'SET_USER',
                    payload: response.data
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

export default { login_User, register_User }
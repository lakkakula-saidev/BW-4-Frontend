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
            if (response) {

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

        const endpoint = process.env.REACT_APP_BACK_URL;

        let res;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            res = await axios.post(endpoint + "/users/login", { ...data }, { withCredentials: true }); // data: {email, password}

            if (typeof res.data === "object" && res !== null) {
                let me = await axios.get(endpoint + "/users/me", { withCredentials: true });
                if (me) {
                    console.log('I am setting store of user')
                    dispatch({
                        type: 'SET_USER',
                        payload: me.data
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
            } else {

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

const update_User = (data) => {
    console.log('I am updating the user')
    return async (dispatch) => {

        const endpoint = process.env.REACT_APP_BACK_URL;

        let res;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })

            res = await axios.put(endpoint + "/users/me", { ...data });
            if (typeof res.data === "object" && res !== null) {

                dispatch({
                    type: 'SET_USER',
                    payload: res.data
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

const update_Avatar = (data) => {
    console.log('I am updating the user')
    return async (dispatch) => {

        const endpoint = process.env.REACT_APP_BACK_URL;

        let res;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })

            res = await axios.post(endpoint + "/users/me/avatar", data, { headers: { 'Content-Type': 'multipart/form-data' } });
            if (typeof res.data === "object" && res !== null) {

                dispatch({
                    type: 'SET_USER',
                    payload: res.data
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
export default { login_User, register_User, update_User, update_Avatar }
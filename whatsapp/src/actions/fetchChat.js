const fetch_Chat = (data) => ({
    type: 'ADD_FETCH_RESULTS',
    payload: data
})

/* export const fetch_Chat = (data) => {
    return async (dispatch) => {

        const apiUrl = process.env.REACT_APP_ENDPOINT;
        const endpoint = `${apiUrl}${data}`;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await fetch(endpoint);
            if (response.ok) {
                response = await response.json();

                dispatch({
                    type: 'ADD_FETCH_RESULTS',
                    payload: response.jobs.slice(0, 11),
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
} */

export default { fetch_Chat }
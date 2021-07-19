const Post = async (str1, Data) => {
    const apiUrl = process.env.REACT_APP_API_URL
    const endpoint = `${apiUrl}/${str1}`;

    let response
    try {
        response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(Data)
        }
        );
        if (response.ok) { /* response = await response.json() */
            return response.json()
        }
    } catch (error) {
        console.error(error)
        return null
    }


}

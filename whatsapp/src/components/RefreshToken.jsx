import axios from "axios";
import { useEffect } from "react";

const endpoint = process.env.REACT_APP_BACK_URL;
export const RefreshToken = async () => {
    useEffect(() => {
        setTimeout(() => {
            axios.post(endpoint + "users/refreshToken", { withCredentials: true });
        }, 1000 * 10);
    });

    return null;
};

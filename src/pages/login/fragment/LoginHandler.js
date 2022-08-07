import { BASE_API } from "../../../utils/constants";
import axios from "axios";

export default async function LoginHandler(values) {
    const LOGIN_URL = BASE_API + "user/login";
    try {
        const logindata = await axios.post(LOGIN_URL, values);
        const res = logindata.data;
        localStorage.setItem("item", JSON.stringify(res.data));
        localStorage.setItem("logged", true);

        return Promise.resolve({
            status: res.status,
            message: res.message,
        });
    } catch (err) {
        return Promise.resolve({
            status: "error",
            message: err.response.data.message,
        });
    }
}

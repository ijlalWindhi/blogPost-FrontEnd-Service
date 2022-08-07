import axios from "axios";
import { BASE_API } from "../../../utils/constants";

export default async function RegisterHandler(values) {
    const REGISTER_URL = BASE_API + "user/register";
    try {
        const res = await axios.post(REGISTER_URL, values);
        console.log(res);
        return Promise.resolve({
            status: res.data.status,
            message: res.data.message,
        });
    } catch (err) {
        return Promise.resolve({
            status: "error",
            message: err.response.data.message,
        });
    }
}
